import SecondLayout from "@/layout/secondLayout";
import PrivacyAndPolicy from "@/ui/privacy";
import Head from "next/head";

export default function Privacy() {
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

        <title>{"Privacy Policy - Evil Eye Remedy"}</title>
        <meta name="Privacy Policy - Evil Eye Remedy" />
        <meta
          name="description"
          content="Read the Privacy Policy of Evil Eye Remedy to learn how we collect, use, and protect your personal information. Understand our commitment to safeguarding your data while using our resources for evil eye protection and remedies."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://evileyeremedy.com/privacy-policy"
          key="canonical"
        />
      </Head>
      <SecondLayout>
        <PrivacyAndPolicy />
      </SecondLayout>
    </>
  );
}
