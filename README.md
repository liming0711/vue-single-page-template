# vue-single-page-template

> 基于 vue 的单页应用模板

## src 目录结构

├─assets             项目中会用到的资源
│ ├─fonts
│ ├─images
│ ├─styles
├─components         公共组件
├─config             公共的静态变量、配置项
├─modules            页面（单页应用中每个页面都可看作是一个大的模块，属于该页面的逻辑组件放到自身文件夹下，而不要放到components文件夹内）
├─requests           请求方法及接口
│ ├─base-module.js
│ ├─validator.js
├─router             路由
├─store              状态管理
└─utils              工具集
