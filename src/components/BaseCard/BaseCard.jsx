import styles from "./BaseCard.module.scss";

export default function BaseCard({ children, className }) {
	const classes = `${styles.BaseCard} ${className || ""}`;

	return <div className={classes}>{children}</div>;
}
