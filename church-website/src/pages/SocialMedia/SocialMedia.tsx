import Hero from "../../components/media/hero";
import FeaturedMessage from "../../components/media/FeaturedMessage";
import Categories from "../../components/media/Categories";
import Videos from "../../components/media/Videos";
import Publications from "../../components/media/Publications";
import Gallery from "../../components/media/Gallery";
import SocialPlatforms from "../../components/media/SocialPlatforms";
import MediaMinistry from "../../components/media/MediaMinistry";
import JoinMedia from "../../components/media/JoinMedia";
import CTA from "../../components/media/CTA";

export default function SocialMedia() {
  return (
    <main className="overflow-hidden bg-[#0B0B0B] text-white">
      <Hero />
      <FeaturedMessage />
      <Categories />
      <Videos />
      <Publications />
      <Gallery />
      <SocialPlatforms />
      <MediaMinistry />
      <JoinMedia />
      <CTA />
    </main>
  );
}
