function Events() {
  const myShoot = "goal....";
  const shoot = (myShoot) => {
    alert(myShoot);
  };
  return (
    <>
      <button onClick={() => shoot(myShoot)}>Shoot</button>
    </>
  );
}
export default Events;
