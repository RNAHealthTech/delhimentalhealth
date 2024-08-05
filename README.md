# Dr. Pratik Website 🌍

## Sitemap : 
1. install the sitemap 
2. create a ts file and run with following : 

in scripts inside package.json file

```sh
  "build": "tsc generateDynamicSitemap.ts",
    "generate-sitemap": "npm run build && node generateDynamicSitemap.js",


```

then run 

```sh
npm run generate-sitemap
```

with this method you have to install with `-D @types/node, ts-node, sitemap`
