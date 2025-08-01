import * as React from "react";
const FlagSvg = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={20} height={31} fill="none" {...props} viewBox="0 0 20 31">
		<path
			fill="#D73842"
			d="M19.508 7.633C14.358 4.279 8.823 5.644 3.682 2.297v11.916c6.19.796 9.595-7.045 15.826-6.58Z"
			style={{
				fill: "#d73842",
				fillOpacity: 1,
			}}
		/>
		<path
			fill="#FAC39A"
			d="M2.697.836h1.969v29.301H2.697V.836Z"
			style={{
				fill: "#fac39a",
				fillOpacity: 1,
			}}
		/>
		<path
			fill="#384051"
			d="M5.19 28.977H2.173a1.406 1.406 0 0 0-1.406 1.406v.562h5.83v-.562a1.407 1.407 0 0 0-1.407-1.406Z"
			style={{
				fill: "#384051",
				fillOpacity: 1,
			}}
		/>
	</svg>
);
export default FlagSvg;
