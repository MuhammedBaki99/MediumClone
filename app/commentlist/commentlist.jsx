
import { createClient } from "@/utils/supabase/server";
import { LikeBtnComments } from "../likebtn/like";
export default async function CommentList({ id }) {

  const supabase = createClient();
  let { data: comments } = await supabase
    .from('comments')
    .select('*')
    .eq("post_id", id) 
  
  return (
    <div className="comments">
      asdasd
      {comments ? comments.map((a, i) => <div key={i} >
        {a.content}
        <LikeBtnComments id={a.id} />
      </div>) : ""}
    </div>

  )
}