const transformDateToArray = (dateString: string) => {
	const date = new Date(dateString);
	const options = { day: 'numeric', month: 'long', year: 'numeric' };

	const formattedDate = date.toLocaleDateString('en-GB', options as object);

	const dateArray = formattedDate.split(' ');

	return dateArray;
};

export default transformDateToArray;
