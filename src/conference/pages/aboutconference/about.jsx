import { Link } from "react-router-dom";
//import {Helmet}from 'react-helmet';
import "./about.css";
const About = () => {
  return (
    <>
      <div className="about-conference">
        <div className="about-conference-header capitalize font-bold">
          <h1>about the conference</h1>
        </div>
        <div className="about-conference-content text-center">
          <p>
            The conference is a premier event that brings together industry
            experts, thought leadres, and professionals to share
            knowledge,insights and experiences.
          </p>
          <p>
            the conference features a diverse rande of topics, including keynote
            speeches,networking opportunities,panel discussions, and workshops.
          </p>
        </div>
        <div className="about-conference-speakers">
          <h2 className="text-center font-bold capitalize underline">
            meet our speakers
          </h2>
          <div className="speaker-cards">
            <div className="speaker-card">
              <img
                src="../src/assets/men clothes.jpg"
                alt="speaker 1"
                className="speaker-img"
              />
              <h3>speaker 1</h3>
              <p>
                <Link to="/Speaker1">Learn more</Link>
              </p>
            </div>
            <div className="speaker-card">
              <img
                src="../src/assets/men clothes.jpg"
                alt="speaker 2"
                className="speaker-img"
              />
              <h3>speaker 2</h3>
              <p>
                <Link to="/Speaker2">Learn more</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="about-conference-organizers">
          <h2 className="text-center font-bold underline">
            meet our organizers
          </h2>
          <div className="organizer-cards">
            <div className="organizer-card">
              <img
                src="../src/assets/men clothes.jpg"
                alt="organizer-1"
                className="organizer-image"
              />
              <h3>organizr 1</h3>
              <p>
                <Link to='/organizer1'>Learn more</Link>
              </p>
            </div>
            <div className="organizer-card">
              <img
                src="../src/assets/men clothes.jpg"
                alt="organizer 2"
                className="organizer-image"
              />
              <h3>organizer 2</h3>
              <p>
                <Link to='/organizer2'>Learn more</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
