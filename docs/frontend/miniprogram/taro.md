# Taro

## 介绍
[**Taro**](https://taro-docs.jd.com/docs/) 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用。

## 项目创建

### 安装
``` bash
# npm install cli
$ npm install -g @tarojs/cli

# 创建模板
taro init clockin-deer
```

### taro模板选项
``` bash
Taro 即将创建一个新项目!
Need help? Go and open issue: https://tls.jd.com/taro-issue-helper

? 请输入项目介绍 打卡鹿
? 请选择框架 Vue3
? 是否需要使用 TypeScript ？ Yes
? 请选择 CSS 预处理器（Sass/Less/Stylus） Sass
? 请选择编译工具 Webpack5
? 请选择包管理工具 pnpm
? 请选择模板源 Github（最新）
✔ 拉取远程模板仓库成功！
? 请选择模板 vue3-NutUI4（使用 NutUI4.0 的模板）
```
### 启动
``` bash
# 启动h5
pnpm run dev:h5
# 启动报错[object Object] is not a PostCSS plugin,安装postcss
pnpm install -D postcss
```

## 配置介绍

### 目录
```
├── dist                        编译结果目录
|
├── config                      项目编译配置目录
|   ├── index.js                默认配置
|   ├── dev.js                  开发环境配置
|   └── prod.js                 生产环境配置
|
├── src                         源码目录
|   ├── pages                   页面文件目录
|   |   └── index               index 页面目录
|   |       ├── index.js        index 页面逻辑
|   |       ├── index.css       index 页面样式
|   |       └── index.config.ts index 页面配置
|   |
|   ├── app.ts               项目入口文件
|   ├── app.scss                 项目总通用样式
|   └── app.config.ts          项目入口配置
|
├── project.config.json         微信小程序项目配置 project.config.json
├── project.tt.json             抖音小程序项目配置 project.tt.json
├── project.swan.json           百度小程序项目配置 project.swan.json
├── project.qq.json             QQ 小程序项目配置 project.qq.json
|
├── babel.config.js             Babel 配置
├── tsconfig.json               TypeScript 配置
├── .eslintrc                   ESLint 配置
|
└── package.json
```
### app.config.ts
> app.config.ts是目录结构文件下的全局配置文件  

app.config.ts 对应小程序规范的全局配置文件 app.json，优势在于它是 JS 文件可以编写逻辑。配置以**微信小程序的全局配置**为规范。详情请参考[全局配置](https://taro-docs.jd.com/docs/app-config)。

### page.config.ts
> page.config.ts是目录结构pages文件下的页面配置文件  

page.config.ts 对应小程序规范的页面配置文件 page.json，优势在于它是 JS 文件可以编写逻辑。配置以**微信小程序的页面配置**为规范。详情请参考[页面配置](https://taro-docs.jd.com/docs/page-config)。


### 生命周期（入口组件）
[入口组件配置](https://taro-docs.jd.com/docs/vue-entry)
``` javascript
import { createApp } from 'vue'

const app = createApp({
  // 可以使用所有的 Vue 生命周期方法
  mounted () {},

  // 对应 onLaunch 
  // 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch () {},

  // 对应 onShow 
  // 当小程序有后台进入到前台运行或重新进入页面时
  onShow (options) {},

  // 对应 onHide
  // 当navigateTo或底部tab切换时
  onHide () {},

  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export app
```

### 生命周期（页面组件）
> DOM操作在onReady方法内使用

[vue3组合式函数](https://taro-docs.jd.com/docs/composition-api#useload)

``` javascript
<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'

export default {
  mounted () {},

  // onLoad
  // 小程序注册完成后，加载页面，触发onLoad方法。一个页面只会调用一次
  onLoad () {},

  // onReady
  // 首次显示页面，页面初次渲染完成，会触发onReady方法，渲染页面元素和样式 此时可以操作dom
  onReady () {},

  // 对应 onShow
  onShow () {},

  // 对应 onHide
  onHide () {},

  // 对应 onPullDownRefresh
  onPullDownRefresh () {},

  setup () {
    const msg = ref('Hello world')
    return {
      msg
    }
  }
}
</script>
```


### 生命周期顺序
- 入口组件  
beforeMount-mounted-onLaunch–onShow
- 页面组件  
beforeMount-mounted-onLoad–onShow-onReady


### 自定义Tabbr
[tabbar配置](https://taro-docs.jd.com/docs/custom-tabbar)
- 文件位置 src/app.config.ts  
``` javascript
tabBar: {
    custom:true,
    color: '#3333333',
    selectedColor: '#fa2c19',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/user/index',
        text: '用户',
      },
    ]
  }
```

