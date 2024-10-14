import { createClient } from "@/utils/supabase/server";

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
          </div>
        )) : ""
      }
    </div>
  )
}
