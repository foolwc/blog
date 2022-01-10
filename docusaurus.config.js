// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'foolwc的博客',
    tagline: 'foolwc的博客',
    url: 'https://foolwc.github.io',
    baseUrl: '/blog/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'foolwc', // Usually your GitHub org/user name.
    projectName: 'blog', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/foolwc/blog/tree/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'foolwc的博客',
                logo: {
                    alt: 'foolwc的博客',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/foolwc/',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    // {
                    //   title: 'Docs',
                    //   items: [
                    //     {
                    //       label: 'Tutorial',
                    //       to: '/docs/intro',
                    //     },
                    //   ],
                    // },
                    {
                        title: '友情链接',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                        ],
                    },
                    {
                        title: '我的',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/foolwc',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} foolwc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                // If Algolia did not provide you any appId, use 'BH4D9OD16A'
                appId: 'HFP282SVI1',

                // Public API key: it is safe to commit it
                apiKey: 'c7d016b1ecba58322521545d04b1f7e1',

                indexName: 'github_blog',

                contextualSearch: true,

                externalUrlRegex: 'external\\.com|domain\\.com',

                searchParameters: {},

            },
        }),
};

module.exports = config;
