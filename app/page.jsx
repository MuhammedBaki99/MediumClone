import { createClient } from "@/utils/supabase/server";
import LikeBtnPost from "./likebtn/like";
import Favorites from "./favoritesform/favori";
import Link from "next/link";
import { Comment } from "./svgfiles/svg";

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
  return (
    <div className="postList">
      {
        posts ? posts.map((x, i) => (
          <Link href={"/posts/" + x.id}>
            <div key={i} className="postItem">
              {user?.email}
              <h1>{x.title}</h1>
              <p>{x.content}</p>
              <div className="postBtns">
                <LikeBtnPost id={x.id} />
                <p className="commentsBtn"><Comment />{comments.length}</p>
                <Favorites id={x.id} />
              </div>
            </div></Link>
        )) : ""
      }
    </div>
  )
}
