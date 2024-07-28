export default function ArrowRightVector({
	circleColor = "currentColor",
	arrowColor = "currentColor",
	...props
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={36}
			height={36}
			viewBox="0 0 20 20"
			fill="none"
			{...props}
		>
			<circle cx={10} cy={10} r={10} fill={circleColor} />
			<path
				d="M8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"
				fill={arrowColor}
			/>
		</svg>
	);
}
