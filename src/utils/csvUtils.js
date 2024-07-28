export const processCsvData = (data) => {
	const totalPeople = data.length;
	const marriedWithUniversity = [];
	const riverFans = {};
	const teams = {};

	let totalAgeRacing = 0;
	let racingCount = 0;

	data.forEach((person) => {
		const name = person.name;
		const age = parseInt(person.age);
		const team = person.team;
		const status = person.status;
		const studies = person.studies;

		// 2. Suma las edades de los hinchas de Racing
		if (team === "Racing") {
			totalAgeRacing += age;
			racingCount++;
		}

		// 3. Busca de manera limitada las primeras 100 personas casadas con estudios universitarios
		if (
			marriedWithUniversity.length < 100 &&
			status === "Casado" &&
			studies === "Universitario"
		) {
			marriedWithUniversity.push({ name, age, team });
		}

		// 4. Cuento la cantidad de veces que aparece el nombre y lo almaceno en su campo del arreglo
		if (team === "River") {
			riverFans[name] = (riverFans[name] || 0) + 1;
		}

		// 5. Calculo por equipo los datos
		if (!teams[team]) {
			teams[team] = {
				totalFans: 0,
				ageSum: 0,
				minAge: Infinity,
				maxAge: -Infinity,
			};
		}
		teams[team].totalFans++;
		teams[team].ageSum += age;
		teams[team].minAge = Math.min(teams[team].minAge, age);
		teams[team].maxAge = Math.max(teams[team].maxAge, age);
	});

	// 2. Calcula el promedio de edades de los hinchas de Racing
	const averageRacingAge = parseInt(
		racingCount > 0 ? totalAgeRacing / racingCount : 0,
	);

	// 3. Ordeno las 100 primeras personas casadas con estudios por edad
	marriedWithUniversity.sort((a, b) => a.age - b.age);

	// 4. Encuentro los 5 nombres mas comunes entre hinchas de River
	const fiveMostCommonNames = Object.entries(riverFans)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 5);

	// 5. Ordeno los datos por equipo
	const teamsArray = Object.entries(teams)
		.map(([team, stats]) => ({
			team,
			averageAge: parseInt(stats.ageSum / stats.totalFans),
			minAge: stats.minAge,
			maxAge: stats.maxAge,
			totalFans: stats.totalFans,
		}))
		.sort((a, b) => b.totalFans - a.totalFans);

	// Retorno los valores para poder ser mostrados
	return {
		totalPeople,
		averageRacingAge,
		marriedWithUniversity,
		fiveMostCommonNames,
		teamsArray,
	};
};
