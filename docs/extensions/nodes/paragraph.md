# Paragraph

The `Paragraph` node is the default node used by ProseMirror for wrapping text nodes.

> [!DANGER]
> The `Paragraph` node is required and should not be disabled. Without a paragraph node, ProseMirror will not work probably.

## Usage

```js
import { Editor } from '@tiptap/core'
import { Paragraph } from '@tiptap/extension-paragraph'

const editor = new Editor({
  element: document.querySelector('#editor'),
  extensions: [
    Paragraph,
  ],
})
```

## Options

### `HTMLAttributes`

You can pass HTML attributes to the `Paragraph` node.

```js
Paragraph.configure({
  HTMLAttributes: {
    class: 'foo',
  },
})
```

## Commands

### `setParagraph`

Set the current node to a paragraph.

```js
editor.commands.setParagraph()
```