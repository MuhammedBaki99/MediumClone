"use client"
import { useFormState } from "react-dom"
import { useEffect, useRef } from "react";
import { commentSave } from "./actions";

export default function CommentsForm({ id }) {
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
    <>
      <form ref={formRef} action={action}>
        <label htmlFor="content">Yazı:
          <input id="content" name="content" type="text" /></label>
        {state?.errors?.content && <small style={{ color: "red" }}>{state.errors.content}</small>}
        <input type="hidden" value={id} name="commentId" />
        <button type="submit">Yayınla</button>
      </form>
    </>
  )
}