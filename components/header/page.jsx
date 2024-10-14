import { createClient } from "@/utils/supabase/server";

export default async function Header() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  console.log("asdsad" + user);
  return (
    <header>
      

      {
        user ? (
          <p>{user.email}</p>
        ) : ""
      }
    </header>

  )
}