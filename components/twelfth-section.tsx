"use client";

export default function TwelfthSection() {
	return (
		<section className="w-screen bg-[#171918] text-white flex flex-col items-center justify-center px-4 py-10 space-y-12">
			<div className="h-screen snap-start">
				<div
					className="relative flex items-center w-screen h-full px-4"
					style={{
						backgroundImage: "url('/images/mekong-dams.webp')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						overflow: "auto",
					}}
				>
					<div
						className="relative z-10 p-4 text-center font-ibm font-light text-lg 2xl:text-2xl text-gray-200"
						style={{
							position: "absolute",
							top: "25%",
							left: "65%",
						}}
					>
						<p className="text-wrap">
							ปัจจุบันเขื่อนในแม่น้ำโขงมีทั้งหมด <span className="font-normal text-[#FFEB52]">22 เขื่อน </span>
							<br />ที่สร้างบนแม่น้ำสายหลักที่ไหลมาตามแม่น้ำ
							<br />ส่วนใหญ่อยู่ในประเทศจีน
							<br />มีทั้งเขื่อนที่สร้างเสร็จแล้วและกำลังก่อสร้าง
						</p>
					</div>
				</div>
			</div>

			<div className="h-screen flex flex-col items-center justify-center snap-start gap-6">
				<div className="font-ibm font-light text-center text-lg 2xl:text-2xl text-gray-200 px-4">
					<p>
						การกักเก็บน้ำของเขื่อนต่าง ๆ ส่งผลอย่างชัดเจนต่อ
						<span className="font-normal text-[#FFEB52]"> ‘ปริมาณน้ำ’</span> ที่ไหลมาตามแม่น้ำ
					</p>
					และทำให้การเพิ่มหรือลดของระดับน้ำในบางฤดูกาล
					<span className="font-normal text-[#FFEB52]"> ‘ไม่สอดคล้อง’</span> กับธรรมชาติ
					<p>เช่น ในช่วงฤดูแล้งก็อาจมีปริมาณน้ำมากได้หรือในช่วงฤดูฝนก็อาจจะมีน้ำน้อยได้</p>
					<p>ทั้งยังส่งผลต่อการเปลี่ยนแปลงของทิศทางการไหลของแม่น้ำอีกด้วย</p>
				</div>

				<iframe
					src="https://flo.uri.sh/visualisation/24454353/embed"
					title="Nong Khai Area Comparison"
					className="flourish-embed-iframe w-screen h-[480px] 2xl:h-[800px]"
					sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
				></iframe>

				<div className="font-ibm font-light text-center text-lg 2xl:text-2xl text-gray-200 px-4">
					<p>
						<span className="font-normal text-[#FFEB52]">ภาพถ่ายดาวเทียม</span>จากสำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (องค์การมหาชน) หรือ GISTDA
						<br />แสดงให้เห็นถึง<span className="font-normal text-[#FFEB52]">การเปลี่ยนแปลงทางกายภาพ</span>ที่เกิดขึ้นกับลำน้ำโขงในพื้นที่บริเวณจังหวัดหนองคาย ระหว่างปี 2017 กับ 2023
					</p>
				</div>
			</div>

			<div className="h-screen flex flex-col items-center justify-center snap-start w-screen">
				<div className="font-ibm text-center text-lg 2xl:text-2xl text-gray-200 px-4 mb-4">
					<p>
						<br />ข้อมูลวิจัย <span className="font-normal text-[#FFEB52]">‘การลดลงอย่างรวดเร็วของทรัพยากรน้ำผิวดินเพื่อการเกษตรและการประมงในลุ่มน้ำโขงตอนล่างช่วงปี 2000–2020’</span>
						<br />โดยทีมนักวิจัยชาวฝรั่งเศสที่เผยแพร่ในเว็บไซต์ <a href="https://www.sciencedirect.com" target="_blank" className="hover:text-[#FFEB52] transition-colors">sciencedirect.com</a> ซึ่งใช้วิธีการวิเคราะห์จากดาวเทียมหลายดวง
						<br />ในการประเมินความแปรผันของการกักเก็บน้ำผิวดินและเชื่อมโยงความแปรผันเหล่านี้กับปัจจัยจากสภาพภูมิอากาศ
						<br />และปัจจัยที่เกิดจากมนุษย์ทั่วทั้งลุ่มน้ำโขง ซึ่งรวมถึงเขื่อนกักเก็บน้ำต่าง ๆ
						<br />
						<br />พบว่า <span className="font-normal text-[#FFEB52]">การดำเนินงานของเขื่อนส่งผลต่อความผันผวนของระดับน้ำในแม่น้ำโขงอย่างมาก</span>
						<br />โดยพบว่าขอบเขตของน้ำท่วมตามฤดูกาลลดลง 55% <span className="text-gray-400">(จาก 3,178 ตารางกิโลเมตร เป็น 1,414 ตารางกิโลเมตร)</span>
						<br />และปริมาณน้ำผิวดินลดลงถึง 70% <span className="text-gray-400">(จาก 1,109 ตารางกิโลเมตร เป็น 327 ตารางกิโลเมตร)</span> ในช่วงปี 2000–2020
						<br />ซึ่งส่งผลกระทบอย่างมากต่อภาคเกษตรกรรมและการทำประมงในแม่น้ำโขง
					</p>
				</div>

				<iframe
					src="https://flo.uri.sh/visualisation/24453139/embed"
					title="Nong Khai Water Levels"
					className="flourish-embed-iframe w-full md:w-3/4 h-[300px] 2xl:h-[600px]"
					sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
				/>

				<div className="font-ibm text-center text-lg 2xl:text-2xl text-gray-200 px-4 mb-4">
					<p>
						ในขณะที่<span className="font-normal text-[#FFEB52]">ข้อมูลระดับน้ำ</span>จากเว็บไซต์ฐานข้อมูลคณะกรรมาธิการแม่น้ำโขง (Mekong River Commission: MRC)
						<br />ก็แสดงให้เห็นถึงความ<span className="font-normal text-[#FFEB52]">ผันผวนอย่างชัดเจน</span>ของระดับน้ำในลำน้ำโขงบริเวณจังหวัดหนองคาย ในช่วงเวลา 10 ปีที่ผ่านมา
						<br />สะท้อนถึงความเปลี่ยนแปลงอันผิดปกติซึ่งมีที่มาจากเขื่อนกักเก็บน้ำดังกล่าว
					</p>
				</div>
			</div>
		</section>
	);
}
