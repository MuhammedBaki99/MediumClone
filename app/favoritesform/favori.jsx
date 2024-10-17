"use client"
import { useEffect, useState } from "react";
import { favoritesBtn } from "./actions";
import { useFormState } from "react-dom"
import { createClient } from "@/utils/supabase/client";
import { FavoritesBtn } from "../svgfiles/svg";

export default function Favorites({ id }) {
  const [favori, setFavori] = useState(0);

  const [state, action] = useFormState(favoritesBtn, {
    message: null,
    error: null,
  })

  useEffect(() => {
    async function getPostLike() {
      const supabase = createClient();
      let { data: favorites, error } = await supabase
        .from('favorites')
        .select('*')
        .eq("post_id", id)
        setFavori(favorites.length)
    }
    getPostLike()
 
  }, [favori]);


  return (
    <>
      <form action={action}>
        <input type="hidden" value={id} name="commentId" />
        <button type="submit" className="favoriBtn"><FavoritesBtn /> {favori}</button>
      </form>
    </>
  )
}
 