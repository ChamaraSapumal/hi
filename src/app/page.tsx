import { PlaceholdersAndVanishInputDemo } from "./Ask";
import { BackgroundBeamsWithCollisionDemo } from "./BackgroundBeamsWithCollision";
import { ThreeDCardDemo } from "./Card3D";
import { AppleCardsCarouselDemo } from "./CardsCarousel";
import { GlowingEffectDemo } from "./GlowingEffect";
import { HeroHighlightDemo } from "./HeroHighlight";
import { LampDemo } from "./Lamp";
import { NavbarDemo } from "./Navbar";
import { FloatingNavDemo } from "./NavBar2";
import { SparklesPreview } from "./SparklesPreview";
import { TracingBeamDemo } from "./TracingBeam";
import { WorldMapDemo } from "./WorldMap";

export default function Home() {
  return (
    <>

      <NavbarDemo></NavbarDemo>
      <SparklesPreview></SparklesPreview>
      <HeroHighlightDemo></HeroHighlightDemo>
      <TracingBeamDemo></TracingBeamDemo>
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
      <ThreeDCardDemo></ThreeDCardDemo>
      <LampDemo></LampDemo>
      <WorldMapDemo></WorldMapDemo>
      <GlowingEffectDemo></GlowingEffectDemo>
      <PlaceholdersAndVanishInputDemo></PlaceholdersAndVanishInputDemo>
      <BackgroundBeamsWithCollisionDemo></BackgroundBeamsWithCollisionDemo>

    </>
  );
}
