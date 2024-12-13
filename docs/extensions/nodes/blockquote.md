# Blockquote

The `Blockquote` node is used for quoting blocks of content.

## Usage

```js
import { Editor } from '@tiptap/core'
import { Blockquote } from '@tiptap/extension-blockquote'

const editor = new Editor({
  element: document.querySelector('#editor'),
  extensions: [
    Blockquote,
  ],
})
```

## Options

### `HTMLAttributes`

You can pass HTML attributes to the `Blockquote` node.

```js
Blockquote.configure({
  HTMLAttributes: {
    class: 'foo',
  },
})
```

## Commands

### `setBlockquote`

Set the current node to a quote.

```js
editor.commands.setBlockquote()
```

### `toggleBlockquote`

Toggle the current node to a quote.

```js
editor.commands.toggleBlockquote()
```

### `unsetBlockquote`

Unset the current node from a quote.

```js
editor.commands.unsetBlockquote()
```