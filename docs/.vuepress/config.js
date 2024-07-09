import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  title: '技术文档',
  theme: defaultTheme({
    navbar: [
      {
        text: '前端',
        prefix: '/frontend/',
        children: [
          {
            text: '小程序',
            // prefix: 'miniprogram/',
            link: 'miniprogram/'
          }
        ]
      },
      {
        text: '运维',
        prefix: '/devops/',
        children: [
          {
            text: 'podman',
            // prefix: 'podman/',
            link: 'podman/'
          }
        ]
      }
    ],
    sidebar:
    {
      '/frontend/': [
        {
          // text: '微信小程序',
          // collapsible: true,
          // 前缀可以是相对路径，等同于 `prefix: /reference/bundler/`
          prefix: 'miniprogram/',
          children: ['index', 'develop'],
        },
      ],
      '/devops/': [
        {
          prefix: 'podman/',
          children: ['index','vuepress'],
        }
      ],
      // '/devops/':'heading',
      '/': 'heading'
    },
    sidebarDepth: 3
  }),
})