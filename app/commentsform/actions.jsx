"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export async function commentSave(prevState, formData) { 

  const formObj = Object.fromEntries(formData);
  const content = formData.get("content");
  const commentId = Number(formObj.commentId);
 
  const errors = {
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


  if (!user) {
    redirect("/loginsignup");
  }
  const { data, error } = await supabase
    .from('comments')
    .insert([
      { content, user_id: user.id, post_id: commentId },
    ])
    .select()
    .single();
    
  if (error) {
    console.log(error + "asd");
  }
  redirect("/")
}