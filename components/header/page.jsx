import Write, { Notification } from "@/app/svgfiles/svg";
import { createClient } from "@/utils/supabase/server";
import "./header.css"
import Link from "next/link";
import Dropdown from "./dropdownmenu";

export default async function Header() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  console.log("asdsad" + user);
  return (
    <header>
      <div className="headerHead">
        <Link href={"/"}>  <h1>Medium</h1></Link>
      </div>

      {
        user ? <div className="login">
          <Link href={"/newpost"} className="write">
            <Write />
            <p>Yaz</p>
          </Link>
          <Notification />
          <Dropdown user={user} />
        </div> : ""
      }
    </header>

  )
}