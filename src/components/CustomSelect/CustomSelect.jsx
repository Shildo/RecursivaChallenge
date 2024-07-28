import { useState, useRef, useEffect } from "react";
import BaseButton from "../BaseButton/BaseButton";
import styles from "./CustomSelect.module.scss";
import { arimo } from "../../../public/fonts/fonts";
import ArrowDownVector from "../../../public/vectors/ArrowDownVector";

export default function CustomSelect({ selected, onChange, options }) {
	const [isActive, setIsActive] = useState(false);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setIsActive(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className={styles.selectContainer} ref={dropdownRef}>
			<BaseButton
				className={`${styles.dropdownButton} ${arimo.className}`}
				onClick={() => {
					setIsActive(!isActive);
				}}
			>
				{options.find((option) => option.value === selected)?.label ||
					selected}
				<ArrowDownVector />
			</BaseButton>
			{isActive && (
				<div className={styles.dropdownContent}>
					{options.map((option) => (
						<div
							key={option.value}
							onClick={() => {
								onChange(option);
								setIsActive(false);
							}}
							className={`${styles.dropdownItem} ${arimo.className}`}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
