import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import images from "./back.png";
import {connect} from 'react-redux'
import * as action from '../../redux/actions/action';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Header extends Component {

  constructor(){
    super()
  }
  IdNull = e => {
    action.SetDetailId(null)
  };
  render() {
    return (
      <div className="main-app">
        <header className="main-header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a href="#" onClick={this.IdNull}>
              <Imgicon src={images} />
            </a>
            <div className="container">
              <a className="navbar-brand" href="#">
                <Rotate />
              </a>
              <a className="navbar-brand" href="#">
                <Title>
                  <Rotate>🚀</Rotate>
                  <Rotate>WM</Rotate>
                  oZªRT
                </Title>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      <Navbarlink>Home</Navbarlink>
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Navbarlink>About</Navbarlink>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Navbarlink>Contact</Navbarlink>
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/CreatePost">
                      <Navbarlink>Crate Post</Navbarlink>
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li>
                 <Link to="/CreatePost">Rendering with React</Link>
                 </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Imgicon = styled.img`
  width: 25%;
  height: 15%;
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  font-size: 1.5rem;
  color: white;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;
const Navbarlink = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;
export default Header;
