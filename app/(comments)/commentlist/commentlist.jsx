"use client"
import { LikeBtnComments } from "@/app/likebtn/like"; 
import "./commentlist.css"


export default function CommentList({ commentsid,user }) {
  console.log(commentsid + " 12312312312312312312asdasdsad");
  
  return (
    <div className="comments"> 
      {commentsid ? commentsid.map((a, i) => <div key={i} className="commentsItem">
        {a.content}
        <LikeBtnComments id={a.id} />
      </div>) : ""}
    </div>

  )
}