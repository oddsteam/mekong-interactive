import Image from "next/image";

export default function NineteenthSection() {
	return (
		<section className="h-[300vh] snap-start bg-[#171918] text-white flex flex-col justify-center items-center">
			<div className="relative w-full h-full">
				<Image
					src="/images/page-24.png"
					alt="Page 24 of the Mekong River interactive story"
					fill
					sizes="100vw"
					priority
				/>
			</div>
		</section>
	);
}
