import { motion } from "framer-motion";
import Image from "next/image";

export default function EighthSection() {
	return (
		<section className="relative h-[200vh] w-screen snap-start bg-black">
			<div className="sticky top-0 h-screen w-screen z-0">
				<motion.div className="relative h-screen w-screen">
					s
					<Image
						src="/images/fishing-boats-mekong-river.png"
						alt="Fishing river"
						fill
						className="object-cover"
					/>
					<motion.div
						className="absolute w-1/2 h-full z-10 top-[100px] left-[100px]"
						initial={{ opacity: 1 }}
						transition={{ duration: 1, ease: "easeInOut" }}
					>
						<Image src="/images/riverbank.png" alt="riverbank" height={640} width={500} />
					</motion.div>
					<div className="absolute h-full w-1/2 font-pridi flex flex-col gap-4 top-[100px] right-[100px]">
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
					<div className="flex flex-col w-4/6 text-4xl gap-16">
						<div>
							<span className="text-[#FFEB52] text-5xl font-bold">
								อย่างไรก็ตาม สิ่งที่กลายเป็นคำถามสำคัญคือ เหตุผลและความคุ้มค่า
							</span>
							<span> ในการสร้างเขื่อนป้องกันตลิ่ง</span>
							<p>
								นอกเหนือจาก
								<span className="font-bold">เพื่อปกป้องอธิปไตยริมแม่น้ำโขง</span>ไม่ให้หายไป
							</p>
						</div>
						<div className="text-white text-3xl text-balance">
							<p>
								การทุ่มงบประมาณมหาศาลไปกับโครงการเหล่านี้ ได้มีการคำนึงถึงผลกระทบในมิติอื่นๆ
								ที่ต้องแลกมา
							</p>
							<p>เช่น วิถีชีวิตของชุมชนที่อาศัยตลิ่งริมโขงเลี้ยงชีพมาอย่างยาวนานหรือไม่</p>
							<p>และภาครัฐมีความพยายามบ้างหรือไม่ ที่จะแก้ไขปัญหาเหล่านี้</p>
							<p>โดยไม่ทอดทิ้งผู้คนบางกลุ่มที่ยึดโยงชีวิตไว้กับสายน้ำโขง</p>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
