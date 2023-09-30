// POST request that accepts an array of strings
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // get messages from body
  if (!request.body) return Response.json({ error: "No body" });
  const { messages } = await request.json();

  const res = await fetch("http://127.0.0.1:8000/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({
      messages,
      isGPT4: true,
    }),
  });

  const data = await res.json();

  return Response.json({ data });
}
