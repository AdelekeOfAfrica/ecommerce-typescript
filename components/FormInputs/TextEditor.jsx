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
    <div className="flex flex-wrap gap-2 mb-2">
      <button
        className="px-3 py-1 rounded block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-1"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        Bold
      </button>
      <button
        className="px-3 py-1 rounded block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-1"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        Italic
      </button>
      <button
        className="px-3 py-1 rounded block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-1"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        Strike
      </button>
      <button
        className="px-3 py-1 rounded block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-1"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        • Bullet List
      </button>
      <button
        className="px-3 py-1 rounded block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        H1
      </button>
      <button
        className="px-3 py-1 rounded block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </button>
      <button
        className="px-3 py-1 rounded block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        H3
      </button>
      <button
        className="px-3 py-1 rounded block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-1"
        onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
      >
        Clear
      </button>
    </div>
  )
}

const Editor = ({ label, name,setValue }) => {
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
    content: '',
    onUpdate({ editor }) {
      setValue(name, editor.getHTML()) 
    },
  })

  return (
    <div className="w-full">
      <label
        htmlFor="content"
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-1"
      >
        {label}
      </label>

      <div className="border border-gray-300 dark:border-slate-600 rounded-lg p-4 bg-white dark:bg-slate-800 space-y-2">
        <MenuBar editor={editor} className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-1" />
        <EditorContent
          editor={editor}
          className="min-h-[150px] w-full outline-none text-gray-900 dark:text-slate-100"
        />
      </div>
    </div>
  )
}

export default Editor
