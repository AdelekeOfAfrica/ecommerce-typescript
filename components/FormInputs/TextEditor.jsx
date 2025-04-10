'use client'

import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import Strike from '@tiptap/extension-strike'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Heading from '@tiptap/extension-heading'

const MenuBar = ({ editor }) => {
  if (!editor) return null

  return (
    <div style={{ marginBottom: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }} className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50  mb-2">
      <button onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()}>
        Bold
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editor.can().chain().focus().toggleItalic().run()}>
        Italic
      </button>
   
      <button onClick={() => editor.chain().focus().toggleStrike().run()}>
        Strike
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        • Bullet List
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
        H1
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
        H2
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
        H3
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>
        Clear
      </button>
    </div>
  )
}

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    
      Strike,
      BulletList,
      ListItem,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: '<p>Start writing...</p>',
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <div style={{ border: '1px solid #ccc', padding: 10, borderRadius: 6, minHeight: 150 }}>
        <EditorContent editor={editor} className="block w-full rounded border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
          placeholder:text-gray-400 focus:ring-green-700 dark:focus:ring-slate-500 focus:ring-inset  sm:text-sm 
          sm:leading-6 dark:bg-transparent dark:text-slate-100"/>
      </div>
    </div>
  )
}

export default Editor

