import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				inter: ["var(--font-inter)", "sans-serif"],
				pridi: ["var(--font-pridi)", "serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
        ibm: ["var(--font-ibm)", "sans-serif"],
        nosansthai: ["var(--font-nosansthai)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        kartsatapat: ["var(--font-kartsatapat)", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
