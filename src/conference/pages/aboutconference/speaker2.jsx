import speakerDetails from "./speakerDetails.json";
import "./speakers.css";
const Speaker2 = () => {
  const { name, bio, title, image } = speakerDetails[0];
  return (
    <>
      <div className="speaker2-Details mt-10">
        <div className="speaker-name text-center font-bold text-2xl">
          <h1>{name}</h1>
        </div>
        <div className="speaker-title text-center font-bold">
          <h2>{title}</h2>
        </div>
        <div className="">
          <img
            src={image}
            alt="speaker2"
            className="speaker-image mx-auto shadow-lg"
          />
        </div>
        <div className="speaker-bio">
          <p className="text-center mx-40 font-bold opacity-70">{bio}</p>
        </div>
      </div>
    </>
  );
};
export default Speaker2;
