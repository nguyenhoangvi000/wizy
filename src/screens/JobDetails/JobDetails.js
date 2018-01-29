import React, { Component } from 'react';

import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './jobDetails.scss';

export default class JobDetails extends Component {
  render() {
    return (
      <div className="job-details-container">
        <div className="container">
          <div className="row">
            <div className="mx-auto col-md-8">
              <h1 className="text-center job-detail-title">Front - End Developer</h1>
              <h6 className="heading-job-detail">Job Description</h6>
              <ul>
                <li>Take part in developing company softwares with VB.NET, C#, ASP.NET, MVC, CSS, HTML5 and SQL Server</li>
                <li>Design and develop new features according to detailed specifications</li>
                <li>Other relevant tasks as assigned by Line Manager</li>
                <li>Details to be discussed in the interview</li>
              </ul>
              <h6 className="heading-job-detail">Skills and Experience</h6>
              <ul>
                <li>Graduated from University, College with majors in IT</li>
                <li>Ages from 22 ~ 30 years old</li>
                <li>Good commands of English; Japanese language is an advantage</li>
                <li>Required skills: At least 1 year of programming in MS.NET and SQL Server (Destop and Web Application)</li>
                <li>Preferred skills: Have experiences in developing applications with:
                  <ul>
                    <li>Big database</li>
                    <li>Smart devices (Android, Windows Phone, iOS, Win CE, Card Telecom,...)</li>
                    <li>Technologies such as BI, Cloud, AI, AR, 3D Unity, IoT...</li>
                  </ul>
                  <li>Be able work effectively both in team and as an individual</li>
                  <li>Be eager to learn and face challenges in any new tasks</li>
                </li>
              </ul>
              <h6 className="heading-job-detail">Benefits </h6>
              <ul>
                <li>Two - month probation with 100% salary and be entitled to contribute insurances from probation</li>
                <li>Company BUS pick up from Hanoi to the company, etc.</li>
                <li>Stable, international, professional and friendly working environment</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row apply-job">
          <div className="col-md-7 mx-auto text-center">
            <h4 className="text-center">Apply This Work</h4>
            <p className="text-center">We are sincerely happy about your decided. Please fill out the form and attach your
            CV ( or link to CV). We will reply to you when we recieved your information.</p>
            <div class="form-group row">
              <label for="example-text-input" class="col-md-3 col-form-label">Your Full Name</label>
              <div class="col-md-7">
                <input class="form-control" type="text" id="example-text-input" />
              </div>
            </div>
            <div class="form-group row">
              <label for="example-text-input" class="col-md-3 col-form-label">Your Email</label>
              <div class="col-md-7">
                <input class="form-control" type="text" id="example-text-input" />
              </div>
            </div>
            <div class="form-group row">
              <label for="example-text-input" class="col-md-3 col-form-label">Your Phone Number</label>
              <div class="col-md-7">
                <input class="form-control" type="text" id="example-text-input" />
              </div>
            </div>
            <div class="form-group row">
              <label for="example-text-input" class="col-md-3 col-form-label">Link to Your CV</label>
              <div class="col-md-7">
                <input class="form-control" type="text" id="example-text-input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}