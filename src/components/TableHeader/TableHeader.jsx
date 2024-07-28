import styles from "./TableHeader.module.scss";

export default function TableHeader({ titles, extended = false }) {
	const classes = `${styles.tableHeader} ${extended ? styles.extended : ""}`;

	return (
		<div className={classes}>
			{titles.map((name, index) => (
				<div key={index}>{name}</div>
			))}
		</div>
	);
}
