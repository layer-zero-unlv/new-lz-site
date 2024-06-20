import Head from "next/head";
import Link from "next/link";
import PageLayout from "~/components/core/pageLayout";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <PageLayout
      pageTitle="Home"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-mono font-extrabold tracking-tight text-green-600 sm:text-[5rem]">
          LAYER ZERO
        </h1>
        <p className="text-lg font-mono font-bold tracking-tight text-green-600 sm:text-[1.5rem]">
        </p>
      </div>
    </PageLayout>
  );
}
