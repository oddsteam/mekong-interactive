import Image from "next/image";

export default function ThirtyThirdSection() {
	return (
		<section className="h-[150vh] snap-start bg-[#171918] text-white flex flex-col justify-center items-center">
			<div className="relative w-full h-full">
				<Image
					src="/images/page-38.png"
					alt="Page 38 of the Mekong River interactive story"
					fill
					style={{ objectFit: "cover" }}
					sizes="100vw"
					priority
				/>
			</div>
		</section>
	);
}
