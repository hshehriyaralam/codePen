import type { LoginProp } from "@/types/auth";
import { getSupabaseBrowserClient } from "../supabase/browserClient";

export const handleLogin = async ({
  email,
  password,
  reset,
  router
}: LoginProp) => {
  const supabase = getSupabaseBrowserClient();
  try {
    const { data: user, error: loginError } = await  supabase.auth.signInWithPassword({
       email : email,
        password : password,
      })
    if (loginError) {
       console.log("error", loginError.message)
       throw new Error
    }

   
    router.replace('/')
    router.refresh()
    reset();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("catch Error", error?.message);
    }
  }
};