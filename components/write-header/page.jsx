import Write, { Notification } from "@/app/svgfiles/svg";
import { createClient } from "@/utils/supabase/server";
import "./writeheader.css"
import Link from "next/link";
import Dropdown from "../header/dropdownmenu";

export default async function WriteHeader() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  console.log("asdsad" + user);
  return (
    <header style={{ justifyContent: `${user ? "space-around" : "center"}` }}>
      <div className="writeheaderHead" >
        <Link href={"/"}>  <h1>Medium</h1></Link>
        {user ? <p>Taslak {user.email}</p>:""}
      </div>

      {
        user ? <div className="userpp">
          <Link href={"/newpost"} className="write">
            <button className="publish">Yayınla</button>
          </Link>
          <Notification />
          <Dropdown user={user} />
        </div> : ""
      }
    </header>

  )
}