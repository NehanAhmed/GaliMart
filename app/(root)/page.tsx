
import DealsAndTrending from "@/components/Deals-Trending";
import FeaturedSection from "@/components/FeaturedSections";
import Hero from "@/components/Hero";

export default function Page() {
return (
    <main className="w-full min-h-screen">
        <Hero />
        <FeaturedSection />
        <DealsAndTrending />
    </main> 
);
}