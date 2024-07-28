import { useState } from "react";
import BaseCard from "../BaseCard/BaseCard";
import styles from "./InfoCard.module.scss";
import BaseButton from "../BaseButton/BaseButton";
import DisplayData from "../DisplayData/DisplayData";
import CustomSelect from "../CustomSelect/CustomSelect";

export default function InfoCard({ data }) {
	const [selectedOption, setSelectedOption] = useState("totalPeople");
	const [currentPage, setCurrentPage] = useState(1);

	const options = [
		{ value: "totalPeople", label: "Total de personas" },
		{ value: "averageRacingAge", label: "Edad promedio de Racing" },
		{
			value: "marriedWithUniversity",
			label: "Casados con estudios universitarios",
		},
		{ value: "fiveMostCommonNames", label: "Nombres mas comunes de River" },
		{ value: "teamsArray", label: "Equipos" },
	];

	const handleOptionChange = (event) => {
		setSelectedOption(event.value);
		setCurrentPage(1);
	};

	const itemsPerPage = 8;

	const paginatedData = Array.isArray(data[selectedOption])
		? data[selectedOption].slice(
				(currentPage - 1) * itemsPerPage,
				currentPage * itemsPerPage,
			)
		: [data[selectedOption]];

	const totalPages = Array.isArray(data[selectedOption])
		? Math.ceil(data[selectedOption].length / itemsPerPage)
		: 1;

	const handlePageChange = (direction) => {
		if (direction === "prev" && currentPage > 1) {
			setCurrentPage(currentPage - 1);
		} else if (direction === "next" && currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<BaseCard className={styles.baseContainer}>
			<div className={styles.header}>
				<CustomSelect
					options={options}
					selected={selectedOption}
					onChange={handleOptionChange}
				/>
			</div>

			<div className={styles.list}>
				<DisplayData
					selectedOption={selectedOption}
					data={paginatedData}
				/>
			</div>

			<div className={styles.pagination}>
				<BaseButton
					className={styles.paginationButton}
					onClick={() => handlePageChange("prev")}
					disabled={currentPage === 1}
				>
					Previous
				</BaseButton>
				<span>
					Page {currentPage} of {totalPages}
				</span>
				<BaseButton
					className={styles.paginationButton}
					onClick={() => handlePageChange("next")}
					disabled={currentPage === totalPages}
				>
					Next
				</BaseButton>
			</div>
		</BaseCard>
	);
}
