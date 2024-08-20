import SecondLayout from "@/layout/secondLayout";
import PrivacyAndPolicy from "@/ui/privacy";
import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>{"Privacy Policy - Evil Eye Remedy"}</title>
        <meta name="Privacy Policy - Evil Eye Remedy" />
        <meta
          name="description"
          content="Read the Privacy Policy of Evil Eye Remedy to learn how we collect, use, and protect your personal information. Understand our commitment to safeguarding your data while using our resources for evil eye protection and remedies."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SecondLayout>
        <PrivacyAndPolicy />
      </SecondLayout>
    </>
  );
}
