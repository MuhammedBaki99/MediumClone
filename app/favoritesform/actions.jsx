 "use server"

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function favoritesBtn(prevState, formData) {
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



  let { data: favorites, error: user_error } = await supabase
    .from('favorites')
    .select('user_id')
    .eq("user_id", user.id)

  if (favorites.length >= 0) {

    const { data, error } = await supabase
      .from('favorites')
      .insert([
        { user_id: user.id, post_id: commentId },
      ])
      .select()
      .single();


  } else {

    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq("user_id", user.id)

  }
 
  revalidatePath("/", "layout");
  redirect("/")
}