import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Clap, Comment, FavoritesBtn } from "./svgfiles/svg";
import Image from "next/image";
import Favorites from "./(favorites)/favorites/page";
import FavoritesForm from "./(favorites)/favoritesform/favori";
import LikeBtnPost from "./likebtn/like";

export default async function Home() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser(); 
  
  let { data: posts } = await supabase
    .from('posts')
    .select('*')

  console.log(posts);

  let { data: comments } = await supabase
    .from('comments')
    .select('*')
  let { data: postLike } = await supabase
    .from('postLike')
    .select('*')
  let { data: favorites } = await supabase
    .from('favorites')
    .select('*')

  const date = new Date(posts.created_at);

  const formattedDate = date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  console.log(formattedDate); // Örnek: 17 Ekim 2024, 15:45

  return (
    <div className="postList">
      {
        posts ? posts.map((x, i) => (
          <Link href={"/posts/" + x.id} key={i}>
            <div key={i} className="postItem">
            <h4> <span>{user?.email[0]}</span> {user?.email}</h4>
              <h1>{x.title}</h1>
              <p>{x.content}</p>
              <div className="postBtns">
                <p className="date"><Image width={24} height={24} src={"/img/sparkling.png"} />{new Date(x.created_at).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric', 
                })}</p>
                <LikeBtnPost  id={x.id} />
                <p className="commentsBtn"><Comment />{comments.length}</p>
                <FavoritesForm id={x.id} />
              </div>
            </div>
          </Link>
        )) : ""
      }
    </div>
  )
}
