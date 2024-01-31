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
        <h1>
        </h1>
      </div>
    </PageLayout>
  );
}
