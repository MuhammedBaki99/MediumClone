"use client"
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Clap } from "../svgfiles/svg";

export default function LikeBtnPost({ id }) {
  const supabase = createClient();
  const [likespost, setLikePost] = useState(false);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getPostLike() {
      let { data: postLike, error } = await supabase
        .from('postLike')
        .select('*')
        .eq("post_id", id)
        .eq("user_id", user?.id)

      let { data: postLikes, errors } = await supabase
        .from('postLike')
        .select('*')
        .eq("post_id", id)

      setCount(postLikes?.length);


      console.log(postLike, "aaaaa");

      if (postLike?.length > 0) {
        setLikePost(true);
      }
    }
    getPostLike();
  }, [id, user, likespost]);



  useEffect(() => {
    async function getPostLike() {
      let { data: postLike, error } = await supabase
        .from('postLike')
        .select('*')
        .eq("post_id", id)

      if (postLike?.length > 0) {
        setLikePost(true);
      }
    }
    getPostLike();
  }, [id, user]);

  useEffect(() => {
    async function getUser() {
      let { data: { user }, error } = await supabase.auth.getUser();
      setUser(user);
    }
    getUser();
  }, []);

  async function dislike() {
    const { error } = await supabase
      .from('postLike')
      .delete()
      .eq("user_id", user?.id)
      .eq("post_id", id);


    setLikePost(false);
  }

  async function like() {
    const { data, error } = await supabase
      .from('postLike')
      .insert([
        { user_id: user?.id, post_id: id },
      ])
      .select()
      .eq("user_id", user?.id)
      .eq("post_id", id)
      .single();

    setLikePost(true);
  }


  return (
    <>
      <button onClick={() => likespost ? dislike() : like()} className="likebtn"><Clap  likespost={likespost} /> {count} </button>
    </>
  )
}

export function LikeBtnComments({ id }) {
  const supabase = createClient();
  const [likespost, setLikePost] = useState(false);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getPostLike() {
      let { data: commentsLike, error } = await supabase
        .from('commentsLike')
        .select('*')
        .eq("comment_id", id)
        .eq("user_id", user?.id)

      let { data: commentsLikes, errors } = await supabase
        .from('commentsLike')
        .select('*')
        .eq("comment_id", id)

      setCount(commentsLikes?.length);


      console.log(commentsLike, "aaaaa");

      if (commentsLike?.length > 0) {
        setLikePost(true);
      }
    }
    getPostLike();
  }, [id, user, likespost]);

  useEffect(() => {
    async function getPostLike() {
      let { data: commentsLike, error } = await supabase
        .from('commentsLike')
        .select('*')
        .eq("comment_id", id)

      if (commentsLike?.length > 0) {
        setLikePost(true);
      }
    }
    getPostLike();
  }, [id, user]);

  useEffect(() => {
    async function getUser() {
      let { data: { user }, error } = await supabase.auth.getUser();
      setUser(user);
    }
    getUser();
  }, []);

  async function dislike() {
    const { error } = await supabase
      .from('commentsLike')
      .delete()
      .eq("user_id", user?.id)
      .eq("comment_id", id);
    setLikePost(false);
  }

  async function like() {
    const { data, error } = await supabase
      .from('commentsLike')
      .insert([
        { user_id: user?.id, comment_id: id },
      ])
      .select()
      .eq("user_id", user?.id)
      .eq("comment_id", id)
      .single();
    setLikePost(true);
  }


  return (
    <>
      <button onClick={() => likespost ? dislike() : like()} className="likebtn"><Clap   likespost={likespost} /> {count} </button>
    </>
  )
}