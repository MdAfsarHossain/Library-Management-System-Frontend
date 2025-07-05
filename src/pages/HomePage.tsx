import { AboutUs } from "@/components/module/AboutUs";
import { Banner } from "@/components/module/Banner";
import { Books } from "@/components/module/Books";
import { FaqQuestion } from "@/components/module/FaqQuestion";
import { Features } from "@/components/module/Features";
import { NewsLetter } from "@/components/module/NewsLetter";
import { Stats } from "@/components/module/Stats";
import { UsersSay } from "@/components/module/UsersSay";

export const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <AboutUs />
      <Books />
      <Features />
      <Stats />
      <UsersSay />
      <NewsLetter />
      <FaqQuestion />
    </div>
  );
};
