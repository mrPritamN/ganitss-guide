const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  latex: true,
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  i18n: {
    locales: ["en", "bn", "hn"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
});
