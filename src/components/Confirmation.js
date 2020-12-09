function Confirmation(props) {
  return (
    <section className="confirmation-wrapper">
      <h1>{props.confirmationP}</h1>
      <h2>hello</h2>
      <button onClick={() => props.setPage('orderPage')}>Order again</button>
    </section>
  );
}

export default Confirmation;
