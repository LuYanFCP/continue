// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  docsSidebar: [
    "docs/introduction",
    {
      type: "category",
      label: "Getting started",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "docs/getting-started",
        },
      ],
    },
    {
      type: "category",
      label: "Chat",
      link: {
        type: "doc",
        id: "docs/chat/how-to-use-it",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "docs/chat",
        },
      ],
    },
    {
      type: "category",
      label: "Autocomplete",
      link: {
        type: "doc",
        id: "docs/autocomplete/how-to-use-it",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "docs/autocomplete",
        },
      ],
    },
    {
      type: "category",
      label: "Edit",
      link: {
        type: "doc",
        id: "docs/edit/how-to-use-it",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "docs/edit",
        },
      ],
    },
    {
      type: "category",
      label: "Actions",
      link: {
        type: "doc",
        id: "docs/actions/how-to-use-them",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "docs/actions",
        },
      ],
    },
    "docs/telemetry",
    "docs/troubleshooting",
    {
      type: "link",
      label: "Customize",
      href: "/customize/overview",
    },
  ],
  customizingSidebar: [
    "customize/overview",
    {
      type: "category",
      label: "Model providers",
      collapsed: false,
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "customize/model-providers/top-level",
        },
        {
          type: "category",
          label: "More",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "customize/model-providers/more",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Model types",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "customize/model-types",
        },
      ],
    },
    "customize/context-providers",
    "customize/slash-commands",
    "customize/development-data",
    {
      type: "category",
      label: "Deep dives",
      items: [
        {
          type: "autogenerated",
          dirName: "customize/deep-dives",
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        {
          type: "autogenerated",
          dirName: "customize/tutorials",
        },
      ],
    },
    "customize/config",
    "customize/changelog",
  ],
};

module.exports = sidebars;
