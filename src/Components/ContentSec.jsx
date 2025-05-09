import React from "react";
import toyOne from '../assets/toy1.jpg'
import toytwo from '../assets/toy2.jpeg'
import titleImg from '../assets/title-img.jpeg'
import toysNew from '../assets/2x-toys.gif'


function ContentSec() {
  return <section className="content-section py-4">
    <div class="container">
        <div class="col-lg-12">
            <div class="title">
            <h2 className="theme-title text-center py-3">
            WHAT'S IN A BARKBOX?
            </h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="toy-card">
                    <div class="toy-img shadow-sm">
                        <img className="obj_fit" src={toyOne} alt="" />
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="toy-card">
                    <div class="toy-img shadow-sm">
                        <img className="obj_fit" src={toytwo} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="get-button my-5">
            <button className="theme_btn mx-auto">
            Get Barkbox
            </button>
        </div>



        <div class="row">
            <div class="col-lg-6">
                <div class="toy-card">
                    <div class="toy-img">
                        <img className="obj_fit" src={titleImg} alt="" />
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="toy-card">
                    <div class="toy-img ">
                        <img className="obj_fit" src={toysNew} alt="" />
                    </div>
                </div>
            </div>
        </div>

        
        <div className="get-button my-5">
            <button className="theme_btn mx-auto">
              Claim Offer
            </button>
        </div>
    </div>
  </section>;
}

export default ContentSec;
