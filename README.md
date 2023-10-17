# RSS Feeds for web.dev (Cloudflare Worker)

This repo contains a Cloudflare Worker that generates RSS Feeds for the various types of Dynamic Content that [https://web.dev/](https://web.dev/) has. The worker parses the [raw data](#raw-data-feeds) and transforms them to [RSS 2.0](https://www.rssboard.org/rss-specification).

## Live Endpoints

- Blog: https://web-dev-rss.bramus.workers.dev/blog
- Articles: https://web-dev-rss.bramus.workers.dev/articles
- Case Studies: https://web-dev-rss.bramus.workers.dev/case-studies

## Dev

- `npm i`
- `npm run dev`
- Now go visit http://localhost:8787/

## Deploy

- `npm run deploy`
- Now go visit https://web-dev-rss.bramus.workers.dev/

## Raw Data Feeds

### Blog

```bash
curl 'https://web.dev/_d/dynamic_content' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9,nl;q=0.8,fr;q=0.7' \
  -H 'content-type: text/plain;charset=UTF-8' \
  --data-raw '[null,null,null,"type:blog",null,null,null,null,10,null,null,null,2]' \
  --compressed
```

### Articles

```bash
curl 'https://web.dev/_d/dynamic_content' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9,nl;q=0.8,fr;q=0.7' \
  -H 'content-type: text/plain;charset=UTF-8' \
  --data-raw '[null,null,null,"family_url:/articles",null,null,null,null,10,null,null,null,2]' \
  --compressed
```

### Case Studies

```bash
curl 'https://web.dev/_d/dynamic_content' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9,nl;q=0.8,fr;q=0.7' \
  -H 'content-type: text/plain;charset=UTF-8' \
  --data-raw '[null,null,null,"keyword:casestudy",null,null,null,null,10,null,null,null,2]' \
  --compressed
```

## License

This project is released under the MIT public license. See the enclosed `LICENSE` for details.
