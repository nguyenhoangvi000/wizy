import React, { Component } from 'react';

import { Button } from 'reactstrap';

import './career.scss';
import arrowHeader from '../../assets/images/arrowHeader.svg';
import group from '../../assets/images/group.png';
import F from '../../assets/images/F.svg';
import C from '../../assets/images/C.svg';
import H from '../../assets/images/H.svg';
import W from '../../assets/images/W.svg';
import L from '../../assets/images/L.svg';


export default class Career extends Component {
  render() {
    return (
      <div className="container-career">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="career-title text-center">Jobs at Wizy</h1>
            </div>
            <div className="offset-md-2 col-md-8">
              <p className="career-description text-center">We are always seeking the new talents
              who can bring new perspectives and experiences to our team</p>
            </div>
            <div className="offset-md-3 col-md-6">
              <Button className="btn-job" outline color="primary">See Open Roles<img src={arrowHeader} alt="" /></Button>
            </div>
            <div className="col-md-12">
              <img src={group} alt="" />
              <h4 className="benefit-title text-center">The Benefits of Wizy Team Members</h4>
            </div>
            <div className="offset-md-2 col-md-4 benefit-block">
              <h6 className="benefit-block-title"><img src={F} alt="" />Flexible work hours</h6>
              <p className="benefit-description">We focus on quality from early stages of the
              project life cycle. We deliver "Zero-Defect" products that sparkle with quality.</p>
            </div>
            <div className="col-md-4 benefit-block">
              <h6 className="benefit-block-title"><img src={C} alt="" />Competitive vacation policy</h6>
              <p className="benefit-description">We focus on quality from early stages of the
              project life cycle. We deliver "Zero-Defect" products that sparkle with quality.</p>
            </div>
            <div className="offset-md-2 col-md-4 benefit-block">
              <h6 className="benefit-block-title"><img src={W} alt="" />Wellness and commuter benefits</h6>
              <p className="benefit-description">We focus on quality from early stages of the
              project life cycle. We deliver "Zero-Defect" products that sparkle with quality.</p>
            </div>
            <div className="col-md-4 benefit-block">
              <h6 className="benefit-block-title"><img src={H} alt="" />Health, dental, and vision
              benefits </h6>
              <p className="benefit-description">We focus on quality from early stages of the
              project life cycle. We deliver "Zero-Defect" products that sparkle with quality.</p>
            </div>
            <div className="offset-md-2 col-md-4 benefit-block">
              <h6 className="benefit-block-title"><img src={L} alt="" />Life insurance and
              disability benefits</h6>
              <p className="benefit-description">We focus on quality from early stages of the
              project life cycle. We deliver "Zero-Defect" products that sparkle with quality.</p>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="seeking-human">
            <div className="col-md-6">
              <p className="seeking-human-title text-center">We are here to make ourselves better. We care to each
             others, we try to create useful things and we deliver good projects together.</p>
              <p className="seeking-human-description text-center">You're seeking human. You want to have
            professional and skillful talents/staff for projects but don't want to waste too much
            time, money to conduct process of recruitment, training, </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="offset-md-3 col-md-6">
              <h4 className="role-title text-center">Open Roles</h4>
              <p className="role-description text-center">Discover the right role for you and please
             feel free to contact us. We hope we will have a comfortable talking with you. </p>
            </div>
            <div className="offset-md-3 col-md-6 job-block">
              <div className="row">
                <div className="col-md-9">
                  <div className="job-header">
                    <h6 className="job-title">Front - End Developer<span> ( 1 Open Slot )</span></h6>
                  </div>
                  <div className="job-content">
                    <p className="job-description">Location: Ho Chi Minh City  |  Full Time Employee</p>
                  </div>
                </div>
                <div className="col-md-3 job-detail">
                  <button type="button" className="btn btn-link button-job"><h6>View Details<img src={arrowHeader} alt="" /></h6></button>
                </div>
              </div>
            </div>
            <div className="offset-md-3 col-md-6 job-block">
              <div className="row">
                <div className="col-md-9">
                  <div className="job-header">
                    <h6 className="job-title">Front - End Developer<span> ( 1 Open Slot )</span></h6>
                  </div>
                  <div className="job-content">
                    <p className="job-description">Location: Ho Chi Minh City  |  Full Time Employee</p>
                  </div>
                </div>
                <div className="col-md-3 job-detail">
                  <button type="button" className="btn btn-link button-job"><h6>View Details<img src={arrowHeader} alt="" /></h6></button>
                </div>
              </div>
            </div>
            <div className="offset-md-3 col-md-6 job-block">
              <div className="row">
                <div className="col-md-9">
                  <div className="job-header">
                    <h6 className="job-title">Front - End Developer<span> ( 1 Open Slot )</span></h6>
                  </div>
                  <div className="job-content">
                    <p className="job-description">Location: Ho Chi Minh City  |  Full Time Employee</p>
                  </div>
                </div>
                <div className="col-md-3 job-detail">
                  <button type="button" className="btn btn-link button-job"><h6>View Details<img src={arrowHeader} alt="" /></h6></button>
                </div>
              </div>
            </div>
            <div className="offset-md-4 col-md-4 see-more-block">
              <p className="text-looking text-center">Don't see the position you're looking for?</p>
              <p className="text-center">Please <a className="tell-us">tell us if you want</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}