"use client";

import HeroSection from "@/components/hero-section";
import FirstSection from "@/components/first-section";
import { SectionContext } from "@/lib/section-context";
import { useRef } from "react";
import SecondSection from "@/components/second-section";
import ThirdSection from "@/components/third-section";
import ForthSection from "@/components/forth-section";
import SixthSection from "@/components/sixth-section";

export default function Home() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<main className="h-screen">
			<SectionContext.Provider value={{ containerRef }}>
				<div ref={containerRef} className="h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
					<HeroSection />
					<FirstSection />
					<SecondSection />
					<ThirdSection />
					<ForthSection />
					<SixthSection />
				</div>
			</SectionContext.Provider>
		</main>
	);
}
