# StarterKit

The StarterKit extension provides most common nodes and marks to get you started quickly.

## Usage

```js
import { Editor } from '@tiptap/core'
import { StarterKit } from '@tiptap/starter-kit'

const editor = newEditor({
  element: document.querySelector('#editor'),
  extensions: [
    StarterKit,
  ],
})
```

## Options

The StarterKit extension allows you to control what kind of extension should not be initialized by passing an object with the extensions name and a `false` value.

```js
StarterKit.configure({
  bulletList: false, // disable bullet lists
})
```

## Registered extensions

### Node extensions

- [Blockquote](/extensions/nodes/blockquote) - A blockquote node
- [BulletList](/extensions/nodes/bullet-list) - A bullet list node
- [Document](/extensions/nodes/document) - The root node of the document (required)
- [Paragraph](/extensions/nodes/paragraph) - A simple paragraph node (required)
- [Text](/extensions/nodes/text) - A text node (required)

### Mark extensions

- [Bold](/extensions/marks/bold) - Bold text
- [Code](/extensions/marks/code) - Inline code
- [Italic](/extensions/marks/italic) - Italic text
- [Link](/extensions/marks/link) - A link with a title and target
- [Strike](/extensions/marks/strike) - Strikethrough text
- [Underline](/extensions/marks/underline) - Underlined text

### Functionality extensions

- [BubbleMenu](/extensions/functionalities/bubble-menu) - A bubble menu implementation