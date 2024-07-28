import BaseCard from "../BaseCard/BaseCard";
import BaseButton from "../BaseButton/BaseButton";
import styles from "./CsvReader.module.scss";
import AddVector from "../../../public/vectors/AddVector";
import { arimo } from "../../../public/fonts/fonts";
import { useRef, useState } from "react";
import Papa from "papaparse";

export default function CsvReader({ onFileLoaded }) {
	const [selectedFile, setSelectedFile] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const fileInputRef = useRef(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const fileName = file.name;
			const fileExtension = fileName.split(".").pop().toLowerCase();
			if (fileExtension !== "csv") {
				setError("Invalid file format. Please upload a CSV file.");
				setSelectedFile(null);
			} else {
				setError(null);
				setSelectedFile(file);
			}
		}
	};

	const handleButtonClick = () => {
		fileInputRef.current.click();
	};

	const handleSubmit = () => {
		if (selectedFile) {
			setLoading(true);
			Papa.parse(selectedFile, {
				skipEmptyLines: true,
				encoding: "windows-1252",
				complete: (results) => {
					const headers = [
						"name",
						"age",
						"team",
						"status",
						"studies",
					];
					const jsonData = results.data.map((row) => {
						const obj = {};
						headers.forEach((header, index) => {
							obj[header] = row[index] || "";
						});
						return obj;
					});
					onFileLoaded(jsonData);
					setLoading(false);
				},
			});
		}
	};

	return (
		<BaseCard className={styles.baseContainer}>
			<input
				type="file"
				accept=".csv"
				ref={fileInputRef}
				className={styles.hidden}
				onChange={handleFileChange}
			/>
			<div className={styles.header}>
				<AddVector
					className={styles.addVector}
					onClick={handleButtonClick}
				/>
				<div className={styles.textContainer}>
					<h2 className={arimo.className}> Adjuntar Archivo</h2>
					<span
						onClick={handleButtonClick}
						className={arimo.className}
					>
						Seleccione un archivo CSV
					</span>
				</div>
			</div>

			{selectedFile && (
				<span className={arimo.className}>{selectedFile.name}</span>
			)}

			{error && (
				<div className={`${styles.error} ${arimo.className}`}>
					{error}
				</div>
			)}

			<BaseButton
				className={`${styles.button} ${arimo.className}`}
				onClick={handleSubmit}
				disabled={loading || error}
			>
				{loading ? "Loading..." : "Enviar"}
			</BaseButton>
		</BaseCard>
	);
}
