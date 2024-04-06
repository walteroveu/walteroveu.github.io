// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wh 的个人博客',
  tagline: '人生是一场旅行',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  url: 'https://walteroveu.github.io', // 你的网站URL（刚所创建的github仓库名）
  projectName: 'walteroveu.github.io', // 刚所创建的github仓库名
  organizationName: 'walteroveu', // github账户名
  deploymentBranch: 'my-site', // 部署到的分支名


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

  i18n: {
      defaultLocale: 'zh-Hans',
      locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Logo',
          src: 'img/wh.png',
          width: 32,
          height: 32,
          className: 'custom-navbar-logo-class',
        },
        
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'skills',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '文档',
                to: '/docs/guide',
              },
              {
                label: 'test',
                to: '/testPage',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/walteroveu/walteroveu.github.io',
              }
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: '语雀',
                href: 'https://www.yuque.com/haloveu/athozi/dacm7i',
              }
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
