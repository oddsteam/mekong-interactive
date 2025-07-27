import { motion } from "framer-motion";
import { SVGProps } from "react";

const ScrollingDownSvg = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={52} height={93} fill="none" {...props}>
			<rect
				width={46}
				height={87}
				x={3}
				y={3}
				stroke="#fff"
				strokeWidth={6}
				rx={23}
				style={{
					stroke: "#fff",
					strokeOpacity: 1,
				}}
			/>
			<motion.circle
				cx={25.5}
				r={11.5}
				fill="#fff"
				style={{
					fill: "#fff",
					fillOpacity: 1,
				}}
				initial={{ cy: 66.5 }}
				animate={{ cy: [66.5, 48.5, 66.5] }}
				transition={{
					duration: 1.2,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
		</svg>
	);
};

export default ScrollingDownSvg;
