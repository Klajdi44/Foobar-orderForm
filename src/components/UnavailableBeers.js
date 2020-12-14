
function UnavailableBeers(props) {
	return (
		props.unavailableBeers.map(beer => {
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