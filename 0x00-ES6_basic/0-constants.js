export function taskfirst()
{
	const task = 'I prefer const when i can.';
	return task;
}

export function getLast()
{
	return 'is okay';
}

export function taskNext()
{
	let combination = 'But somtimes let';
	combination += getLast();

	return combination;
}
