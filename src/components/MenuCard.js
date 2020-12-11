import React, { useEffect } from 'react';
import gsap from 'gsap';
import MenuOrder from "./MenuOrder";

function MenuCard(props) {

  useEffect(() => {
    gsap.fromTo(".menu-card", { opacity: 0, x: 100 + "%" }, { opacity: 1, x: 0 + "%", stagger: 0.2, duration: 1 });
  }, []);


  return props.filteredBeers.map((beer) => {
    return (
      <div className="menu-card" key={beer.name}>
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
