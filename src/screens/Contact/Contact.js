import React, { Component } from 'react';

import { Input, InputGroup } from 'reactstrap';

import arrow from '../../assets/images/arrowCardRight.svg';
import arrowHeader from '../../assets/images/arrowHeader.svg';

import './contact.scss';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Let's talk</h1>
              <p className="description-contact">We are very excited if we have an opportunity to colaborate with you. Please fill out the form to let us knowing your needs. </p>
              <InputGroup>
                <Input className="input-contact" placeholder="Your Full Name" />
              </InputGroup>
              <br />
              <InputGroup>
                <Input className="input-contact" placeholder="Your Email" />
              </InputGroup>
              <br />
              <InputGroup>
                <Input className="input-contact" placeholder="What We Can Help You?" />
              </InputGroup>
              <br />
              <button type="button" className="btn btn-primary btn-contact"><span>Send Us</span><img src={arrow} alt="" /></button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>Or you can send a message to us via Skype. We are available in office hours (GMT: +7):</p>
              <button type="button" className="btn btn-link btn-skype"><span>Skype: ngochoan1011</span><img src={arrowHeader} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}