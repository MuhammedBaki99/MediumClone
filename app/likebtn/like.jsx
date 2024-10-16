"use client"
import { useEffect, useState } from "react";
import { likeBtnComments, likeBtnPosts } from "./actions";
import { useFormState } from "react-dom"
import { createClient } from "@/utils/supabase/client";

export default function LikeBtnPost({ id }) {
  const [likespost, setLikePost] = useState(0);

  const [state, action] = useFormState(likeBtnPosts, {
    message: null,
    error: null,
  })

  useEffect(() => {
    async function getPostLike() {
      const supabase = createClient();
      let { data: postLike, error } = await supabase
        .from('postLike')
        .select('*')
        .eq("post_id", id)
      setLikePost(postLike.length)
    }
    getPostLike()

  }, [likespost]);


  return (
    <>
      <form action={action}>
        <input type="hidden" value={id} name="commentId" />
        <button type="submit">Like {likespost}</button>
      </form>
    </>
  )
}

export function LikeBtnComments({ id }) {
  const [likescomment, setLikeComment] = useState(0);
  const [state, action] = useFormState(likeBtnComments, {
    message: null,
    error: null,
  })
  console.log(id);

  useEffect(() => {
    async function getPostLike() {
      const supabase = createClient();

      let { data: commentsLike, error } = await supabase
        .from('commentsLike')
        .select('*')
        .eq("comment_id", id)
      setLikeComment(commentsLike?.length)
    }
    getPostLike();


  }, [likescomment]);

  console.log(likescomment + "asdasd");

  return (
    <>
      <form action={action}>
        <input type="hidden" value={id} name="commentId" />
        <button type="submit">Like {likescomment}</button>
      </form>
    </>
  )
}