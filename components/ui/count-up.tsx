"use client";

import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface CountUpProps {
	from?: number;
	to: number;
	duration?: number;
	separator?: string;
	prefix?: string;
	suffix?: string;
}

export default function CountUp({
	from = 0,
	to,
	duration = 2,
	separator = ",",
	prefix = "",
	suffix = "",
}: CountUpProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	const count = useMotionValue(from);
	const [current, setCurrent] = useState(from);

	useEffect(() => {
		if (!isInView) return;

		count.set(from);

		const controls = animate(count, to, {
			duration,
			onUpdate(value) {
				setCurrent(Math.floor(value));
			},
		});

		return () => controls.stop();
	}, [isInView, to, duration, count, from]);

	const formatNumber = (num: number) => {
		return num.toLocaleString(undefined, {
			useGrouping: !!separator,
		});
	};

	return (
		<motion.span ref={ref}>
			{prefix}
			{formatNumber(current)}
			{suffix}
		</motion.span>
	);
}
