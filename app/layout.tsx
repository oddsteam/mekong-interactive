import "./globals.css";
import type { Metadata } from "next";
import { Inter, Oswald, Pridi, IBM_Plex_Sans_Thai, Noto_Sans_Thai } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({
	subsets: ["latin"],
	variable: "--font-oswald",
});

const pridi = Pridi({
	weight: ["200", "300", "400", "500"],
	subsets: ["thai"],
	variable: "--font-pridi",
});
const ibm = IBM_Plex_Sans_Thai({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["thai"],
	variable: "--font-ibm",
});
const nosansthai = Noto_Sans_Thai({
	weight: ["200", "300", "400", "500", "600", "700"],
	subsets: ["thai"],
	variable: "--font-nosansthai",
});

export const metadata: Metadata = {
	title: "Storytelling Landing Page",
	description: "A beautiful storytelling landing page with scroll animations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${oswald.className} ${pridi.className} ${ibm.className} ${nosansthai.className}`}
			>
				{children}
			</body>
		</html>
	);
}
