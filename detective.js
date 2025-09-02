function mysteryOperation() {
	const outcome = Math.random(); // 0 <= n < 1

	if (outcome < 0.5) {
		console.log("The operation is completed successfully!");
	}
	else {
		throw new Error("The operation is failed mysteriously!");
	}
}

// running 20 missions and tally vacation days
function runMissions(total = 20) {
	let vacationDays = 0;

	for (let i = 0; i < total; i++) {
		try {
			// success path - may throw
			mysteryOperation();
			vacationDays += 13;        // success award
		} catch (err) {
			// failure path
			vacationDays += 1;         // motivation day
		} finally {
			// always runs
			vacationDays += 3;         // attendance days
		}
	}

	console.log(`Vacation days earned: ${vacationDays}`);
}

runMissions(20);
