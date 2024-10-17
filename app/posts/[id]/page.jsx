import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import LikeBtnPost from "@/app/likebtn/like";
import Favorites from "@/app/favoritesform/favori";
import { Comment } from "@/app/svgfiles/svg";
import "./postdetail.css"
export default async function PostDetail({ params }) {
  const id = Number(params.id);
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  let { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq("id", id)

  console.log(posts + "asdasd");



  let { data: comments } = await supabase
    .from('comments')
    .select('*')
  return (
    <div className="postList">
      {
        posts ? posts.map((x, i) => (
          <Link href={"/posts/" + x.id}  key={i}>
            <div className="postItem">
              <h4> <span>{user?.email[0]}</span> {user?.email}</h4>
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
