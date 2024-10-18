import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  console.log({ supabase });
  const { error } = await supabase
    .from("countires")
    .insert({ id: 1, name: "Denmark" });

  const { email, username } = req.body;

  try {
    await handleFormInputAsync({ name, message });
    res.redirect(307, "/");
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch data", err });
  }
}
