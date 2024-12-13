# BubbleMenu

The `BubbleMenu` extension provides a bubble menu implementation for Tiptap. This way you can show a menu with commands and other UI elements when the user selects text.

## Usage

```js
import { Editor } from '@tiptap/core'
import { BubbleMenu } from '@tiptap/extension-bubble-menu'

const editor = new Editor({
  element: document.querySelector('#editor'),
  extensions: [
    BubbleMenu.configure({
      element: document.querySelector('#bubble-menu'),
    }),
  ],
})
```

## Options

### `element`

The element where the bubble menu should be rendered.

```js
BubbleMenu.configure({
  element: document.querySelector('#bubble-menu'),
})
```

### `pluginKey`

The plugin key used to register the BubbleMenu plugin to ProseMirror. If you use multiple BubbleMenu extensions, you should change this key.

```js
BubbleMenu.configure({
  pluginKey: 'bubbleMenu',
})
```

### `tippyOptions`

Options for the Tippy.js library. You can find all available options [here](https://atomiks.github.io/tippyjs/v6/all-props/).

```js
BubbleMenu.configure({
  tippyOptions: {
    placement: 'top',
  },
})
```

### `updateDelay`

The delay in milliseconds to update the bubble menu. This can be useful if you want to prevent the bubble menu from flickering.

```js
BubbleMenu.configure({
  updateDelay: 100,
})
```

### `shouldShow`

A function that returns a boolean to determine if the bubble menu should be shown. The argument contains a list of context props that will help you determine about the state of the editor.

```js
// Only show bubble menu if the selection is not empty
BubbleMenu.configure({
  shouldShow: ({ editor }) => {
    const { selection } = editor.state
    return editor.isEditable && !selection.empty
  }
})
```