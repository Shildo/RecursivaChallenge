"use client";

import CsvReader from "@/components/CsvReader/CsvReader";
import InfoCard from "@/components/InfoCard/InfoCard";
import styles from "./page.module.scss";
import { useState } from "react";
import { processCsvData } from "@/utils/csvUtils";

export default function Home() {
	const [data, setData] = useState(null);

	const handleFileLoaded = (csvData) => {
		const processedData = processCsvData(csvData);
		setData(processedData);
	};

	return (
		<main className={styles.main}>
			<CsvReader onFileLoaded={handleFileLoaded} />
			{data && <InfoCard data={data} />}
		</main>
	);
}
