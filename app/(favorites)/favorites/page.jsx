import { Clap, Comment, FavoritesBtn } from "@/app/svgfiles/svg";
import "./favorites.css"
import { createClient } from "@/utils/supabase/server"  
import Image from "next/image";

export default async function Favorites() {
  const supabase = createClient();
  const { data: { user }, erroruser } = await supabase.auth.getUser();
  const { data: favorites, error } = await supabase
    .from('favorites')
    .select('*, posts(*)')
    .eq("user_id", user?.id)

  console.log(favorites);

  let { data: comments } = await supabase
    .from('comments')
    .select('*')
  let { data: postLike } = await supabase
    .from('postLike')
    .select('*') 

  return ( 
  <div className="favoriList">
    <h1>Favorilerim</h1>
    {
      favorites ? favorites.map((x, i) => (
        <div key={i} className="favoriItem">
            <h4> <span>{user?.email[0]}</span> {user?.email}</h4>
          <h1>{x.posts.title}</h1>
          <p>{x.posts.content}</p>
          <div className="postBtns">
                <p className="date"><Image width={24} height={24} src={"/img/sparkling.png"} />{new Date(x.created_at).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric', 
                })}</p>
            <p><Clap />{postLike?.length}</p>
            <p className="commentsBtn"><Comment />{comments.length}</p>
            <p><FavoritesBtn />{favorites?.length}</p> 
          </div>
        </div>
      )) : ""
    }
  </div>
  )
}
