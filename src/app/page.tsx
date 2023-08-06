import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function page() {
  const supabase = createServerComponentClient({ cookies });

  return (
    <div>
      <h1>AAAAAAAAAAAAAAAAa</h1>
      <ul className="flex gap-4 text-purple-950">
        <li className="p-2 bg-red-200 rounded-sm">
          <Link href="/home">Home</Link>
        </li>
        <li className="p-2 bg-red-200 rounded-sm">
          <Link href="/login">Login</Link>
        </li>
        <li className="p-2 bg-red-200 rounded-sm">
          <Link href="/session">Session</Link>
        </li>
      </ul>
    </div>
  );
}
