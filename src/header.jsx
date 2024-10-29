import React from "react";
import "./header.css";
import lineImg from "./imges/Line.png";
import { Icon } from '@iconify/react';
const Header = () => {
  return (
    <>
      {/* <div className="container d-none d-lg-block d-xs-none d-md-block">
        <div className="row ">
          <div className=" col-lg-4">NMTN</div>
          <div className=" col-lg-6">
            <ul className="list-unstyled d-flex ">
              <li className="mx-3">Equipment</li>
              <li>About us</li>
              <li className="mx-3">Blog</li>
            </ul>
          </div>
          <div className=" col-lg-2">Account</div>
        </div>
      </div> */}

<nav class="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <a class="navbar-brand col-lg-3 me-0" href="#">NMTN</a>
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Equipment</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active ">Blog</a>
            </li>
           
          </ul>
          <div class="d-lg-flex col-lg-3 justify-content-lg-end">
            <h4>Account</h4>
          </div>
        </div>
      </div>
    </nav>

      <div className="hero-img content">
        <img className="w-10" src={lineImg}></img>
        <span className="text-warning fs-2 ms-3">A Hiking guide</span>
        <h1 className=" text-white fs-1">
          Be prepared for the<br></br> Mountains and beyond!
        </h1>
        <span className="text-white mt-5">Scroll Down</span>
        <Icon className="text-white ms-3 fs-5" icon="f7:arrow-down" />
      </div>
    
    </>
  );
};

export default Header;
