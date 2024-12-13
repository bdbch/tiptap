---
outline: 'deep'
---

# Installation

To get started, we will first need to install the core package & the ProseMirror packages that Tiptap depends on. Use the package manager of your choice to install the packages.

:::code-group

```bash [Javascript]
npm install @tiptap/core @tiptap/pm
```

```bash [React]
npm install @tiptap/react @tiptap/pm
```

```bash [Vue]
npm install @tiptap/vue-3 @tiptap/pm
```

```bash [Vue 2]
npm install @tiptap/vue-2 @tiptap/pm
```

:::

After the installation is complete, you are almost ready to start using Tiptap Editor in your project.

## Installing the Starter Kit

Tiptap runs on ProseMirror which requires a [schema](/concepts/schema) to be defined. The schema defines the structure of the document, the nodes and the marks that can be used in the editor. It also defines how nodes and marks can be nested within each other.

By default, the schema is not defined to allow you complete freedom about Tiptap's nodes. However to make it easy to get started, we have created a [StarterKit extension](/extensions/starter-kit) that you can use to get started quickly.

To install the starter kit, run the following command:

```bash
npm install @tiptap/starter-kit
```