import "./globals.css";
import type { Metadata } from "next";
import { Inter, Oswald, Pridi, IBM_Plex_Sans_Thai, Noto_Sans_Thai, Roboto } from "next/font/google";
import localFont from "next/font/local";

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

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

const kartsatapat = localFont({
	src: "./fonts/Kart-Satapat.ttf",
	variable: "--font-kartsatapat",
	weight: "100 900",
});

const worasait = localFont({
	src: "./fonts/worasait.ttf",
	variable: "--font-worasait",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "ตำน้ำพริกละลาย Mekong สำรวจความคุ้มค่าเขื่อนป้องกันตลิ่ง 4 หมื่นล้าน",
	description: "งบมหาศาลที่ถูกเทลงไป ส่งผลกระทบต่อชีวิตผู้คนริมโขงอย่างไรบ้าง และคุ้มค่าหรือไม่เมื่อเทียบกับผลลัพธ์ที่ได้กลับมา",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${oswald.variable} ${pridi.variable} ${ibm.variable} ${nosansthai.variable} ${roboto.variable} ${kartsatapat.variable} ${worasait.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
