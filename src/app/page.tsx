import { Table } from "@/components/table";
import { CustomMessage } from "@/components/customMessage";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  md:p-24 pt-12">
      <div className="w-screen md:w-full mb-24">
        <h1 className="font-title text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] xl:text-left">
          \\ ZEN_<span className="text-accent">AI</span> \\
        </h1>
      </div>
      <Suspense
        fallback={
          <span className="loading loading-bars loading-lg mt-12"></span>
        }
      >
        <CustomMessage />
        <Table />
      </Suspense>
    </main>
  );
}
