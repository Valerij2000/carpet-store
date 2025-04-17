import WelcomeSection from "@/components/Home/WelcomeSection/WelcomeSection";
import FeatureSection from "@/components/Home/FeatureSection/FeatureSection";
import BentoGridSection from "@/components/Home/BentoGridSection/BentoGridSection";
import Feeds from "@/components/Feeds/Feeds";

export const metadata = {
  title: "Ковры дорожки ковролин",
  description: "Бесплатная доставка ковровых изделий по Донецкой области",
  keywords: ["ковры", "дорожки", "ковролин"],
  openGraph: {
    title: "Ковры Дорожки Ковролин",
    description: "Бесплатная доставка ковровых изделий по Донецкой области",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <WelcomeSection />
      <FeatureSection />
      <BentoGridSection />
      <Feeds />
    </>
  );
}
