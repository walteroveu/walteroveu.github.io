import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b7b'),
    exact: true
  },
  {
    path: '/blog/2024/03/13/myself',
    component: ComponentCreator('/blog/2024/03/13/myself', '6df'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '441'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '643'),
    exact: true
  },
  {
    path: '/blog/tags/basketball',
    component: ComponentCreator('/blog/tags/basketball', 'df4'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'c10'),
    exact: true
  },
  {
    path: '/blog/tags/fe',
    component: ComponentCreator('/blog/tags/fe', '509'),
    exact: true
  },
  {
    path: '/blog/tags/travel',
    component: ComponentCreator('/blog/tags/travel', '827'),
    exact: true
  },
  {
    path: '/blog/tags/yanqihu',
    component: ComponentCreator('/blog/tags/yanqihu', '586'),
    exact: true
  },
  {
    path: '/blog/travel-to-yanqihu',
    component: ComponentCreator('/blog/travel-to-yanqihu', '3ce'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '61a'),
    exact: true
  },
  {
    path: '/newpage',
    component: ComponentCreator('/newpage', '9f2'),
    exact: true
  },
  {
    path: '/testPage',
    component: ComponentCreator('/testPage', '023'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1a6'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'af8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f7b'),
            routes: [
              {
                path: '/docs/common',
                component: ComponentCreator('/docs/common', 'df0'),
                exact: true,
                sidebar: "skills"
              },
              {
                path: '/docs/guide',
                component: ComponentCreator('/docs/guide', 'ac9'),
                exact: true,
                sidebar: "skills"
              },
              {
                path: '/docs/web_guide',
                component: ComponentCreator('/docs/web_guide', 'd4f'),
                exact: true,
                sidebar: "skills"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2fa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
