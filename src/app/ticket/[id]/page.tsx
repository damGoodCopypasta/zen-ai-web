import { Conversation } from "@/components/conversation";
import { Suspense } from "react";
import Link from "next/link";

export default function Ticket({
  params,
}: {
  params: { id: string; summary: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center  md:p-24 pt-12">
      <div className="w-full flex justify-start absolute top-0 left-0">
        <Link href="/">
          <button className="btn  m-4 mb-0">GO_BACK</button>
        </Link>
      </div>
      <div className="w-screen md:w-full mb-24">
        <h1 className="font-title text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] xl:text-left">
          \\ ZEN_<span className="text-accent">AI</span> \\
        </h1>
      </div>
      <h2 className="  my-4   text-left text-lg font-black leading-[1.1] xl:text-left">
        CONVERSATION_HISTORY_<span className="text-accent">{params.id}</span>
      </h2>
      <Suspense
        fallback={
          <span className="loading loading-bars loading-lg mt-12"></span>
        }
      >
        <Conversation ticket={params.id} />
      </Suspense>
    </main>
  );
}
