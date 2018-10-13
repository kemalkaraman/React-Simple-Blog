import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import images from './error.png';


const NotFound = () => ( 
    <div className="NotFound-Wrapper">
      <img src={images}  alt="logo" />
    </div>
  );
  
  export default NotFound;