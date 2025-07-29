"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Papa from "papaparse";
import Image from "next/image";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

interface CSVRow {
	timestamp: string;
	value: string;
}

export default function ForthSection() {
	const [chartData, setChartData] = useState<{
		labels: string[];
		datasets: {
			label: string;
			data: {
				x: string;
				y: number;
			}[];
			borderColor: string;
			backgroundColor: string;
			fill: boolean;
			tension: number;
		}[];
	} | null>(null);
	const [selectedYear, setSelectedYear] = useState("2018-2023");

	useEffect(() => {
		fetch("/files/nong-khai.csv")
			.then((res) => res.text())
			.then((csvText) => {
				const parsed = Papa.parse<CSVRow>(csvText, {
					header: true,
					skipEmptyLines: true,
				});

				const data = parsed.data.map((row) => {
					const timestamp = new Date(row.timestamp);
					return {
						timestamp,
						monthDay: `${String(timestamp.getMonth() + 1).padStart(2, "0")}-${String(
							timestamp.getDate()
						).padStart(2, "0")}`, // MM-DD
						year: timestamp.getFullYear().toString(),
						value: parseFloat(row.value),
					};
				});

				const dataByYear: Record<string, { x: string; y: number }[]> = {};

				data.forEach((row) => {
					if (!dataByYear[row.year]) {
						dataByYear[row.year] = [];
					}
					dataByYear[row.year].push({ x: row.monthDay, y: row.value });
				});

				const targetYears = selectedYear === "2018-2023" ? Object.keys(dataByYear) : [selectedYear];

				const colors = {
					"2018": "#3b82f6",
					"2019": "#10b981",
					"2020": "#f59e0b",
					"2021": "#ef4444",
					"2022": "#8b5cf6",
					"2023": "#ec4899",
				};

				const datasets = targetYears.map((year) => ({
					label: `Year ${year}`,
					data: dataByYear[year] || [],
					borderColor: colors[year as keyof typeof colors] || "#22d3ee",
					backgroundColor: (colors[year as keyof typeof colors] || "#22d3ee") + "33",
					fill: false,
					tension: 0.4,
					borderWidth: 1,
					pointRadius: 1,
				}));

				// สร้าง label x-axis เฉพาะ MM-DD ที่เจอบ่อยสุด
				const uniqueLabels = Array.from(new Set(data.map((d) => d.monthDay))).sort((a, b) => {
					const dateA = new Date(`2000-${a}`); // dummy year
					const dateB = new Date(`2000-${b}`);
					return dateA.getTime() - dateB.getTime();
				});

				setChartData({
					labels: uniqueLabels,
					datasets,
				});
			});
	}, [selectedYear]);

	const options = {
		responsive: true,
		scales: {
			x: {
				type: "category" as const,
				title: {
					display: true,
					text: "Date (MM-DD)",
				},
			},
			y: {
				title: {
					display: true,
					text: "Value (Meters)",
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				position: "top" as const,
			},
		},
	};

	const handleYearFilter = (range: string) => {
		setSelectedYear(range);
	};

	const availableYearRanges = ["2018-2023", "2018", "2019", "2020", "2021", "2022", "2023"];

	return (
		<section className="min-h-screen w-screen bg-[#171918] text-white snap-start flex flex-col items-center justify-center px-4 py-10 space-y-12">
			<iframe
				src="https://flo.uri.sh/visualisation/24453139/embed"
				title="Interactive or visual content"
				className="flourish-embed-iframe w-3/4 h-[600px]"
				sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
			></iframe>

			<div className="font-ibm text-center text-lg text-gray-200 px-4">
				<p>
					การกักเก็บน้ำของเขื่อนต่างๆ ส่งผลอย่างชัดเจนต่อ{" "}
					<span className="font-bold text-[#FFEB52]">‘ปริมาณน้ำ’</span> ที่ไหลมาตามแม่น้ำ
				</p>
				<p>
					และทำให้การเพิ่มหรือลดของระดับน้ำในบางฤดูกาล
					<span className="font-bold text-[#FFEB52]">‘ไม่สอดคล้อง’</span> กับธรรมชาติ เช่น
					ในช่วงฤดูแล้งก็อาจมีปริมาณน้ำมากได้ หรือในช่วงฤดูฝนก็อาจจะมีน้ำน้อยได้
				</p>
				<p>ทั้งยังส่งผลต่อการเปลี่ยนแปลงของทิศทางการไหลของแม่น้ำอีกด้วย</p>
			</div>
		</section>
	);
}
