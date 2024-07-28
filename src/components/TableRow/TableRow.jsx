import styles from "./TableRow.module.scss";

export default function TableRow({ data }) {
	return (
		<div className={styles.tableRow}>
			{data.map((field, index) => (
				<div key={index} className={styles.tableCell}>
					{field}
				</div>
			))}
		</div>
	);
}
