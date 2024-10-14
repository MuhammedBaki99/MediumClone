import { createClient } from "@/utils/supabase/server";
import Comments from "./commentsform/page";
import CommentList from "./commentlist/page";

export default async function Home() {
  const supabase = createClient();
  let { data: posts } = await supabase
    .from('posts')
    .select('*')
  console.log(posts);

  return (
    <div className="postList">
      {
        posts ? posts.map((x, i) => (
          <div key={i} className="postItem">
            <h1>{x.title}</h1>
            <p>{x.content}</p>
            <div className="commentList">
              <CommentList  id={x.id} />
              <Comments id={x.id} />
            </div>
          </div>
        )) : ""
      }
    </div>
  )
}
