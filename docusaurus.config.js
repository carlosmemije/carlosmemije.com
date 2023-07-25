// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carlos Memije',
  tagline: 'Coding is cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CarlosMemije', // Usually your GitHub org/user name.
  projectName: 'CarlosMemije.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.ico',
      navbar: {
        title: 'Carlos Memije',
        items: [
          {
            href: 'https://docs.google.com/document/d/1qa5sSCLFI9rBf0U4WFXGrKYoDHtH4PgSjqYjBBLevKM/edit?usp=sharing',
            label: 'Resume',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/carlosmemije/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://github.com/carlosmemije',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `© ${new Date().getFullYear()} Carlos Memije`,
        //Built using [HTML](https://html.com/) [CSS](https://getbootstrap.com/) [JavaScript](https://www.javascript.com/) [\*Source Code\*](https://github.com/carlosmemije/carlosmemije)

      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
