import React from "react";
import "./header.css";
import lineImg from "./imges/Line.png";
import { Icon } from '@iconify/react';
const Header = () => {
  return (
    <>
     

<nav class="navbar navbar-expand-lg bg text-white  rounded position-fixed w-100 " aria-label="Thirteenth navbar example">
      <div class="container-fluid ">
      <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <a class="navbar-brand col-lg-3 me-0 text-white" href="#">NMTN</a>
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            <li class="nav-item">
              <a class="nav-link active  text-white" aria-current="page" href="#">Equipment</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active  text-white" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active  text-white ">Blog</a>
            </li>
           
          </ul>
          <div class="d-lg-flex col-lg-3 justify-content-lg-end">
            <h4>Account</h4>
          </div>
        </div>
      </div>
    </nav>

      <div className="hero-img content ">
        <div className="mt-5 pt-5">
        <img className="w-10" src={lineImg}></img>
        <span className="text-warning fs-2 ms-3 ">A Hiking guide</span>
        <h1 className=" text-white fs-1">
          Be prepared for the<br></br> Mountains and beyond!
        </h1>
        <span className="text-white mt-5">Scroll Down</span>
        <Icon className="text-white ms-3 fs-5" icon="f7:arrow-down" />
        </div>
      </div>
    
    </>
  );
};

export default Header;
