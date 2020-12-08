function Form(props) {
  return (
    <article className="form-wrapper">
      <h1>I am a beautiful form</h1>
      <button onClick={() => props.setPage('orderPage')}> Go Back</button>
    </article>
  );
}

export default Form;
