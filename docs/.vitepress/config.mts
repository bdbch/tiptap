import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tiptap Editor Docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    outline: {
      level: 'deep',
    },
    nav: [
      { text: "Home", link: "/" }
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: true,
        items: [
          {
            text: "Installation",
            link: "/getting-started/installation",
          },
          {
            text: "Create the editor",
            link: "/getting-started/create-the-editor",
          },
        ],
      },
      {
        text: "Concepts",
        collapsed: true,
        items: [
          {
            text: "Schema",
            link: "/concepts/schema",
          },
          {
            text: "Extensions",
            link: "/concepts/extensions",
          },
        ],
      },
      {
        text: "Extensions",
        collapsed: true,
        items: [
          { text: "StarterKit", link: "/extensions/starter-kit" },
          {
            text: "Nodes",
            collapsed: true,
            items: [
              { text: "Blockquote", link: "/extensions/nodes/blockquote" },
              { text: "BulletList", link: "/extensions/nodes/bullet-list" },
              { text: "Document", link: "/extensions/nodes/document" },
              { text: "Paragraph", link: "/extensions/nodes/paragraph" },
              { text: "Text", link: "/extensions/nodes/text" },
            ],
          },
          { text: "Marks", collapsed: true, items: [
            { text: "Bold", link: "/extensions/marks/bold" },
            { text: "Italic", link: "/extensions/marks/italic" },
            { text: "Strike", link: "/extensions/marks/strike" },
            { text: "Underline", link: "/extensions/marks/underline" },
            { text: "Link", link: "/extensions/marks/link" },
          ] },
          { text: 'Functionalities', collapsed: true, items: [
            { text: 'BubbleMenu', link: '/extensions/functionalities/bubble-menu' },
          ] },
        ],
      },
      {
        text: "Examples",
        collapsed: true,
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
