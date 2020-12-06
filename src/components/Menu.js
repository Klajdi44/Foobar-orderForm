import MenuCard from './MenuCard';
import UnavailableBeers from './UnavailableBeers';
function Menu(props) {

  console.log(props.apiData);

  return (
    <article className="menu-wrapper">
      <div className="menu">
        <h1>Our Beer selection</h1>

        <MenuCard apiData={props.apiData} />
        <h1 className="unavailable-beer-heading" > Currently unavailable beers</h1>
        <UnavailableBeers apiData={props.apiData} />
      </div>

      <div className="order">
        <h1>Your Order</h1>
        <div className="order-flex">
          <div className="order-cards">
            <ul>
              <li>
                <h1>El Hefe</h1>
                <br />
                <div className="menu-order_order">
                  <h3>50DKK</h3>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </li>
            </ul>
          </div>
          <div className="order-price">
            <div className="overall-price">
              <h1>Total</h1>
              <span>50DKK</span>
              <br />
            </div>

            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Menu;
