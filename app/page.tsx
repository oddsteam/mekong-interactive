"use client";

import HeroSection from "@/components/hero-section";
import FirstSection from "@/components/first-section";
import { SectionContext } from "@/lib/section-context";
import { useRef } from "react";
import SecondSection from "@/components/second-section";
import ThirdSection from "@/components/third-section";
import ForthSection from "@/components/forth-section";
import SixthSection from "@/components/sixth-section";
import FifthSection from "@/components/fifth-section";
import SeventhSection from "@/components/seventh-section";
import EighthSection from "@/components/eighth-secion";
import NinthSection from "@/components/ninth-section";
import TenthSection from "@/components/tenth-section";
import EleventhSection from "@/components/eleventh-section";
import TwelfthSection from "@/components/twelfth-section";
import ThirteenthSection from "@/components/thirteenth-section";
import FourteenthSection from "@/components/fourteenth-section";
import FifteenthSection from "@/components/fifteenth-section";
import SixteenthSection from "@/components/sixteenth-section";

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
					<FifthSection />
					<SixthSection />
					<SeventhSection />
					<EighthSection />
					<NinthSection />
					<TenthSection />
					<EleventhSection />
					<TwelfthSection />
					<ThirteenthSection />
					<FourteenthSection />
					<FifteenthSection />
					<SixteenthSection />
				</div>
			</SectionContext.Provider>
		</main>
	);
}
