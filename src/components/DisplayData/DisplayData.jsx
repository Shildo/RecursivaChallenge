import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import styles from "./DisplayData.module.scss";

export default function DisplayData({ selectedOption, data }) {
	const renderers = {
		totalPeople: () => (
			<div className={styles.table}>
				<TableHeader titles={["Cantidad total de hinchas"]} />
				<TableRow data={[data]} />
			</div>
		),
		averageRacingAge: () => (
			<div className={styles.table}>
				<TableHeader
					titles={["Edad promedio entre hinchas de Racing"]}
				/>
				<TableRow data={[data]} />
			</div>
		),
		fiveMostCommonNames: () => (
			<div className={styles.table}>
				<TableHeader titles={["Nombre", "Apariciones"]} />
				{data.map((name, index) => (
					<TableRow data={[name[0], name[1]]} key={index} />
				))}
			</div>
		),
		marriedWithUniversity: () => (
			<div className={styles.table}>
				<TableHeader
					titles={["Nombre", "Edad", "Equipo"]}
					extended={true}
				/>
				{data.map((person, index) => (
					<TableRow
						data={[person.name, person.age, person.team]}
						key={index}
					/>
				))}
			</div>
		),
		teamsArray: () => (
			<div className={styles.table}>
				<TableHeader
					titles={[
						"Equipo",
						"Edad promedio",
						"Edad más baja",
						"Edad más alta",
					]}
					extended={true}
				/>
				{data.map((team, index) => (
					<TableRow
						data={[
							team.team,
							team.averageAge,
							team.minAge,
							team.maxAge,
						]}
						key={index}
					/>
				))}
			</div>
		),
	};

	return renderers[selectedOption] ? renderers[selectedOption]() : null;
}
