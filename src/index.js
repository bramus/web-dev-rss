import handleRedirect from './redirect';
import handleRSS from './rss';

export default {
	async fetch(request, env, ctx) {
		const redirect = await handleRedirect.fetch(request);
		if (redirect.status != 404) return redirect;

		const rss = await handleRSS.fetch(request);
		if (rss.status != 404) return rss;

		return new Response('Invalid Feed', { status: 404 });
	},
};
