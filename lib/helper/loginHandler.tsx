import type { LoginProp } from "@/types/auth";
import { getSupabaseBrowserClient } from "../supabase/browserClient";

export const handleLogin = async ({
  email,
  password,
  reset,
  router,
  toast,

}: LoginProp) => {
  const supabase = getSupabaseBrowserClient();
  try {
    const { data: user, error: loginError } = await  supabase.auth.signInWithPassword({
       email : email,
        password : password,
      })

      if(loginError?.message === "Invalid login credentials"){
        toast.error("Email Or Password wasn't correct!", {position  : "top-center"})
        return
      }

    if (loginError) {
       console.log("error", loginError.message)
       throw new Error
    }
    

    toast.success("Successfully Login", {position  : "top-center"})
    router.replace('/')
    router.refresh()
    reset();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("catch Error", error?.message);
    }
  }
};