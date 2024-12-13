# Text

The `Text` node is the default node used by ProseMirror for representing text.

> [!DANGER]
> The `Text` node is required and should not be disabled. Without a text node, ProseMirror will not work probably.

## Usage

```js
import { Editor } from '@tiptap/core'
import { Text } from '@tiptap/extension-text'

const editor = new Editor({
  element: document.querySelector('#editor'),
  extensions: [
    Text,
  ],
})
```