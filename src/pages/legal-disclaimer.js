import SecondLayout from "@/layout/secondLayout";
import LegalDisclaimer from "@/ui/legalDisclaimer";
import Head from "next/head";

export default function Disclaimer() {
  return (
    <>
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KZ9PG1ENGY"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-KZ9PG1ENGY');
        </script>

        <title>{"Legal Disclaimer - Evil Eye Remedy"}</title>
        <meta name="Legal Disclaimer - Evil Eye Remedy"></meta>
        <meta
          name="description"
          content="Review the legal disclaimer for Evil Eye Remedy, outlining terms, liability, and usage conditions of our site. Understand your rights and responsibilities when using our resources on protection against the evil eye."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://evileyeremedy.com/legal-disclaimer"
          key="canonical"
        />
      </Head>
      <SecondLayout>
        <LegalDisclaimer />
      </SecondLayout>
    </>
  );
}
