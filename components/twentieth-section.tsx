import Link from "next/link";
import Image from "next/image";
import DamSvg from "./icons/dam-svg";

export default function TwentiethSection() {
	return (
		<section className="h-auto snap-start bg-[#252424] text-white flex flex-col justify-center items-center py-16">
			<div className="relative w-full h-full font-ibm flex flex-col justify-center items-center text-center gap-16">
				<div className="text-3xl">
					<p>
						<span className="font-bold">ปี 2563</span> ทรงศักดิ์ ทองศรี
					</p>
					<p>รัฐมนตรีช่วยว่าการกระทรวงมหาดไทยภายใต้รัฐบาลของพล.อ.ประยุทธ์ จันทร์โอชา</p>
					<p>กล่าวระหว่างการเยี่ยมชมพื้นที่ว่า การก่อสร้างในบริเวณดังกล่าว มีเจตจำนงจะให้เป็น</p>
				</div>
				<div>
					<p className="font-bold text-6xl text-[#FFEB52]">“แลนด์มาร์ก”</p>
				</div>
				<div className="text-3xl">
					<p>“พื้นที่ดังกล่าวจะทำให้จังหวัดบึงกาฬมีชื่อเสียงในระดับประเทศ</p>
					<p>และเป็นแหล่งการค้าการลงทุนที่เชื่อมโยงกับประเทศในภูมิภาคอินโดจีน”</p>
					<Link href="https://www.matichon.co.th/weekly/pr/article_513432" className="text-xl underline">
						มติชนบรรยาย
					</Link>
				</div>
				<div className="flex justify-between items-center w-fit px-4 py-4 bg-[#B7B7B733] bg-opacity-20 rounded-lg text-left">
					<div className="">
						<p>
							น่าสังเกตว่าพื้นที่ที่ได้รับ งบประมาณ <span className="font-bold">“จำนวนมาก”</span>
						</p>
						<p>เช่นพื้นที่ตำบลบุฮม อ.เชียงคาน จ.เลย หรือ</p>
						<p>พื้นที่ตำบลหนองเดิ่น อ.บุ่งคล้า จ.บึงกาฬ</p>
						<p>ซึ่งไม่ได้มีความสำคัญในฐานะพื้นที่ท่องเที่ยว</p>
						<p>กลับได้รับงบประมาณสูงถึงเมตรละ 1.6 พันล้านบาท</p>
						<p>และ 1.4 พันล้านบาทตามลำดับ</p>
					</div>
					<Image
						src="/images/walking-street.png"
						alt="Walking street"
						className="object-contain w-1/2 h-full"
						width={200}
						height={200}
						priority
					/>
				</div>
				<p className="text-3xl font-bold">
					เจาะเข้าไปจากจำนวน 4 หมื่นล้านบาทแล้วจะพบว่าคิดเป็นงบประมาณได้ดังนี้
				</p>
				<div className="flex flex-row justify-between items-center w-fit">
					<div className="relative w-1/2">
						<DamSvg />
						<p className="text-4xl font-bold text-[#FFEB52]">39,986,534,971 บาท</p>
						<p className="text-2xl">
							งบประมาณในการ <span className="font-bold">“สร้าง”</span>
						</p>
					</div>
					<div className="mx-8 h-96 border-l-2 border-[#F5F3F0]"></div>
					<div className="relative w-1/2">
						<Image
							src="/images/dam-construction-svg.png"
							alt="Dam construction"
							width={150}
							height={150}
							className="object-contain w-fit"
							priority
						/>
						<p className="text-4xl font-bold text-[#FFEB52]">175,536,787 บาท</p>
						<p className="text-2xl">
							งบประมาณในการ <span className="font-bold">“ซ่อม”</span>
						</p>
					</div>
				</div>
				<div className="text-2xl">
					<p>ตัวเลขการซ่อมแซมนี้อาจยังดูไม่สูงมากนัก</p>
					<p>แต่ก็มากพอที่จะทำให้นักวิชาการเริ่มกังวลถึงค่าบำรุงรักษาเขื่อนที่ได้มีการสร้างไปแล้ว</p>
					<p>
						เนื่องจากมีแนวโน้มว่างบประมาณส่อ <span className="font-bold">“บวม”</span> ขึ้นในอนาคต
					</p>
				</div>
			</div>
		</section>
	);
}
