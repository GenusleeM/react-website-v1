import React from "react";
import "../App.css";
import { Link, Typography } from "@material-ui/core";
// import { Button } from "./Button";
import "./HeroSection.css";


function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      <h2>Rent To Own </h2>
      <p>
        Are you looking for a more manageable home? Get the FREE List of
        Affordable Rent To Own Homes in your area
      </p>
      <div className="hero-btns">
        {/* <Link href="fanset.net" target="_blank" className='btn-mobile'>
        <Button
        
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED <i className="far fa-play-circle" />
        </Button>
        </Link> */}

        <Link color="inherit" href="https://afflat3d2.com/trk/lnk/E1383734-63DF-4D36-AA4D-A6679454370C/?o=9520&c=918277&a=597982&k=7B1DBE46FFDA7DBFEB38B8BF6E91EE6B&l=9052" target="_blank">
          <button className="mybutton">
          GET STARTED <i className="far fa-play-circle" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
