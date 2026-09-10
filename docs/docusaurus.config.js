// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");
const fs = require("fs");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const typedocItems = (() => {
  const typedocDir = path.resolve(__dirname, "../docs/typedoc");
  if (!fs.existsSync(typedocDir)) return [];
  const entries = fs.readdirSync(typedocDir, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory())
    .map((e) => ({
      type: "doc",
      id: `api/${e.name}`,
      label: e.name.charAt(0).toUpperCase() + e.name.slice(1),
    }));
})();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "✨ Khulnasoft API",
  tagline: "A (very WIP) TypeScript framework for robust & polished REST APIs",
  url: "https://khulnasoft-docs-1.netlify.app",
  baseUrl: "/khulnasoft/",
  organizationName: "khulnasoft",
  projectName: "khulnasoft-api",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl:
            "https://github.com/khulnasoft/khulnasoft-api/tree/main/docs",
          includeCurrentVersion: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "✨ Khulnasoft API",
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/khulnasoft/khulnasoft-api",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
              {
                label: "API Reference",
                to: "/docs/api",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/khulnasoft/khulnasoft-api",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Khulnasoft. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  // Add TypeDoc-generated API docs as a custom route
  customFields: {
    typedocItems: typedocItems,
  },
};

module.exports = config;
