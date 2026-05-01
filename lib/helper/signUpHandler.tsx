import type { SignUpProp } from "@/types/auth";
import { getSupabaseBrowserClient } from "../supabase/browserClient";

export const handleSignUp = async ({
  name,
  email,
  password,
  reset,
  navigateForm,
}: SignUpProp) => {
  const supabase = getSupabaseBrowserClient();
  try {
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
      throw new Error();
      return;
    }
    navigateForm();
    reset();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("catch Error", error);
    }
  }
};
