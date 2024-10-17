"use client"
import { useEffect, useState } from "react"; 
import { createClient } from "@/utils/supabase/client"; 
import { FavoritesBtn } from "@/app/svgfiles/svg";

export default function FavoritesForm({ id }) {
  const supabase = createClient();
  const [likespost, setLikePost] = useState(false);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getPostLike() {
      let { data: favorites, error } = await supabase
        .from('favorites')
        .select('*')
        .eq("post_id", id)
        .eq("user_id", user?.id)

      let { data: favoritess, errors } = await supabase
        .from('favorites')
        .select('*')
        .eq("post_id", id)

        setCount(favoritess?.length);


      console.log(favorites, "aaaaa");

      if (favorites?.length > 0) {
        setLikePost(true);
      }
    }
    getPostLike();
  }, [id, user,likespost]);



  useEffect(() => {
    async function getPostLike() {
      let { data: favorites, error } = await supabase
        .from('favorites')
        .select('*')
        .eq("post_id", id)

      if (favorites?.length > 0) {
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
      .from('favorites')
      .delete()
      .eq("user_id", user?.id)
      .eq("post_id", id);

      
      setLikePost(false);
  }

  async function like() {
    const { data, error } = await supabase
      .from('favorites')
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
      <button onClick={() => likespost ? dislike() : like()} title={likespost + " likes"} className="likebtn"><FavoritesBtn /> {count} </button>
    </>
  )
}
 