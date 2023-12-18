const redirects = {
	blog: 'https://web.dev/blog/feed.xml',
	articles: 'https://web.dev/articles/feed.xml',
};

const endpoint = 'https://web.dev/_d/dynamic_content';

const data = {
	blog: '[null,null,null,"type:blog",null,null,null,null,10,null,null,null,2]',
	articles: '[null,null,null,"family_url:/articles",null,null,null,null,10,null,null,null,2]',
	'case-studies': '[null,null,null,"keyword:casestudy",null,null,null,null,10,null,null,null,2]',
};

const headers = {
	accept: '*/*',
	'accept-language': 'en-US,en;q=0.9,nl;q=0.8,fr;q=0.7',
	'content-type': 'text/plain;charset=UTF-8',
};

export { redirects, endpoint, data, headers };
