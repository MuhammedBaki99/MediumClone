import CommentList from "@/app/commentlist/commentlist";
import CommentsForm from "@/app/commentsform/commentsform";

export default function PostDetail() {
  return (
    <>

      <h1>Post</h1>
      <CommentsForm />
      <CommentList  />
    </>
  )
}