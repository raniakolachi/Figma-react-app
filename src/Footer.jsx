
import React from 'react'

const Footer = () => {
    return (
      
        <>
        <div className='bg-black p-5'>
        <div class="container ">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32">
  <use href="#bootstrap" />
</svg>

      </a>
      <h1 class="text-white"> MNTN</h1>
      <p class="text-white">Get out there & discover your next slope, mountain & destination!</p>
      <span className='mt-5 pt-5 text-white fs-6'>Copyright 2023 MNTN, Inc. Terms & Privacy</span>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5 className='text-warning'>More on The Blog</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About MNTN</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Contributors & Writers</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Write For Us</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Contact Us</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Privacy Policy</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5  className='text-warning'>More on MNTN</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">The Team</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Jobs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Press</a></li>
      </ul>
    </div>

   
  </footer>
</div>
</div>

 </>
        
    )
}

export default Footer;