const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carlos Memije',
  tagline: 'Coding is cool',
  favicon: 'img/favicon.ico',

  url: 'https://carlosmemije.com',

  baseUrl: '/',

  organizationName: 'CarlosMemije', 
  projectName: 'carlosmemije.com', 

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
      navbar: {
        title: 'Carlitos  😺',
        style: 'primary',
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
        style: 'light',
        links: [
 
        ],
        copyright: `© ${new Date().getFullYear()} <a href="https://instagram.com/carlosmemije.py" target="_blank" rel="noopener noreferrer">Carlos Memije</a>`,

      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
