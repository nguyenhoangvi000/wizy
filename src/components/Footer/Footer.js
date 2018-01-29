import React, { Component } from 'react';

import './footer.scss';


export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p>Wizy Technology</p>
              <p>27 Trinh Dinh Thao, Hoa Thanh Ward, Tan Phu District, HCM City, Vietnam</p>
            </div>
            <div className="col-md-3">
              <p>Contact Information</p>
              <p>+84 1223 4343</p>
              <p>contact@wizy.com</p>
            </div>
            <div className="col-md-3">
              <p>Instant Messenging</p>
            </div>
            <div className="col-md-3">
              <p> Wizy Technology. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}