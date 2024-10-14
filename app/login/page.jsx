import { createClient } from '@/utils/supabase/server'
import { login, signup } from './actions'

export default async function LoginPage() {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  console.log("asdsad" + user);
  
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
    </form>
  )
}