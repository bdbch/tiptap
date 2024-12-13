# Italic

The `Italic` mark is used to make text bold.

## Usage

```js
import { Editor } from '@tiptap/core'
import { Italic } from '@tiptap/extension-italic'

const editor = new Editor({
  element: document.querySelector('#editor'),
  extensions: [
    Italic,
  ],
})
```

## Options

### `HTMLAttributes`

The `HTMLAttributes` option allows you to add attributes to the HTML element that is rendered for the bold mark.

```js
Italic.configure({
  HTMLAttributes: {
    class: 'my-italic-class',
  },
})
```

## Commands

### `setItalic`

The `setItalic` command can be used to set the italic mark on the current selection.

```js
editor.commands.setItalic()
```

### `toggleItalic`

The `toggleItalic` command can be used to toggle the italic mark on the current selection.

```js
editor.commands.toggleItalic()
```

### `unsetItalic`

The `unsetItalic` command can be used to unset the italic mark on the current selection.

```js
editor.commands.unsetItalic()
```