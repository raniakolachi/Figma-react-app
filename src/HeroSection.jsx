import React from "react";
import img01 from "./imges/01.png";
import lineImg from "./imges/Line.png";
import boy from "./imges/boy.jpeg";
import Img02 from "./imges/02 (2).png";

const HeroSection = () => {
  return (
    <div className="bg-black">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-5 col-xs-12 text-white">
            <img className="img-fluid" src={lineImg}></img>
            <span className="text-warning ms-3">GEt Started</span>
            <h1 className="mt-4 mb-2">What level of hiker are you?</h1>
            <p>
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <img className="img-fluid" src={lineImg}></img>
            <span className="text-warning ms-3">Read more</span>
          </div>
          <div className="col-lg-2 col-xs-12 container"></div>
          <div className="col-lg-4">
            <img className="w-100 h-100 container img-fluid" src={img01} alt="boy" />
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <img className="w-100 h-100 img-fluid" src={boy} alt="boy" />
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5 col-xs-12 text-white">
            <img className="img-fluid" src={lineImg}></img>
            <span className="text-warning ms-3">Hiking Essentials</span>
            <h1 className="mt-4 mb-2">Picking the right Hiking Gear!</h1>
            <p>
              The nice thing about beginning hiking is that you don’t really
              need any special gear, you can probably get away with things you
              already have. Let’s start with clothing. A typical mistake hiking
              beginners make is wearing jeans and regular clothes, which will
              get heavy and chafe wif they get sweaty or wet.
            </p>
            <img className="img-fluid" src={lineImg}></img>
            <span className="text-warning ms-3">Read more</span>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-5 col-xs-12 text-white">
            <img className="img-fluid" src={lineImg}></img>
            <span className="text-warning ms-3">where you go is the key</span>
            <h1 className="mt-4 mb-2">Understand Your Map & Timing</h1>
            <p>
              To start, print out the hiking guide and map. If it’s raining,
              throw them in a Zip-Lock bag. Read over the guide, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I’ll read the guide and
              know that say, in a mile, I make a right turn at the junction..
            </p>
            <img className="img-fluid" src={lineImg}></img>
            <span className="text-warning ms-3">Read more</span>
          </div>
          <div className="col-lg-2 container"></div>
          <div className="col-lg-4 col-xs-12">
            <img className="w-100 h-100 container img-fluid" src={Img02} alt="boy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
