import SecondLayout from "@/layout/secondLayout";
import DescriptionModal from "@/ui/descripton";
import Head from "next/head";

export default function Desc() {
  return (
    <>
      <Head>
        <title>{"Evil Eye and Prayer - Evil Eye Remedy"}</title>
        <meta name="Evil Eye and Prayer - Evil Eye Remedy" />
        <meta
          name="description"
          content="Discover what the Evil Eye is, its symptoms, and a powerful prayer for protection. Visit Evil Eye Remedy for comprehensive insights and effective solutions to safeguard yourself."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SecondLayout title={"Evil Eye and Prayer"}>
        <DescriptionModal />
      </SecondLayout>
    </>
  );
}
