"use server"

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function likeBtnPosts(prevState, formData) {
  console.log("test");
  console.log("test");

  const formObj = Object.fromEntries(formData);
  const commentId = Number(formObj.commentId);

  console.log(commentId);

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from('postLike')
    .insert([
      { user_id: user.id, post_id: commentId },
    ])
    .select()
    .single();

    console.log(user);
    
  if (data) {
    console.log(data + " error asdasdasd " + commentId);
  } else {
    console.log("çalışmadı");

  }

  revalidatePath("/", "layout");
  redirect("/")
}


export async function likeBtnComments(prevState, formData) {
  console.log("test");
  console.log("test");


  const formObj = Object.fromEntries(formData);
  const commentId = Number(formObj.commentId);

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();


  if (!user) {
    redirect("/login");
  }

  console.log(typeof commentId);



  const { data, error } = await supabase
    .from('commentsLike')
    .insert([
      { user_id: user.id, comment_id: commentId },
    ])
    .select()
    .single();

  revalidatePath("/", "layout");
  redirect("/")
}