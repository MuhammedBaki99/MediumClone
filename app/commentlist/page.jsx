import { createClient } from "@/utils/supabase/server";

export default async function CommentList({ id }) {
  const supabase = createClient();
  let { data: comments } = await supabase
    .from('comments')
    .select('*')
    .eq("post_id", id)
  console.log(id);

  return (
    <div className="comments">
      {comments ? comments.map((a, i) => <div key={i} >
        {a.content}
      </div>) : ""}
    </div>

  )
}