// POST request that accepts an array of strings
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // get messages from body
  if (!request.body) return Response.json({ error: "No body" });
  const payload = await request.json();

  const res = await fetch(`http://${process.env.DOMAIN}:8000/reply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return Response.json({ data });
}
