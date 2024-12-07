const Rendering = (props) => {
  const Goal = () => {
    return <h1>isGoalll...</h1>;
  };
  const Missed = () => {
    return <h1>Missed</h1>;
  };
  const Me = props.isGoal;
  if (Me) {
    return <Goal />;
  } else {
    <Missed />;
  }
};
export default Rendering;
