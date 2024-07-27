import styles from "./BaseButton.module.scss";

export default function BaseButton({ className, label }) {
	const classes = `${styles.BaseButton} ${className || ""}`;

	return <button className={classes}>{label}</button>;
}
