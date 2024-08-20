import SecondLayout from "@/layout/secondLayout";
import TermsAndConditions from "@/ui/terms";
import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>{"Terms and Conditions - Evil Eye Remedy"}</title>
        <meta name="Terms and Conditions - Evil Eye Remedy" />
        <meta
          name="description"
          content="Explore the Terms and Conditions of Evil Eye Remedy, detailing the rules, guidelines, and obligations for using our website. Understand your responsibilities and our rights when accessing our content on evil eye protection and remedies."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SecondLayout>
        <TermsAndConditions />
      </SecondLayout>
    </>
  );
}
