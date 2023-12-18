import { redirects } from './config.js';

export default {
	async fetch(request) {
		const url = new URL(request.url);
		const content_type = url.pathname.replace(/^\//, '').replace(/\/$/, ''); // Trim off leading and trailing /

		if (!Object.keys(redirects).includes(content_type)) {
			return new Response(null, { status: 404 });
		}

		return Response.redirect(redirects[content_type], 301);
	},
};
