"use client"
import { useFormState } from "react-dom"
import { postSave } from "./actions"
import { useEffect, useRef } from "react";

export default function NewPost() {
  const [state, action] = useFormState(postSave, {
    message: null,
    error: null,
  })
  const formRef = useRef(null);
  useEffect(() => {
    if (state?.message) {
      formRef.current.reset();
      console.log(state.message);

    }
  }, [state]);

  return (
    <form ref={formRef} action={action}>
      <label htmlFor="title">Başlık:
        <input id="title" name="title" type="text" /></label>
      {state?.errors?.title && <small style={{color: "red"}}>{state.errors.title}</small>}
      <label htmlFor="content">Yazı:
        <input id="content" name="content" type="text" /></label>
        {state?.errors?.content && <small style={{color: "red"}}>{state.errors.content}</small>}
      <button type="submit">Yayınla</button>
    </form>
  )
}