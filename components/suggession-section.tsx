export default function SuggessionSection() {
	return (
		<section className="font-ibm w-full snap-start bg-[#2D3A2B] flex flex-col gap-8 items-center justify-center min-h-screen p-8 relative overflow-hidden">
			<div
				className="absolute inset-0 opacity-5 pointer-events-none"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%23FFFFFF' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 21H15M12 3C9.5 3 7.5 4.95 7.5 7.25C7.5 9.8 9 11.5 9 13.5V15.5C9 16.33 9.67 17 10.5 17H13.5C14.33 17 15 16.33 15 15.5V13.5C15 11.5 16.5 9.8 16.5 7.25C16.5 4.95 14.5 3 12 3Z'/%3E%3C/svg%3E")`,
					backgroundSize: "60px 60px",
					backgroundRepeat: "repeat",
					transform: "rotate(15deg) scale(1.5)",
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
