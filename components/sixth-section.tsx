import Image from "next/image";
import { useRef } from "react";

export default function SixthSection() {
	const sectionRef = useRef<HTMLDivElement>(null);

	return (
		<section ref={sectionRef} className="h-[200vh] w-full bg-[#171918] text-white">
			<div className="h-screen flex flex-col justify-center items-center gap-10 snap-start">
				<div className="border-t-[1px] border-white w-5/6" />
				<div className="border-t-[1px] border-white w-5/6" />
				<div className="w-5/6 flex justify-between items-center">
					<div className="w-1/2">
						<Image
							src="/images/golden-triangle.png"
							alt="golden triangle"
							className="object-cover"
							width={500}
							height={500}
						/>
					</div>
					<div className="w-1/2 font-ibm flex flex-col gap-4">
						<p className="text-[#FFEB52] font-bold text-6xl">แต่หลายสิบปีที่ผ่านมา</p>
						<p className="font-ibm font-normal text-3xl">โฉมหน้าของแม่น้ำสายนี้ค่อยๆ แปรเปลี่ยนไป</p>
						<p className="font-ibm font-normal text-3xl">ปัจจัยหลักมาจากฝีมือมนุษย์</p>
					</div>
				</div>
				<div className="border-t-[1px] border-white w-5/6" />
				<div className="border-t-[1px] border-white w-5/6" />
			</div>

			<div className="w-screen flex justify-center h-screen items-center bg-[url('/images/mekong-dam-topview.jpg')] bg-cover bg-center text-center snap-start">
				<div className="w-1/2 font-ibm flex flex-col gap-4">
					<p className="font-bold text-6xl">การสร้างเขื่อนผลิตไฟฟ้า</p>
					<p className="font-ibm font-normal text-3xl">
						ในลำน้ำโขงตั้งแต่ลุ่มน้ำตอนบนอย่างจีน และสปป.ลาว ลงมาถึง ลุ่มน้ำโขงตอนล่างที่ก่อ
						ผลกระทบทำให้ระดับน้ำเกิดความผันผวน
					</p>
				</div>
			</div>
		</section>
	);
}
