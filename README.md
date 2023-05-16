# express-signle-page-server

如果你打包之后的前端项目是单页面应用的话，那么你可能会遇到一个问题，打开之后直接访问路由会显示`404`的情况。这个`express`服务可以让我们访问路由的时候还是会返回`html`文件。

- 单页面应用访问
- 开启br和gzip
- 静态资源访问

你可以直接将你打包生成的项目放到根路径下，比如你打包后的文件夹是`dist`,那么可以放到这个项目的根路径进行访问。
如果你访问路径想放在其它路径，那么你也可以进行修改。
```ts
const staticAbsPath = path.resolve(__dirname, ".././dist"); // 静态资源访问路径
```
这个项目默认打开端口号是`9090`。

# 安装和启动
`yarn install` 安装依赖
`yarn dev` 开启服务

如果你本地已经全局安装`nodemon`,那么可以忽略这一点。如果没有安装可以执行`yarn add -g nodemon`全局安装`nodemon`。