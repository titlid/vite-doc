import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'zh-CN',
  title: '5G标准版',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: '开始了解', link: '/阅读说明' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '阅读说明', link: '/阅读说明' },
          { text: '编写指南', link: '/文档编写指南' },

          // ...
        ],
      },
      {
        text: '架构设计',
        items: [
          { text: '技术架构', link: '/架构设计/技术架构' },

          // ...
        ],
      },
      {
        text: '接口文档',
        items: [{ text: 'API', link: '/API' }],
      },
      {
        text: '测试',
        items: [{ text: '测试页面', link: '/测试' }],
      },
    ],
  },
});
