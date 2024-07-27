"use client";

import BaseCard from "../BaseCard/BaseCard";
import BaseButton from "../BaseButton/BaseButton";
import styles from "./FileUploader.module.scss";
import AddVector from "../../../public/vectors/AddVector";

export default function FileUploader() {
	const handleFileChange = (event) => {
		console.log(event);
	};

	return (
		<BaseCard className={styles.baseContainer}>
			<div className={styles.header}>
				<AddVector className={styles.vector} />
				<div className={styles.textContainer}>
					<h2> Adjuntar Archivo</h2>
					<button>O selecciona una carpeta</button>
				</div>
			</div>

			<BaseButton className={styles.button} label={"Enviar"} />
		</BaseCard>
	);
}
