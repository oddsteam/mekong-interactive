import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function FourteenthSection() {
	return (
		<section className="relative h-screen snap-start bg-[#171918] bg-[url('/images/old-image-mekong.png')] bg-cover bg-center text-white flex justify-start items-end text-6xl font-bold font-ibm p-16">
			<Image
				src="/images/old-flash.png"
				alt="Old image of Mekong River"
				className="absolute inset-0 object-cover opacity-50 w-full h-full z-30"
				width={1920}
				height={1080}
				priority
			/>
			<Typewriter
				words={["10 ปี กับ 4 หมื่นล้าน"]}
				loop={0}
				cursor
				cursorStyle="|"
				typeSpeed={70}
				deleteSpeed={50}
				delaySpeed={1000}
			></Typewriter>
		</section>
	);
}
