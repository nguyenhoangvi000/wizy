import React, { Component } from 'react';


import Mockup from '../../assets/images/Mockup.png';
import TVH from '../../assets/images/pic1.png';
import HFA from '../../assets/images/pic2.png';
import SSE from '../../assets/images/pic3.png';
import arrow from '../../assets/images/arrowCardRight.svg';
import arrowTalk from '../../assets/images/arrowTalk.svg';
import backgroundQuote from '../../assets/images/backgroundQuote.png';


import './homePage.scss';



export default class HomePage extends Component {
  render() {
    return (
      <div className="container-home-page">
        <div className="container">
          <div className="row">
            <div className="col-md-11 mx-auto">
              <h1 className="slogan-wizy text-center">Wizy helps develop digital business more efficiently, powered by Vietnamese digital top talents.</h1>
              <p className="description text-center">We focus on Web Development, App Development and UI Design with highly proficient.</p>
            </div>
            <div className="col-md-12">
              <img className="img-responsive" src={Mockup} alt="" />
            </div>
            <div className="col-md-12">
              <h6 className="slogan-wizy text-center">OUR PROJECT</h6>
              <p className="description text-center">We focus on quality from early stages of the project life cycle. We deliver "Zero-Defect" products that sparkle with quality.</p>
            </div>
            <div className="col-md-5 mx-auto">
              <img className="img-responsive" src={TVH} alt="" />
              <h6 className="project-title text-left">Travel Hub</h6>
              <p className="project-description text-left">Mobile App Development, UI Design, Wizy Innovation</p>
              <img className="img-responsive" src={SSE} alt="" />
              <h6 className="project-title text-left">Security Selfie</h6>
              <p className="project-description text-left">Website Development, UI Design</p>
            </div>
            <div className="col-md-5 v-align-image">
              <div className="hand-for-affrica">
                <img className="img-responsive" src={HFA} alt="" />
                <h6 className="project-title text-left">Hand for Africa</h6>
                <p className="project-description text-left">Website Development, UI Re-Design </p>
              </div>
            </div>
            <div className="col-md-12">
              <h6 className="slogan-wizy text-center">OUR SERVICES</h6>
            </div>
            <div className="col-md-10 mx-auto">
              <p className="description text-center">You're seeking human. You want to have professional and skillful talents/staff for projects but don't want to waste too much time, money to conduct process of recruitment, training, termination. Let Wizy support and corporate with you.</p>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="card-services card-services-first">
                <h6 className="card-title text-left">Website Design & Development</h6>
                <div className="card-content">
                  <p className="text-left">We are highly proficient with Full JavaScript Stack (ReactJS, AngularJS, NodeJS, HTML5, CSS3, SCSS), which makes us the ideal candidate for your web application development projects.</p>
                </div>
                <div className="card-icon">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="card-services card-services-second">
                <h6 className="card-title text-left">Mobile App Design  & Development</h6>
                <div className="card-content">
                  <p className="text-left">Write once run anywhere: We build world class cross-platform (e.g. Android, iOS) apps using React Native, as well as mobile sites using Angular & Ionic Cordova.</p>
                </div>
                <div className="card-icon">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="card-services card-services-third">
                <h6 className="card-title text-left">Dedicated Team</h6>
                <div className="card-content">
                  <p className=" text-left">Our inhouse engineers can be engaged on short / long contractual periods to support on more traditional project development or to cover when our clients face demand peaks with unusually high work loads.</p>
                </div>
                <div className="card-icon">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="card-services card-services-fourth">
                <h6 className="card-title text-left">UI / UX Design</h6>
                <div className="card-content">
                  <p className=" text-left">Our talented designers can read your mind. We offer state-of-the-art UI/UX experience with highly usability. </p>
                </div>
                <div className="card-icon">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="quote-container ">
            <div className="quote">
              <img className="background-quote" src={backgroundQuote} alt="" />
              <div className="quote-content">
                <h6 className="quote-title text-center">OUR CUSTOMER SATISFIED WITH OUR WORK</h6>
                <div className="col-md-6 mx-auto">
                  <div className="quote-content-details">
                    <p className="primary-italic-font text-center">Thank you for creating a cake which perfectly complimented our scheme… It made our day extra special and everyone commented on the great flavour and texture of all the cakes</p>
                  </div>
                </div>
                <div className="quote-author">
                  <p className=" text-center">Gareth & Lisa Cowley</p>
                </div>
                <div className="quote-company">
                  <p className=" text-center">Oakham</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="contact-content">
            <h6 className="contact-title text-center">WE HOPE YOU ARE THE NEXT</h6>
            <h6 className="contact-description primary-light-font text-center">If you have any idea which want to discuss. Please feel free to contact us.</h6>
            <button type="button" className="btn btn-link btn-talk">Let's Talk<span><img src={arrowTalk} alt="" /></span></button>
          </div>
        </div>
      </div>
    )
  }
}