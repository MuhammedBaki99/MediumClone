"use client"

import "./commentsform.css"
import { useFormState } from "react-dom"
import { useEffect, useRef } from "react";
import { commentSave } from "./actions";

export default function CommentsForm({ id, open }) {
  const [state, action] = useFormState(commentSave, {
    message: null,
    error: null,
  })
  const formRef = useRef(null);
  useEffect(() => {
    if (state?.message) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <div className="commentsform">
      <form ref={formRef} action={action} style={{
        display: open ? "flex" : "none"
      }}>
        <input id="content" name="content" type="text" placeholder="Yorum Yazınız..." />
        {state?.errors?.content && <small style={{ color: "red" }}>{state.errors.content}</small>}
        <input type="hidden" value={id} name="commentId" />
        <button type="submit">Yayınla</button>
      </form>
    </div>
  )
}