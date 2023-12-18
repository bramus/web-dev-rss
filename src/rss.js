import { data, endpoint, headers } from './config.js';

const getRawDataFromOrigin = async (what) => {
	const feed_req = await fetch(endpoint, {
		headers,
		body: data[what],
		method: 'POST',
	});

	let feed_text = await feed_req.text();
	feed_text = feed_text.replace(")]}'\n", ''); // For some mysterious reason the API response is not valid JSON/JS but contains some gibberish at the start

	const raw_data = JSON.parse(feed_text);

	return raw_data;
};

const buildItem = (item) => {
	// @TODO: Escaping?
	return `<item>
	<title>${item.title}</title>
	<link>${item.link.replace('?hl=en', '')}</link>
	<guid isPermaLink="false">${item.link.replace('?hl=en', '')}</guid>
	<description><![CDATA[${item.description}]]></description>
	<pubDate>${new Date(item.timestamp).toUTCString()}</pubDate>
</item>`;
};

const buildFeed = (self_url, content_type, items) => {
	return `<?xml version="1.0" encoding="UTF-8" ?>
	<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Web.dev RSS (${content_type})</title>
		<atom:link href="${self_url}" rel="self" type="application/rss+xml" />
		<link>https://www.web.dev/</link>
		<lastBuildDate>${new Date(items[0].timestamp).toUTCString()}</lastBuildDate>
		<language>en-US</language>
		<description>RSS Feed for web.dev content (${content_type})</description>
		${items.map((item) => buildItem(item)).join('\n')}
	</channel>
	</rss>`;
};

export default {
	async fetch(request) {
		const url = new URL(request.url);
		const content_type = url.pathname.replace(/^\//, '').replace(/\/$/, ''); // Trim off leading and trailing /

		if (!Object.keys(data).includes(content_type)) {
			return new Response(null, { status: 404 });
		}

		let raw_data = null;
		try {
			raw_data = await getRawDataFromOrigin(content_type);
		} catch (e) {
			return new Response('Could not fetch data from origin server', { status: 504 });
		}

		const items = raw_data[0].map((item) => ({
			title: item[0],
			link: item[6],
			author: item[17],
			description: item[4],
			timestamp: item[5][0] * 1000,
		}));

		const feed_text = buildFeed(request.url, content_type, items);

		const response = new Response(feed_text.trim());
		response.headers.set('Content-type', 'text/xml;charset=UTF-8');

		return response;
	},
};
