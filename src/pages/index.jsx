import WelcomeSection from "@/components/Home/WelcomeSection/WelcomeSection";
import FeatureSection from "@/components/Home/FeatureSection/FeatureSection";

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
    </>
  );
}
