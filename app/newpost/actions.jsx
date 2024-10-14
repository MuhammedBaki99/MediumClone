"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export async function postSave(prevState, formData) {
  console.log("test");
  console.log("test");

  const title = formData.get("title");
  const content = formData.get("content");

  const formObj = Object.fromEntries(formData);
  console.log(formObj);

  const errors = {
    title: !formObj.title && "Başlık alanı boş olamaz",
    content: !formObj.content && "Yazı alanı boş olamaz",
  };
  for (const key in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, key)) {
      const element = errors[key];
      if (element) return { errors };
    }
  }
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  console.log(user);

  if (!user) {
    redirect("/login");
  }
  const { data, error } = await supabase
    .from('posts')
    .insert([
      { title, content, user_id: user.id },
    ])
    .select()
    .single();

  if (error) {
    console.log(error);
  }

  redirect("/");
}