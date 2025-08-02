export default function ThirtyEighthSection() {
	return (
		<section className="font-ibm w-full snap-start bg-[#2D3A2B] flex flex-col gap-8 items-center justify-center min-h-screen p-8">
			<a
				href="https://lookerstudio.google.com/u/0/reporting/5ae5f297-cbd6-4f0c-a4a2-105e5ab4cf7d/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden">
					<div className="bg-gray-200 px-4 py-2 flex items-center gap-2">
						<div className="flex gap-2">
							<div className="w-3 h-3 bg-red-500 rounded-full"></div>
							<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
							<div className="w-3 h-3 bg-green-500 rounded-full"></div>
						</div>

						<div className="flex-1 mx-4">
							<div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600 border border-gray-300">
								https://lookerstudio.google.com/reporting/rethinking-mekong-defenses/...
							</div>
						</div>
					</div>

					<div className="bg-white">
						<div className="w-full h-fit bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
							<img
								src="/images/public-data-ashboard.gif"
								alt="Public Data Dashboard"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</a>

			<div className="font-ibm font-light text-center text-2xl 2xl:text-4xl text-gray-200 px-4">
				<p>
					สำรวจข้อมูลเพิ่มเติมได้ที่
                    <a className="font-medium text-[#FFEB52]" href="https://lookerstudio.google.com/u/0/reporting/5ae5f297-cbd6-4f0c-a4a2-105e5ab4cf7d/" target="_blank" rel="noopener noreferrer"> Public Data Dashboard</a>
                    <span className="inline-block align-middle ml-1 relative" style={{ top: '6px' }}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 3l14 7-7 3-3 7-4-17z"
                                fill="#FFEB52"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </p>
			</div>
		</section>
	);
}
