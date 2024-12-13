# Bold

The `Bold` mark is used to make text bold.

## Usage

```js
import { Editor } from '@tiptap/core'
import { Bold } from '@tiptap/extension-bold'

const editor = new Editor({
  element: document.querySelector('#editor'),
  extensions: [
    Bold,
  ],
})
```

## Options

### `HTMLAttributes`

The `HTMLAttributes` option allows you to add attributes to the HTML element that is rendered for the bold mark.

```js
Bold.configure({
  HTMLAttributes: {
    class: 'my-bold-class',
  },
})
```

## Commands

### `setBold`

The `setBold` command can be used to set the bold mark on the current selection.

```js
editor.commands.setBold()
```

### `toggleBold`

The `toggleBold` command can be used to toggle the bold mark on the current selection.

```js
editor.commands.toggleBold()
```

### `unsetBold`

The `unsetBold` command can be used to unset the bold mark on the current selection.

```js
editor.commands.unsetBold()
```