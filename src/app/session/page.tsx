import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
import type { Database } from "~/types/database";

export default async function SessionPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return <h2>Thank you for loggin in {session.user.email || "email..."}</h2>;
  }

  return <h2>Hey little one, what if you log in? like pls</h2>;
}
