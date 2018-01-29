import React, { Component } from 'react';

import { Button } from 'reactstrap';

import './header.scss';

import logo from '../../assets/images/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <nav className="header navbar navbar-expand-md navbar-light bg-faded">
          <div className="container">
            <a className="mr-auto navbar-brand" href="/"><img src={logo} alt="logo" /></a>
            <button type="button" className="navbar-toggler">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="ml-sm-auto navbar-nav">
                <li className="nav-item">
                  <a className="nav-link primary-font" href="/components/">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link primary-font" href="/utilities/">All Projects</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link primary-font">Our Services</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link primary-font">Career</a>
                </li>
                <li className="nav-item">
                  <Button color="primary">Contact us</Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}