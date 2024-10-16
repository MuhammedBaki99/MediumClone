'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation' 
import { createClient } from '@/utils/supabase/server'
 
export async function signup(prevState, formData ) {
  const supabase = createClient()
 
  const data = {
    email: formData.get('email') ,
    password: formData.get('password') ,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signOut() {
  console.log("buraya geldi");
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  console.log(error);

  redirect("/login")
}