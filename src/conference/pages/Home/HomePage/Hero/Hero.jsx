import RegisterButton from "./registration";
import SocialMediaLinks from "./socialmedia";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//import {motion}from 'framer-motion'
const Hero = () => {
  return (
    <>
    <Helmet>
      <title>Welcome to the conference</title>
      <link rel="icon"type="image/png"href="../src/assets/logo.png"/>
    </Helmet>
      <div className="hero">
        <div className="hero-background">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="../src/assets/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero=content grid place-items-center">
          <h1 className="hero-title capitalize font-bold text-2xl"
          >
            join us for the ultimate conference experience
          </h1>
          <p className="hero-subtitle capitalize font-bold text-lg">
            learn from industry experts,network with peers, and get inspired by
            innovative ideas
          </p>
          <div className="hero-cta grow space-x-3">
            <RegisterButton />
            <button className="rounded-lg text-white bg-green-500 py-3 px-2">
              <Link to="/schedule" className="hero-cta-link">
                View Schedule
              </Link>
            </button>
          </div>
          <div className="hero-social-media">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
