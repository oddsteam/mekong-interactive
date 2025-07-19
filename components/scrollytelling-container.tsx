"use client";

import { useRef } from "react";
import HeroSection from "./hero-section";
import { SectionContext } from "@/lib/section-context";
import EmptyScreenSection from "./empty-screen-section";

export default function ScrollytellingContainer() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<SectionContext.Provider value={{ containerRef }}>
			<div ref={containerRef} className="relative overflow-hidden">
				<HeroSection />
				<EmptyScreenSection />
				<EmptyScreenSection />
				<EmptyScreenSection />
				<EmptyScreenSection />
				<EmptyScreenSection />
			</div>
		</SectionContext.Provider>
	);
}
