import styles from "./BaseButton.module.scss";

export default function BaseButton({
	className,
	children,
	onClick,
	disabled = false,
}) {
	const classes = `${styles.BaseButton} ${className || ""} ${disabled ? styles.disabled : styles.enabled}`;

	return (
		<button className={classes} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}
