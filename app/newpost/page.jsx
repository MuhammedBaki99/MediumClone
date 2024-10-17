"use client"
import { useFormState } from "react-dom"
import { postSave } from "./actions"
import { useEffect, useRef } from "react";
import "./newpost.css"

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
    <div className="newpostCont">
      <form ref={formRef} action={action}>
        <input id="title" name="title" type="text" placeholder="Başlık Yazınız..."/>
        {state?.errors?.title && <small style={{ color: "red" }}>{state.errors.title}</small>}
        <input id="content" name="content" type="text" placeholder="Hikayenizi Anlatın..."/>
        {state?.errors?.content && <small style={{ color: "red" }}>{state.errors.content}</small>}
        <button type="submit">Yayınla</button>
      </form>
    </div>
  )
}