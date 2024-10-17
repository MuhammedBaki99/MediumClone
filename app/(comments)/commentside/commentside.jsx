"use client"

import { Cancel, Comment } from "@/app/svgfiles/svg";
import CommentList from "../commentlist/commentlist";
import CommentsForm from "../commentsform/commentsform";
import { useState } from "react";
import "./commentside.css"

export default function CommentSide({ id, commentslength, commentsid, user }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open)
  }

  return (
    <>
      <p className="commentsBtn" onClick={handleClick}><Comment />{commentslength}</p>
      <div className="commentside" style={{
        transition: "all 1s",
        width: `${open ? "20%" : "0%"}`,
        padding: `${open ? "20px" : "0"}`,
      }}>
        <div className="sidebarHead">
          <h2>Yanıtlar ({commentslength})</h2>
          <button onClick={() => setOpen(false)}><Cancel /></button>
        </div>
        <CommentsForm id={id} open={open} />
        <CommentList id={id} commentsid={commentsid} user={user} />
      </div>
    </>
  )
}