import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const res = await request.json();

  const { data, error } = await supabase
    .from("sign-up")
    .insert({ username: res.username, email: res.email })
    .select();
  console.log("Data Supabase: ", error, data);
  return Response.json(data);
}
