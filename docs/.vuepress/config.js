module.exports = {
  base: '/',
  dest: 'dist',
  title: '前端开发规范',
  description: '开发规范指南',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  host: '0.0.0.0',
  port: 8080,
  serviceWorker: true,
  themeConfig: {
    // logo: '/assets/logo.png',
    repo: 'https://github.com/wkl007/web-standards',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    docsDir: 'docs',
    docsBranch: 'master',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '前端开发规范', link: '/web/' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            ['', '介绍']
          ]
        }
      ],
      '/web/': [
        {
          sidebarDepth: 2,
          title: '前端开发规范',
          collapsable: false,
          children: [
            ['', '介绍'],
            'chapter1',
            'chapter2',
            'chapter3',
            'chapter4',
            'chapter5',
            'chapter6',
            'chapter7',
            'chapter8',
            'chapter9',
            'chapter10',
            'chapter11',
          ]
        }
      ]
    }
  },
  plugins: [
    '@vuepress/pwa',
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 dayjs
          const dayjs = require('dayjs')
          require('dayjs/locale/zh-cn')
          dayjs.locale('zh-cn')
          return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
        }
      }
    ]
  ]
}
