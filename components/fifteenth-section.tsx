import MekongDiagramSVG from "./icons/mekong-diagram-svg";
import UnderlineSVG from "./icons/under-line-svg";

export default function FifteenthSection() {
	return (
		<section className="snap-start bg-[#171918] flex flex-col items-center justify-center gap-24 text-white py-16 bg-[url('/images/wave-two.png')] bg-bottom bg-no-repeat">
			<div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg object-cover inline-block p-8 font-ibm text-center">
				<h1 className="text-5xl font-bold mb-4">ปัญหาที่รุนแรงจากภาวะความผันผวนในแม่น้ำโขง</h1>
				<p className="text-3xl">และการทำลายทรัพยากรธรรมชาติ ทั้งทำลายเกาะแก่ง ทำเหมืองดูดทราย</p>
				<p className="text-3xl">จนนำมาซึ่งการกัดเซาะและพังทลายของตลิ่งริมแม่น้ำ เป็นเหตุผลสำคัญ</p>
				<p className="text-3xl">ที่ทำให้มีการเทงบประมาณ ‘มหาศาล’</p>
				<p className="text-3xl">เพื่อสร้างเขื่อนป้องกันตลิ่งอย่างต่อเนื่องตลอดระยะเวลากว่า 10 ปีที่ผ่านมา</p>
			</div>
			<div className="flex flex-col items-end">
				<h1 className="text-5xl font-bold">ปัจจัยสร้างเขื่อนป้องกันตลิ่ง</h1>
				<UnderlineSVG />
			</div>
            <div>
                <MekongDiagramSVG />
            </div>
		</section>
	);
}
