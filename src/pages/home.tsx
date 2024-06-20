import type { NextPage } from "next";
import PageLayout from "~/components/core/pageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout
      pageTitle="Home"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-mono font-extrabold tracking-tight text-green-600 sm:text-[5rem]">
          LAYER ZERO
        </h1>
        <p className="text-lg font-mono font-bold tracking-tight text-green-600 sm:text-[1.5rem]">
          A Next.js starter with Tailwind CSS and TypeScript
        </p>
      </div>
    </PageLayout>
  );

};

export default Home;
