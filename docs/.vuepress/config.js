import { defaultTheme } from "@vuepress/theme-default"
import { defineUserConfig } from "vuepress"
import { viteBundler } from "@vuepress/bundler-vite"

export default defineUserConfig({
  lang: "zh-CN",
  title: "xjx的博客",
  description: "欢迎来到xjx的博客",

  theme: defaultTheme({
    logo: "https://vuejs.press/images/hero.png",
    // 在这里进行配置
    navbar: [
      // NavbarItem
      {
        text: "首页",
        link: "/",
      },
      // NavbarGroup
      {
        text: "数学",
        link: "/math/",
      },
      {
        text: "计算机",
        link: "/computer/",
      },
    ],
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      "/math": [
        {
          text: "数学",
          children: [
            {
              text: "代数数和超越数",
              link: "/math/代数数和超越数.md",
            },
            {
              text: "测试",
              link: "/math/测试.md",
            },
          ],
        },
      ],
      "/computer": [
        {
          text: "计算机",
          collapsible: true,
          children: [
            {
              text: "内存原理",
              link: "/computer/内存原理.md",
            },
          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
})
