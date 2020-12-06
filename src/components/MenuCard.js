import MenuOrder from './MenuOrder';


function MenuCard(props) {
	const beersFromList = props.apiData[0];
	const beersFromTap = props.apiData[1].taps.map((beer) => beer.beer);
	const filteredBeers = beersFromList.filter((beers) => beersFromTap.includes(beers.name));


	return (
		filteredBeers.map(beer => {
			return (

				<div className="menu-card">
					<div className="menu-content">
						<img src={`/images/${beer.label}`} alt="Beer"></img>
						<h1>{beer.name}</h1>
						<p>{beer.description.overallImpression}</p>
					</div>
					<MenuOrder />
				</div>
			)
		})
	)
}

export default MenuCard;