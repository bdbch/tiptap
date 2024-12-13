# Document

The `Document` node is the root node of the ProseMirror document.

> [!DANGER]
> The `Document` node is required and should not be disabled. Without a root level node, ProseMirror will not work probably.

## Usage

```js
import { Editor } from '@tiptap/core'
import { Document } from '@tiptap/extension-document'

const editor = new Editor({
  element: document.querySelector('#editor'),
  extensions: [
    Document,
  ],
})
```

## Customizing the document schema

You can extend the `Document` extension to control the schema of the document node. By default, the `Document` node will allow any block level content to be added.

If you want to restrict the content a little bit more, you can extend the `Document` extension and customize the `content` property.

```js
const MyDocument = Document.extend({
   // always require a heading node as the first child
  content: 'heading block+',
})
```

If you are using the [StarterKit](/extensions/starter-kit) extension, you will need to disable the document extension that comes with it.

```js
const editor = new Editor({
  extensions: [
    StarterKit.configure({ document: false }),
    MyDocument,
  ]
})