export default function SuggessionSection() {
	return (
		<section className="font-ibm w-full snap-start bg-[#2D3A2B] flex flex-col gap-8 items-center justify-center min-h-screen p-8 relative overflow-hidden">
			<div
				className="absolute inset-0 opacity-50 pointer-events-none"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%233F4F3B' class='size-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46' /%3E%3C/svg%3E")`,
					backgroundSize: "40px 40px",
					backgroundRepeat: "repeat",
					transform: "rotate(-15deg) scale(2)",
					transformOrigin: "center",
				}}
			/>
			<div className="font-ibm font-light text-center text-2xl 2xl:text-4xl text-gray-200 px-4 relative z-10">
				<p>
					อย่างไรก็ตาม ข้อเสนอเหล่านี้อาจลอยหายไปกับสายน้ำหากไร้ซึ่งเสียงสะท้อนที่{" "}
					<span className="font-medium text-[#FFEB52]">‘ดังมากพอ’</span>
				</p>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSfoLaf6ULUbKFMFDkfNpMUtSHMtCXVD78Xi_Qxyl_YAcYPhNA/viewform?usp=dialog"
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecoration: "none" }}
				>
					<div className="flex w-fit items-center gap-3 bg-[#FFEB52] text-[#171918] my-6 px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors cursor-pointer mx-auto">
						<span className="font-medium">ร่วมส่งเสียงถึงภาครัฐ</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</div>
				</a>
			</div>
		</section>
	);
}
