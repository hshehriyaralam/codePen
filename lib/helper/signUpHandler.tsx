import type { SignUpProp } from "@/types/auth";
import { getSupabaseBrowserClient } from "../supabase/browserClient";


export const handleSignUp = async ({
  name,
  email,
  password,
  reset,
  navigateForm,
  toast
}: SignUpProp) => {
  const supabase = getSupabaseBrowserClient();
  try {
    if (password.length < 6) {
    return { error: 'Password must be at least 6 characters long' }
    }

    const { data: user, error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
        },
      },
    });
    if (signUpError) {
      console.log(signUpError.message)
    toast.error(signUpError.message, {position : 'top-center'})
      return
    }


    const userId = user?.user?.id;
    if (!userId) return;
    await supabase.from("profiles").insert([
      {
        id: userId,
        email: user.user?.email,
        name: user.user?.user_metadata?.name,
      },
    ] as any);
    toast.success("Successfully SingUp", {position : 'top-center'})
    navigateForm();
    reset();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("catch Error", error.message);
    }
  }
};
