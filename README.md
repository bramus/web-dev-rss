# RSS Feeds for web.dev (Cloudflare Worker)

## Live Endpoints

- https://web-dev-rss.bramus.workers.dev/blog
- https://web-dev-rss.bramus.workers.dev/articles
- https://web-dev-rss.bramus.workers.dev/case-studies

## Dev

- `npm i`
- `npm run dev`
- Now go visit http://localhost:8787/

## Deploy

- `npm run deploy`
- Now go visit https://web-dev-rss.bramus.workers.dev/

## Raw Data Feeds

## Web.dev RSS Feeds

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
