export default function EighteenthSection() {
	return (
		<section className="relative h-screen snap-start bg-[#000000] text-white flex flex-col justify-center items-center overflow-hidden">
			<div className="relative w-full h-auto">
				<iframe
					className="w-full h-full object-cover overflow-hidden rounded-md"
					src="https://lookerstudio.google.com/embed/reporting/df08f7ad-0f4e-433d-a51a-afe248cf152f/page/j7FTF"
					sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
					height="100%"
					style={{ aspectRatio: "16/9" }}
					allowFullScreen
				/>
			</div>
			<div className="absolute bottom-0 w-full font-ibm text-normal 2xl:text-2xl text-gray-200 text-center">
				<p className="w-full justify-center bg-black text-white py-8">
					ฐานข้อมูล <span className="font-medium text-[#FFEB52]">‘ภาษีไปไหน’</span>{" "}
					ที่นำเสนอระบบข้อมูลการใช้จ่ายภาครัฐ ระบุว่าตั้งแต่ปี 2558 เป็นต้นมา
					<br />
					มีการสร้างเขื่อนป้องกันตลิ่งกว่า
					<span className="font-medium text-[#FFEB52]">528 โครงการในพื้นที่ 92 ตำบล</span> รวมเป็นเงิน{" "}
					<span className="font-medium text-[#FFEB52]">40,162,071,758 บาท</span>
					<br />
					โดยมีหน่วยงานที่รับผิดชอบทั้งหมดคือกรมโยธาธิการและผังเมือง กระทรวงมหาดไทย
				</p>
			</div>
		</section>
	);
}
