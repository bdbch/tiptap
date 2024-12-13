

# Create the editor

Now that you have installed all necessary packages and the starter kit, you can create your first editor.

::: code-group

```js [Javascript]
import { Editor } from '@tiptap/core'
import { StarterKit } from '@tiptap/starter-kit'

// make sure you have a element that can be 
// used as a container for our editor
const el = document.querySelector('#editor')

const editor = new Editor({
  element: el,
  extensions: [
    StarterKit,
  ]
})
```

```jsx [React]
import { useEditor, EditorContent } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'

function App() {
  const editor = useEditor({
    extensions: [StarterKit]
  })

  return <EditorContent editor={editor} />
}
```

```vue [Vue]
<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import { StarterKit } from '@tiptap/starter-kit'

const editor = useEditor({
  extensions: [StarterKit]
})
</script>

<template>
  <EditorContent :editor="editor" />
</template>
```

```vue [Vue 2]
<script>
import { useEditor, EditorContent } from '@tiptap/vue-2'
import { StarterKit } from '@tiptap/starter-kit'

export default {
  setup() {
    const editor = useEditor({
      extensions: [StarterKit]
    })

    return { editor }
  },
}
</script>

<template>
  <editor-content :editor="editor" />
</template>
```

:::