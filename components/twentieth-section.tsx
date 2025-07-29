import Image from "next/image";
export default function TwentiethSection() {
	return (
		<section className="h-[200vh] snap-start bg-[#252424] text-white flex flex-col justify-center items-center">
			<div className="relative w-full h-full">
				<Image
					src="/images/page-25.png"
					alt="Page 25 of the Mekong River interactive story"
					fill
					style={{ objectFit: "contain" }}
					sizes="100vw"
					priority
				/>
			</div>
		</section>
	);
}
