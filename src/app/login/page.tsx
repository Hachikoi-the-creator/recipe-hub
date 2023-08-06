"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import type { Database } from "~/types/database";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: "jon@supabase.com",
      password: "sup3rs3cur3",
      options: {
        emailRedirectTo: `${location.origin}/api/auth`,
      },
    });
    // router.refresh();
    router.push("/")
  };

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email: "vip.hd777@gmail.com",
      password: "lmmjvsd777",
    });
    if (res.data.user) {
      router.push("/");
    } else {
      console.error("something went wrong\n" + res.error?.message);
    }
    // router.refresh(); or router.push("/")
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="h-screen grid place-items-center text-purple-950">
      <button className="p-2 rounded-md bg-purple-200" onClick={handleSignUp}>
        Sign up
      </button>
      <button className="p-2 rounded-md bg-purple-200" onClick={handleSignIn}>
        Sign in
      </button>
      <button className="p-2 rounded-md bg-purple-200" onClick={handleSignOut}>
        Sign out
      </button>
    </div>
  );
}
