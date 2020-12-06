async function getData(urls) {
	try {
		const response = await Promise.all(
			urls.map((url) => fetch(url).then((response) => response.json()))
		);
		return response;
	} catch (error) {
		console.log('There was an error!', error);
	}

}
export default getData;