import { motion } from "framer-motion";
import Image from "next/image";

export default function EighthSection() {
	return (
		<section className="relative h-[200vh] w-screen snap-start bg-black">
			<div className="sticky top-0 h-screen w-screen z-0">
				<motion.div className="relative h-screen w-screen bg-[url('/images/fishing-boats-mekong-river.png')] bg-cover bg-center bg-no-repeat flex items-center p-16">
					<motion.div
						className="flex-1 h-auto items-center justify-center"
						initial={{ opacity: 1 }}
						transition={{ duration: 1, ease: "easeInOut" }}
					>
						<Image src="/images/riverbank.png" alt="riverbank" height={640} width={500} />
					</motion.div>
					<div className="relative h-auto font-pridi flex flex-1 flex-col gap-4">
						<p className="text-[#FFEB52] font-bold text-6xl">ด้านความมั่นคง</p>
						<div className="flex flex-col gap-4 backdrop-blur-lg bg-white/10 p-6 rounded-lg">
							<span className="font-ibm text-2xl text-wrap text-white">
								การพังทลายของตลิ่งนั้นเปรียบเสมือน
								<p className="font-bold text-white">การสูญเสียดินแดนหลายตารางกิโลเมตร</p>
								ผลการศึกษาจากสำนักงานทรัพยากรน้ำแห่งชาติพบว่า ตั้งแต่ปี 2535-2561
								พื้นที่ริมตลิ่งแม่น้ำโขง 8 จังหวัด ของไทย ถูกกัดเซาะหายไปกว่า 220 ตารางกิโลเมตร
								ตลอดแนวชายฝั่ง โดยช่วงปี 2546-2552 ซึ่งตรงกับช่วงที่เขื่อนจิ่งหงในจีนเปิดใช้งาน
								เป็นช่วงเวลาที่ตลิ่งริมแม่น้ำโขงพังทลายมากที่สุด
							</span>
							<span className="font-ibm text-2xl text-wrap text-white">
								นับตั้งแต่ปี 2530 รัฐบาลไทยพยายามแก้ไขปัญหา พื้นที่ริมตลิ่งอย่างต่อเนื่อง
								โดยงบประมาณกว่า
								<span className="font-bold"> 40,000 ล้าน</span> ถูกใช้ไปกับโครงการที่แทบจะเป็น
								แนวทางแก้ปัญหาเพียงวิธีเดียว คือการก่อสร้าง ‘เขื่อนป้องกันตลิ่ง’ ในจังหวัดต่างๆ
								ซึ่งยังคงมี การก่อสร้างมาจนถึงปัจจุบัน
							</span>
						</div>
					</div>
				</motion.div>
			</div>

			<div className="absolute inset-0 z-20 flex items-center justify-center h-screen pointer-events-none snap-start"></div>

			<motion.div
				style={{ opacity: 0.9 }}
				animate={{ opacity: 0.9 }}
				transition={{ duration: 0.8 }}
				className="absolute z-20 h-screen w-screen snap-start bg-black"
			>
				<div className="h-screen w-screen flex flex-col items-center justify-center text-white font-ibm text-center">
					<div className="flex flex-col w-4/6 text-4xl gap-16 leading-normal">
						<div>
							<span className="text-[#FFEB52] text-5xl font-bold">
								อย่างไรก็ตาม สิ่งที่กลายเป็นคำถามสำคัญ
							</span>
							<p>
								คือ <span className="font-bold">‘เหตุผล’</span> และ{" "}
								<span className="font-bold">‘ความคุ้มค่า’</span>
							</p>
							<p>
								ในการสร้าง<span className="font-bold">เขื่อนป้องกันตลิ่ง</span>
							</p>
							<p>
								นอกเหนือจากเพื่อ
								<span className="font-bold bg-red-500">ปกป้องอธิปไตยริมแม่น้ำโขง</span>ไม่ให้หายไป
							</p>
						</div>
						<div className="text-white text-3xl text-balance">
							<p className="font-bold">การทุ่มงบประมาณมหาศาลไปกับโครงการเหล่านี้</p>
							<p className="font-bold">ได้มีการคำนึงถึงผลกระทบในมิติอื่นๆ ที่ต้องแลกมาหรือไม่?</p>
							<p>เช่น การเปลี่ยนแปลงวิถีชีวิตชุมชนที่อาศัยตลิ่งริมโขงเลี้ยงชีพมายาวนาน</p>
							<p>
								และภาครัฐมีความ<span className="font-bold">พยายาม</span>บ้างหรือไม่ ที่จะ
								<span className="font-bold">แก้ไข</span>ปัญหาเหล่านี้
							</p>
							<p>
								โดย<span className="font-bold">ไม่ทอดทิ้งผู้คนบางกลุ่มที่ยึดโยง</span>{" "}
								<span className="font-bold">‘ชีวิต’</span> ไว้กับสายน้ำโขง
							</p>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
