"use client";

import { useState } from "react";
import { useDebounce } from "@/lib/useDebounce";
import { useUpdateEffect } from "react-use";
import { ChangeContent } from "@/actions/EditorsAction";
import { CraftEditor } from "@sergeysova/craft";
export default function NoteEditor({
  id,
  body,
  editable = true,
}: {
  id?: string;
  body?: string;
  editable?: boolean;
}) {
  const [html, sethtml] = useState("");
  const [isSaving, setisSaving] = useState(false);
  const DebouncedTitle = useDebounce(html, 1000);

  async function ContentUpdate() {
    if (!id) return;
    setisSaving(true);
    await ChangeContent(DebouncedTitle, id);
    setisSaving(false);
  }
  useUpdateEffect(() => {
    ContentUpdate();
    console.log(html);
  }, [DebouncedTitle]);

  return (
    <div className=" relative ">
      <div className=" absolute right-11 bg-gray-700 px-2 py-1 rounded-lg ">
        {isSaving ? "Saving.." : "Saved"}
      </div>
      <CraftEditor
        value={body ? JSON.parse(body) : ""}
        editorProps={{
          editable: () => {
            return editable;
          },
        }}
        onUpdate={(editor) => {
          if (editable) {
            if (editor) {
              sethtml(JSON.stringify(editor.getJSON()));
            }
          }
        }}
      />
    </div>
  );
}
