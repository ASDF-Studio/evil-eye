import SecondLayout from "@/layout/secondLayout";
import LegalDisclaimer from "@/ui/legalDisclaimer";
import Head from "next/head";

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>{"Legal Disclaimer - Evil Eye Remedy"}</title>
        <meta name="Legal Disclaimer - Evil Eye Remedy"></meta>
        <meta
          name="description"
          content="Review the legal disclaimer for Evil Eye Remedy, outlining terms, liability, and usage conditions of our site. Understand your rights and responsibilities when using our resources on protection against the evil eye."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SecondLayout>
        <LegalDisclaimer />
      </SecondLayout>
    </>
  );
}
