import "./accomodation.css";
const Accomodation = () => {
  return (
    <>
      <div className="accomodation">
        <h1 className="text-center font-bold text-xl">Accomodation options</h1>
        <div className="accomodation-options">
          <div className="accomodation-option">
            <h2 className="text-lg">Hotel 1</h2>
            <p>Hotel 1 is a 4-star hotel located in the heart of the city</p>
            <p>Room rate:$150 per night</p>
            <p>Distance to conference venue:0.5 miles</p>
            <button>Book Now</button>
          </div>
          <div className="accomodation-option">
            <h2 className="text-lg">Hotel 2</h2>
            <p>Hotel 2 is a 3-star hotel located near the conference venue.</p>
            <p>Room rate:$120 per night</p>
            <p>Distance to conference venue:0.2 miles</p>
            <button>Book Now</button>
          </div>
          <div className="accomodation-option">
            <h2 className="text-lg">Hotel 1</h2>
            <p>Hotel 3 is a 5-star hotel located in the city center</p>
            <p>Room rate:$200 per night</p>
            <p>Distance to conference venue:1 miles</p>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Accomodation;
