import handleRSS from './rss';

export default {
	async fetch(request, env, ctx) {
		return handleRSS.fetch(request);
	},
};
