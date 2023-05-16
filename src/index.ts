const express = require("express");
const path = require("path");
const app = express();
import history from "connect-history-api-fallback";
const expressStaticGzip = require("express-static-gzip");
const compression = require("compression");
const staticAbsPath = path.resolve(__dirname, ".././dist"); // 静态资源访问路径

app.use(compression());
app.use(
  "/",
  expressStaticGzip(staticAbsPath, {
    orderPreference: ["br", "gzip"], // 开启br和gzip
    setHeaders: function (res: any, path: string) {
      res.setHeader("Cache-Control", "public, max-age=31536000"); // 开启http缓存
    },
  })
);

app.use(
  history({
    rewrites: [
      {
        from: /^\/$/,
        to() {
          return staticAbsPath + "/index.html";
        },
      },
    ],
  })
); // 单页面应用依然响应index.html

app.use(express.static(staticAbsPath)); // 静态资源访问

console.log("http://127.0.0.1:9090");

app.listen(9090);
