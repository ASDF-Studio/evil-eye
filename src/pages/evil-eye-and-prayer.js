import SecondLayout from "@/layout/secondLayout";
import DescriptionModal from "@/ui/descripton";
import Head from "next/head";

export default function Desc() {
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

        <title>{"Evil Eye and Prayer - Evil Eye Remedy"}</title>
        <meta name="Evil Eye and Prayer - Evil Eye Remedy" />
        <meta
          name="description"
          content="Discover what the Evil Eye is, its symptoms, and a powerful prayer for protection. Visit Evil Eye Remedy for comprehensive insights and effective solutions to safeguard yourself."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://evileyeremedy.com/evil-eye-and-prayer"
          key="canonical"
        />
      </Head>
      <SecondLayout title={"Evil Eye and Prayer"}>
        <DescriptionModal />
      </SecondLayout>
    </>
  );
}
