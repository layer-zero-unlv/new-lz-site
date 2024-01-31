import type { NextPage } from "next";
import PageLayout from "~/components/core/pageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout
      pageTitle="Home"
    >
      <h1 className="text-5xl font-mono font-extrabold tracking-tight text-green-600 sm:text-[5rem]">
      LAYER ZERO
      </h1>
    </PageLayout>
  );
};

export default Home;
