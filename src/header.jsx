import React from 'react';
import homeimge1 from "../src/images/home.png";
import boy from "../src/images/boyimg.png";
import WatchImg1 from "../src/images/WatchImg.png";
import One from "../src/images/one.png";
import Two from "../src/images/Two.png";
import Three from "../src/images/three.png";
import { Icon } from '@iconify/react';

const Header = () => {
    return (
    <>
      <div className='imgbg mb-5'>
      <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand" href="#">MNTN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Equipment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mountain</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
      </ul>
    </div>
    <a class="nav-link d-flex align-items-center  " href="#">
    <i class="bi bi-person text-black"></i> Account
    </a>
  </div>
</nav>

        <div className='container justify-content-center d-flex pt-5 mt-5'>
          <div className='mt-5 justify-content-center pt-4'>
            <span className='fs-6 fw-semibold text-warning'>A Hiking Guide</span>
            <h1 className='fs-1 text-white fw-bolder mt-3'>
              Be Prepared For The <br /> Mountains And Beyond!
            </h1>
            <span className=' fw-bolder fs-6 text-white'>
              <Icon className='fs-4' icon='flowbite:arrow-down-outline' />   Scroll down
            </span>
          </div>
        </div>
        <div className='back-img'>
        </div>
      </div>
      
      <div className='bg-black py-4'>
        <div className="container">
        
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 position-relative d-flex flex-column justify-content-center align-items-start">
              <img src={One} className="img-fluid img-fix position-relative w-25" alt="" />
              <div className="position-relative text-fix ms-5 d-flex flex-column justify-content-center align-items-start">
                <span className="text-uppercase fw-bolder text-warning">GET STARTED</span>
                <h1 className="mt-2 text-white">
                  What level of hiker <br /> are you?
                </h1>
                <p className="fs-6 text-white">
                  Determining what level of hiker you are can be an important tool
                  when planning future hikes. This hiking level guide will help you
                  plan hikes according to different hike ratings set by various
                  websites like All Trails and Modern Hiker. What type of hiker are
                  you - novice, moderate, advanced moderate, expert, or expert
                  backpacker?
                </p>
                <button className="btn text-warning">
                  read more
                  <span className="ms-2">
                    <Icon className="text-warning" icon="mdi:arrow-right" />
                  </span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-end">
              <img className="img-fluid" src={homeimge1} alt="Home" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-3">
              <img className="img-fluid" src={boy} alt="Boy" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-start">
              <img src={Two} className="img-fluid img-fix position-relative w-25" alt="" />
              <div className="position-relative text-fix ms-5 d-flex text-fix flex-column justify-content-center align-items-start">
                <span className="text-uppercase fw-bolder text-warning">Hiking Essential</span>
                <h1 className="fs-2 mt-3 text-white">
                  Picking the right Hiking Gear!
                </h1>
                <p className="fs-6 text-white">
                  The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                  Let’s start with clothing. A typical mistake hiking beginners make is wearing  jeans and regular clothes, which will get  heavy and chafe wif they get sweaty or wet.
                </p>
                <button className="btn text-warning">
                  read more
                  <span className="ms-2">
                    <Icon className="text-warning" icon="mdi:arrow-right" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 my-3 position-relative d-flex flex-column justify-content-center align-items-start">
              <img src={Three} className="img-fluid w-25 img-fix position-relative" alt="" />
              <div className='position-relative text-fix ms-5 d-flex flex-column justify-content-center align-items-start'>
                <span className="text-uppercase fw-bolder text-warning">When you go is the Key</span>
                <h1 className="fs-2 mt-3 text-white">
                  Understand Your Map & Timing
                </h1>
                <p className="fs-6 text-white">
                  To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea  of what to expect. I like to know what my next landmark is as I hike. For  example, I’ll read the guide and know that say, in a mile, I make a right turn  at the junction..
                </p>
                <button className="btn text-warning">
                  read more
                  <span className="ms-2">
                    <Icon className="text-warning" icon="mdi:arrow-right" />
                  </span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-end">
              <img className="img-fluid" src={WatchImg1} alt="Watch" />
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-dark text-white py-5">
  <div class="container">
    <div class="row">
      
      <div class="col-md-6 mb-4">
        <h5 class="fw-bold">MNTN</h5>
        <p>Get out there & discover your next <br /> slope, mountain & destination!</p>
        <p class="text-muted">&copy; 2023 MNTN, Inc. <a href="#" class="text-decoration-none text-muted">Terms & Privacy</a></p>
        <div class="mt-5">
        Copyright 2023 MNTN, Inc. Terms & Privacy
        </div>
      </div>

      <div class="col-md-3 mb-4">
        <h5 class="text-warning fw-bold">More on The Blog</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white text-decoration-none">About MNTN</a></li>
          <li><a href="#" class="text-white text-decoration-none">Contributors & Writers</a></li>
          <li><a href="#" class="text-white text-decoration-none">Write For Us</a></li>
          <li><a href="#" class="text-white text-decoration-none">Contact Us</a></li>
          <li><a href="#" class="text-white text-decoration-none">Privacy Policy</a></li>
        </ul>
      </div>

     
      <div class="col-md-3 mb-4">
        <h5 class="text-warning fw-bold">More on MNTN</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white text-decoration-none">The Team</a></li>
          <li><a href="#" class="text-white text-decoration-none">Jobs</a></li>
          <li><a href="#" class="text-white text-decoration-none">Press</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </>
    );
};
export default Header;