import Image from "next/image";

export default function SixteenthSection() {
	return (
		<section className="h-screen w-auto snap-start bg-[#171918] text-white flex flex-col justify-center items-center">
			<div className="relative w-full h-full">
				<Image
					src="/images/page-21.png"
					alt="Page 21 of the Mekong River interactive story"
					fill
					style={{ objectFit: "contain" }}
					sizes="100vw"
					priority
				/>
			</div>
		</section>
	);
}
