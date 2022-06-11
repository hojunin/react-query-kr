// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "리액트 쿼리",
  tagline: "리액트 쿼리 공식문서 번역 프로젝트",
  url: "https://github.com/hojunin/react-query-kr",
  baseUrl: "/react-query-kr/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "hojunin", // Usually your GitHub org/user name.
  projectName: "react-query-kr", // Usually your repo name.
  deploymentBranch: "react-query-kr",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-4EZNTMJZQB",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "리액트 쿼리",
        logo: {
          alt: "React-query-logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "공식문서 번역본",
          },
          { to: "/blog", label: "블로그 번역본", position: "left" },
          {
            href: "https://hojunin.github.io/getcha_frontend_docs/",
            label: "겟차 프론트엔드 챕터",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "번역 문서",
            items: [
              {
                label: "시작하기",
                to: "/docs/overview",
              },
              {
                label: "컨셉과 가이드",
                to: "/docs/guide_and_concepts",
              },
              {
                label: "API 문서",
                to: "/docs/api_reference",
              },
            ],
          },
          {
            title: "이거 만든 사람들",
            items: [
              {
                label: "냐냐",
                to: "/blog",
              },
              {
                label: "개발자 깃허브",
                href: "https://github.com/hojunin",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HOJUN IN.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
