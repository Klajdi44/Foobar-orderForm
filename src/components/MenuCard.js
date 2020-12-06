
function MenuCard(props) {

	const beersFromList = props.apiData[0];
	const beersFromTap = props.apiData[1].taps.map((beer) => beer.beer);

	const filteredBeers = beersFromList.filter((beers) =>
		beersFromTap.includes(beers.name)
	);

	return (
		filteredBeers.map(beer => {
			return (
				<div className="menu-card">
					<div className="menu-content">
						<img src="https://www.bottleyourbrand.com/media/dol/design/1/14886272141133341347158559.png" alt="Beer"></img>
						<h1>{beer.name}</h1>
						<p>{beer.description.overallImpression}</p>
					</div>
					<div className="menu-order">
						<h3>50DKK</h3>
						<button>-</button>
						<span>1</span>
						<button>+</button>
					</div>
				</div>
			)
		})
	)
}

export default MenuCard;