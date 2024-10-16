import { createClient } from "@/utils/supabase/server"; 
import CommentList from "./commentlist/commentlist";
import LikeBtnPost from "./likebtn/like";
import Favorites from "./favorites/favori";
import Link from "next/link";
import CommentsForm from "./commentsform/commentsform";

export default async function Home() {
  const supabase = createClient();
  let { data: posts } = await supabase
    .from('posts')
    .select('*') 
  return (
    <div className="postList">
      {
        posts ? posts.map((x, i) => (
          <div key={i} className="postItem">
            <h1>{x.title}</h1>
            <p>{x.content}</p>
            <LikeBtnPost id={x.id} />
            <Favorites id={x.id} />
            <div className="commentList">
              <CommentList id={x.id} />
              <CommentsForm id={x.id} />
            </div>
            <Link href={"/posts/" + x.id}> Detaya Git</Link>
          </div>
        )) : ""
      }
    </div>
  )
}
