---
date: 2026-09-11 13:54:42
lastmod: 2026-09-11 13:58:10
---
This describes the error where Git Pages Actions tab doesn't update the newest push even if Power Shell says everything is up to date

```
git commit --allow-empty -m "Trigger clean Quartz rebuild"
git push origin v5
```

This forces Git Pages to do a new Action. Once the action finishes, go to Cloudflare to [Purge the Cache](https://dash.cloudflare.com/3fa752a4f21e652451ab7b38d5f7d540/a-lighthouse.org/caching/configuration)