"use client"
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClient";


export const SignOut = async ({setLoading,router}:any) => {
    try {
      setLoading(true);
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.log("signOut", error);
        setLoading(false);
        return;
      }
      router.replace("/auth");
      // router.refresh();
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };