function Menu(props) {
  return (
    <article className="menu-wrapper">
      <div className="menu">
        <h1>Our Beer selection</h1>

        <div className="menu-card">
          <div className="menu-content">
            <img src="https://www.bottleyourbrand.com/media/dol/design/1/14886272141133341347158559.png" alt="Beer"></img>
            <h1>El Hefe</h1>
            <p>Refreshing wheat or rye beers that can display more hop character and less yeast character than their German cousins."</p>
          </div>
          <div className="menu-order">
            <h3>50DKK</h3>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
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
