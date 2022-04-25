const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Pryma Community",
  tagline: "Server Minecraft",
  url: "https://www.prymacommunity.it",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Rickylachow", // Usually your GitHub org/user name.
  projectName: "Pryma", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/RickyLaChow/Pryma/edit/main/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "PrymaCommunity",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png"
        },
        items: [
          {
            type: "doc",
            docId: "Introduzione",
            position: "left",
            label: "Documentazione ✨"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/Introduzione"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Tiktok",
                href: "https://www.tiktok.com/@prymacommunity"
              },
              {
                label: "Discord",
                href: "https://www.discord.io/pryma"
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/mcpryma/"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Documentazione",
                to: "/docs"
              },
              {
                label: "GitHub",
                href: "https://github.com/RickyLaChow"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Prymacommunity.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};
