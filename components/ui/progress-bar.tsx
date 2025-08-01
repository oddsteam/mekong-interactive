import { motion } from "framer-motion";

export default function ProgressBar({ progress, prefix }: { progress: number; prefix?: string }) {
	return (
		<div className="relative w-full bg-[#C7D3EB] rounded-full h-2.5">
			<motion.div
				className="bg-[#2E88AC] h-2.5 rounded-full flex items-end justify-end"
				initial={{ width: 0 }}
				animate={{ width: `${progress}%` }}
				transition={{ duration: 1, ease: "easeOut" }}
			>
				<div
					style={{ width: `${progress}%` }}
					className="relative w-full h-full flex items-end justify-end flex-col"
				>
					<div className="absolute flex flex-col items-center justify-end translate-x-1/2 translate-y-full">
						<div
							style={{
								width: 0,
								height: 0,
								borderLeft: "6px solid transparent",
								borderRight: "6px solid transparent",
								borderTop: "8px solid #3174A5",
								transform: "rotate(180deg)",
							}}
						/>
						<div className="flex items-center gap-1 text-xs text-white bg-[#3174A5] p-1 rounded-sm">
							<div className="flex w-24 justify-center">
								{prefix}
								{progress}%
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
