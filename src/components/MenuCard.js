import MenuOrder from "./MenuOrder";

function MenuCard(props) {
  return props.filteredBeers.map((beer) => {
    return (
      <div className="menu-card">
        <div className="menu-content">
          <img src={`/images/${beer.label}`} alt="Beer"></img>
          <h1>{beer.name}</h1>
          <p>{beer.description.overallImpression}</p>
        </div>
        <MenuOrder name={beer.name} />
      </div>
    );
  });
}

export default MenuCard;
