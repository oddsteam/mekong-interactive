"use client";

import ScrollytellingContainer from "@/components/scrollytelling-container";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main className="relative overflow-hidden">
			<ScrollytellingContainer />
		</main>
	);
}
