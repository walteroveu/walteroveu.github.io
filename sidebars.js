import { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars = {
  skills: [
    'skills/guide',
    {
      label: '介绍',
      type: 'category',
      link: {
        type: 'doc',
        id: 'skills/web/my_guide',
      },
      items: [
        'skills/web/common',
      ],
    },
  ],
  tools: [
  
  ],
}

module.exports = sidebars