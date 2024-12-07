const Props = (props) => {
  return (
    <>
      {/*<h1>i am a new {props.brand}</h1>*/}
      <h3>{props.brand.name}</h3>
      <h3>{props.brand.model}</h3>
    </>
  );
};
export default Props;
