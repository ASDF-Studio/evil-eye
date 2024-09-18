import SecondLayout from "@/layout/secondLayout";
import TermsAndConditions from "@/ui/terms";
import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
      {/* Google Tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KZ9PG1ENGY"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZ9PG1ENGY');
          `,
        }}
      />

        <title>{"Terms and Conditions - Evil Eye Remedy"}</title>
        <meta name="Terms and Conditions - Evil Eye Remedy" />
        <meta
          name="description"
          content="Explore the Terms and Conditions of Evil Eye Remedy, detailing the rules, guidelines, and obligations for using our website. Understand your responsibilities and our rights when accessing our content on evil eye protection and remedies."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.evileyeremedy.com/terms-and-conditions"
          key="canonical"
        />
      </Head>
      <SecondLayout>
        <TermsAndConditions />
      </SecondLayout>
    </>
  );
}
