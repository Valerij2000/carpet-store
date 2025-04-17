import Head from "next/head";
import WelcomeSection from "@/components/Home/WelcomeSection/WelcomeSection";
import FeatureSection from "@/components/Home/FeatureSection/FeatureSection";
import BentoGridSection from "@/components/Home/BentoGridSection/BentoGridSection";
import ProductListSrction from "@/components/Home/ProductListSection/ProductListSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ковры дорожки ковролин</title>
        <meta
          name="description"
          content="Бесплатная доставка ковровых изделий по Донецкой области"
        />
        <meta name="keywords" content="ковры, дорожки, ковролин" />
        <meta property="og:title" content="Ковры Дорожки Ковролин" />
        <meta
          property="og:description"
          content="Бесплатная доставка ковровых изделий по Донецкой области"
        />
        <meta property="og:type" content="website" />
      </Head>
      <WelcomeSection />
      <FeatureSection />
      <BentoGridSection />
      <ProductListSrction />
    </>
  );
}
