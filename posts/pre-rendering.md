---
title: 'Two Forms of Pre-rendering 预呈现'
date: '2020-01-01'
---

## 这东西不错啊
Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

### 代码测试

```bash
$ yomo serve -v -c example/receiver-9000.yaml

Using config file: example/receiver-9000.yaml
ℹ️   Found 0 flows in zipper config
ℹ️   Found 1 sinks in zipper config
ℹ️   Sink 1: PresenceHandler
ℹ️   Running YoMo Serverless...
2021/07/13 16:44:28 ✅ Listening on localhost:9000
```

### 表格测试

| 标题1 | 标题2 | 标题3 |
| ----- | ----- | ----- |
| 行1   | 行    | dd    |
| d     | f     |       |
|       | d     | d     |
