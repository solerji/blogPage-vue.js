# solerji's blog

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 内容说明
本项目为个人博客的前端页面部分，开发模块分为管理平台和博客展示页面两部分。该项目涉及的旧版本（使用express框架）后台部分代码在,https://github.com/solerji/Blog-express.js （已废止），新版本后台代码地址为，https://github.com/solerji/Blog-egg.js
开发进度可查看Update log。

功能点：

1.博客展示页面：

支持文章展示

支持按标题查找文章

支持按标签查找文章

支持文章按时间轴展示

个人介绍页面支持更改

2.博客管理系统

支持管理者密码登录

支持文章在线编辑并存储

支持文章的增加，删除和修改

支持文章内容查看

## 博客部分内容截图
手机端：
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/small1.jpg?raw=true)
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/small2.jpg?raw=true)
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/small3.jpg?raw=true)
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/small4.jpg?raw=true)
ipad:
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/QQ20191206-2.png?raw=true)
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/4.png?raw=true)
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/5.png?raw=true)
PC:
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/big1.png?raw=true)
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/big2.png?raw=true)
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/big3.png?raw=true)
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/big4.png?raw=true)
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/big6.png?raw=true)
![Image text](https://github.com/solerji/blogPage-vue.js/blob/master/src/assets/images/big7.png?raw=true)


## 博客部署位置
https://test.solerji.top

## 相关技术及用到的库和插件
前端部分：
主要框架：vue.js、
markdown编辑器：mavon-editor、
动画库：animate.css、
首页动画插件：vue-particle-line

后台部分：
核心框架：node.js、
express、egg
数据库：mysql、
日志管理：egg-scripts、
代理： nginx


## Update log
2019-08-02 update firstPage Style, divide models

2019-08-26 update axios methods, change database from mongodb to mysql

2019-08-27 update article page styles

2019-08-28 update article interface

2019-08-29 update manage platform style

2019-09-04 fix article checked interface

2019-09-05 update article delete interface

2019-09-08 update timeline interface

2019-10-01--2019-11-01 change system model and fix bug

2019-11-26 Deployment system on the first time

2020-02-28 change new frame
