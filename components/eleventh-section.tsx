import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const data = [
	{
		id: "one",
		image: "/images/villager-one.png",
		quote: "บางครั้งส่งเรือไปไม่รู้กี่รอบ ก็ไม่ได้ปลาเลย",
		description:
			"“ ปัจจุบันนี้ ระดับน้ำโขงขึ้นลงไม่ปกติ อยู่ที่เขื่อนของจีนเขา … มันมีผลกระทบเกี่ยวกับการเพาะปลูกพืชผลทางการเกษตร บางทีจะปลูกผักปลูกอะไร ตอนนี้ทำไม่ได้แล้ว ถ้าปลูกไว้ เดี๋ยวน้ำเขาปล่อยลงมา มันก็มาท่วมผักอีก ... คนที่ทำประมงก็ต้องเสี่ยงทำ บางครั้งส่งเรือไปไม่รู้กี่รอบ ก็ไม่ได้ปลาเลย มันเสี่ยงกับการลงทุนนะตอนนี้ หลายคนเลยผันตัวไปทำงานรับจ้างแทน ”",
		name: "เตียม เงินท็อก (ชาวบ้านบ้านสบกก จังหวัดเชียงราย)",
	},
	{
		id: "two",
		image: "/images/villager-two.png",
		quote: "เดี๋ยวนี้มีน้อยที่ทำประมงเป็นอาชีพ",
		description:
			"“ เดี๋ยวนี้การประมงหมู่บ้านแย่ไปเยอะตั้งแต่มีเขื่อนจีน กระทบต่อชาวบ้านที่ทำประมง หาปลาไม่ค่อยจะได้กัน เขาก็เปลี่ยนอาชีพกันเยอะ เดี๋ยวนี้มีน้อยที่ทำประมงเป็นอาชีพ ”",
		name: "มนัสชัย ใจแดง (ผู้ใหญ่บ้านบ้านสบกก จังหวัดเชียงราย)",
	},
	{
		id: "three",
		image: "/images/villager-three.png",
		quote: "เรือประมงในหมู่บ้านเหลือแค่ 3 ลำ",
		description:
			"“ น้ำขึ้นผิดธรรมชาติมาหลายปีแล้ว แต่ที่กระทบหนักจริงๆ ก็ 3-4 ปีมานี้ น้ำขึ้นน้ำลงวันต่อวัน คือผิดปกติเลย ตอนนี้ก็พอมีปลาเล็กๆ อยู่ แต่ปลาเศรษฐกิจตัวใหญ่ๆ ที่เราเคยกิน ที่ราคาดีๆ ไม่มีแล้ว มีแต่ปลาที่เราทำเพาะพันธุ์ในหมู่บ้านเองแล้วปล่อยลงแม่น้ำ คนก็ไม่ทำประมงกันแล้ว เรือประมงในหมู่บ้านเหลือแค่ 3 ลำ จากที่เคยมี 70 กว่าลำ ”",
		name: "นริศรา พูนศิริวลัย (ผู้ช่วยผู้ใหญ่บ้านปากอิงใต้ หมู่ 16)",
	},
];

export default function EleventhSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (!scrollContainerRef.current) return;

		const scrollInterval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % data.length);
		}, 5000); // Change slide every 5s

		return () => clearInterval(scrollInterval);
	}, []);

	useEffect(() => {
		if (!scrollContainerRef.current) return;

		const scrollX = scrollContainerRef.current.clientWidth * currentIndex;
		scrollContainerRef.current.scrollTo({
			left: scrollX,
			behavior: "smooth",
		});
	}, [currentIndex]);

	return (
		<section
			ref={sectionRef}
			className="h-screen relative w-full bg-[#171918] text-white snap-start flex flex-col items-center overflow-hidden"
		>
			<div className="absolute top-[100px] font-ibm text-9xl font-bold text-[#2D3A2B] text-end blur-sm z-0">
				<p>ความเดือดร้อนของผู้คน</p>
				<p>ที่ทำมาหากินริมโขง</p>
			</div>

			<div
				ref={scrollContainerRef}
				className="flex overflow-x-scroll scroll-snap-x snap-x snap-mandatory w-full h-full z-10 no-scrollbar"
			>
				{data.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
						className="flex-shrink-0 w-full h-full snap-center flex items-center justify-center gap-6 px-10"
					>
						<Image
							src={item.image}
							alt={`Image of villager ${item.id}`}
							width={458}
							height={554}
							className="object-cover"
						/>
						<div className="flex flex-col justify-end w-1/2 h-[554px] align-bottom gap-4 text-white font-ibm text-2xl">
							<p className="font-kartsatapat text-4xl">{item.quote}</p>
							<p className="">{item.description}</p>
							<p className="">{item.name}</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
