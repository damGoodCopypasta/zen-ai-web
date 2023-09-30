"use client";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const RichEditor = ({ editor }: { editor: Editor }) => {
  // get editor content

  return <EditorContent editor={editor} />;
};
