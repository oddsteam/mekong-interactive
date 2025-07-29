import Image from "next/image";

export default function TwentyNinthSection() {
	return (
		<section className="h-[200vh] snap-start bg-[#171918] text-white flex flex-col justify-center items-center">
			<div className="relative w-full h-full">
				<Image
					src="/images/page-34.png"
					alt="Page 34 of the Mekong River interactive story"
					fill
					style={{ objectFit: "contain" }}
					sizes="100vw"
					priority
				/>
			</div>
		</section>
	);
}
