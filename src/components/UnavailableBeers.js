
function UnavailableBeers(props) {
	const beersFromList = props.apiData[0];
	const beersFromTap = props.apiData[1].taps.map((beer) => beer.beer);
	const filteredBeers = beersFromList.filter((beers) => !beersFromTap.includes(beers.name));


	return (
		filteredBeers.map(beer => {
			return (

				<div className="menu-card menu-unavailable" key={beer.name}>
					<div className="menu-content">
						<img src={`/images/${beer.label}`} alt="Beer"></img>
						<h1>{beer.name}</h1>
						<p>{beer.description.overallImpression}</p>
					</div>
				</div>
			)
		})
	)
}

export default UnavailableBeers;