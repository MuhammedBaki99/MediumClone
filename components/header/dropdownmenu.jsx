"use client"

import Link from "next/link";
import "./header.css"
import { useState } from "react"
import { Favorites, Profile } from "@/app/svgfiles/svg";
import { signOut } from "@/app/signup/actions";
export default function Dropdown({ user }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <>
      <p className="userPP" onClick={handleClick}>{user.email[0]}</p>
      <div className="dropdown" style={{
        display: `${open ? "grid" : "none"}`
      }}>
        <Link href={"/profile"}> <Profile /> Profil</Link>
        <Link href={"/favorites"}> <Favorites /> Favoriler</Link>
        <div className="signup">
          <p>{user.email[0]}{user.email[1]}••••••@gmail.com</p>
          <form >
            <button formAction={signOut} >Çıkış Yap</button>
          </form>
        </div>
      </div>
    </>
  )
}