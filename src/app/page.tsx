import { BackgroundBeamsWithCollisionDemo } from "./BackgroundBeamsWithCollision";
import { AppleCardsCarouselDemo } from "./CardsCarousel";
import { GlowingEffectDemo } from "./GlowingEffect";
import { HeroHighlightDemo } from "./HeroHighlight";
import { FloatingNavDemo } from "./NavBar2";
import { SparklesPreview } from "./SparklesPreview";
import { TracingBeamDemo } from "./TracingBeam";
import { WorldMapDemo } from "./WorldMap";

export default function Home() {
  return (
    <>

      <FloatingNavDemo></FloatingNavDemo>
      <SparklesPreview></SparklesPreview>
      <HeroHighlightDemo></HeroHighlightDemo>
      <TracingBeamDemo></TracingBeamDemo>
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
      <WorldMapDemo></WorldMapDemo>
      <GlowingEffectDemo></GlowingEffectDemo>
      <BackgroundBeamsWithCollisionDemo></BackgroundBeamsWithCollisionDemo>

    </>
  );
}
