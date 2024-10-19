import { createClient } from "@supabase/supabase-js";

export async function POST() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  console.log(supabase);
  return Response.json({ supabase });
}

// export async function GET() {
//   const res = await fetch("https://data.mongodb-api.com/...", {
//     headers: {
//       "Content-Type": "application/json",
//       "API-Key": process.env.DATA_API_KEY,
//     },
//   });
//   const data = await res.json();

//   return Response.json({ data });
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );
// if (req.method === "POST") {
//   console.log("hello");
// } else {
// Handle any other HTTP method
// }

// console.log({ supabase });
// const { error } = await supabase
//   .from("countires")
//   .insert({ id: 1, name: "Denmark" });

// const { email, username } = req.body;

// try {
//   await handleFormInputAsync({ name, message });
//   res.redirect(307, "/");
// } catch (err) {
//   res.status(500).send({ error: "Failed to fetch data", err });
// }
// }
