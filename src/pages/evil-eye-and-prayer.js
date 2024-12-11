import SecondLayout from "@/layout/secondLayout";
import DescriptionModal from "@/ui/descripton";
import Head from "next/head";

export default function Desc() {
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

        <title>{"The Evil Eye: Symptoms and a Powerful Prayer for Protection"}</title>
        <meta name="The Evil Eye: Symptoms and a Powerful Prayer for Protection" />
        <meta
          name="description"
          content="Discover what the Evil Eye is, its symptoms, and a powerful prayer for protection. Visit Evil Eye Remedy for comprehensive insights and effective solutions to safeguard yourself."
        />
        <meta
          name="Why do we charge a Fee?"
          content="Throughout history the Evil Eye Prayer has been recited by a friend or loved one in order to cure the intended of their negative evil eye symptoms. There are many people throughout the world that do not have access to a special individual that can recite the ‘xematiasma’ prayer. We provide that assistance. The intention of this website is not to make a profit, all services have expenses to them as does this one. The intention of this website is to help cure individuals, pets, and items of evil eye symptoms. Be Kind to Each other and be Kind to the Earth."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.evileyeremedy.com/evil-eye-and-prayer"
          key="canonical"
        />
      </Head>
      <SecondLayout title={"Evil Eye and Prayer"}>
        <DescriptionModal />
      </SecondLayout>
    </>
  );
}
