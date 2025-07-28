// components/ImageStack.js
"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

const images = [
	"/images/1.png",
	"/images/2.png",
	"/images/3.png",
	"/images/4.png",
	"/images/5.png",
	"/images/6.png",
	"/images/7.png",
	"/images/8.png",
	"/images/9.png",
	"/images/10.png",
];

const ImageStack = () => {
	const container = useRef(null);
	const [visibleCount, setVisibleCount] = useState(0);
	const isInView = useInView(container, { amount: "all", once: false });

	useEffect(() => {
		const node = container.current;
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					const interval = setInterval(() => {
						setVisibleCount((prev) => {
							if (prev >= images.length) {
								clearInterval(interval);
								return prev;
							}
							return prev + 1;
						});
					}, 250);
				}
			},
			{ threshold: 0.3 }
		);

		if (node) observer.observe(node);

		return () => {
			if (node) observer.unobserve(node);
		};
	}, [isInView]);

	return (
		<main ref={container} className="relative h-screen snap-start bg-[#171918]">
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="relative w-full h-full overflow-hidden">
					<AnimatePresence>
						{images.slice(0, visibleCount).map((src, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20, zIndex: images.length + index }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="absolute w-full h-full flex items-center justify-center"
								style={{ zIndex: images.length - index }}
							>
								<Image
									src={src}
									alt={`Image ${index + 1}`}
									layout="intrinsic"
									width={700}
									height={700}
									priority={index === 0}
								/>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
		</main>
	);
};

export default ImageStack;
