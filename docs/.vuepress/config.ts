import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions } from "vuepress-vite";

export default defineUserConfig<DefaultThemeOptions>({
  base: '/web-standards/',
  lang: "zh-CN",
  title: "前端开发规范",
  description: "开发规范指南",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icons/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon-32x32.png",
      },
    ],
    ["link", { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "application-name", content: "Web Standards" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Web Standards" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],
  dest: "dist",
  host: "0.0.0.0",
  port: 8080,
  open: true,
  themeConfig: {
    // logo: '/assets/logo.png',
    repo: "https://github.com/wkl007/web-standards",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: true,
    lastUpdatedText: "上次更新",
    docsDir: "docs",
    docsBranch: "master",
    navbar: [
      { text: "指南", link: "/guide/" },
      { text: "前端开发规范", link: "/web/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          children: ["/guide/README.md"],
        },
      ],
      "/web/": [
        {
          text: "前端开发规范",
          children: [
            "/web/README.md",
            "/web/chapter1",
            "/web/chapter2",
            "/web/chapter3",
            "/web/chapter4",
            "/web/chapter5",
            "/web/chapter6",
            "/web/chapter7",
            "/web/chapter8",
            "/web/chapter9",
            "/web/chapter10",
            "/web/chapter11",
          ],
        },
      ],
    },
    sidebarDepth: 2,
    contributors: true,
    contributorsText: "贡献者",
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索",
          },
        },
      },
    ],
    ["@vuepress/plugin-pwa"],
    [
      "@vuepress/plugin-pwa-popup",
      {
        locales: {
          "/": {
            message: "发现新内容可用",
            buttonText: "刷新",
          },
        },
      },
    ],
  ],
});
