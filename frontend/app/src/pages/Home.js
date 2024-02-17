import React from 'react';
import { Link } from 'react-router-dom';

// Import the react JS packages
import {useEffect, useState} from "react";

// Define the Login function.
export default function Home () {
    return (
      <>
        {/*
        <div >
          <img id="home-image" src={homeImage} alt="City of Sudbury" />
        </div>
        */}
        <div id="about" className="container-fluid preview-component d-flex justify-content-between pt-5">
          <div className="col"></div>
          <div className="col-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="py-3">About CHANO</h2>
            <hr />
            <Link to="/about" className="btn mt-5 btn-warning text-light">Learn more</Link>
          </div>
          <div className="col"></div>
        </div>
        <div id="events" className="container-fluid preview-component d-flex justify-content-between">
          <div className="col"></div>
          <div className="col-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="py-3">CHANO Events</h2>
            <hr />
            <Link to="/events" className="btn mt-5 btn-dark text-light">See more</Link>
          </div>
          <div className="col"></div>
        </div>
        <div id="clubs" className="container-fluid preview-component d-flex justify-content-between">
          <div className="col"></div>
          <div className="col-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="py-3">Clubs</h2>
            <hr />
            <Link to="/clubs" className="btn btn-primary text-light">More clubs</Link>
          </div>
          <div className="col"></div>
        </div>
      </>
    );
}
