import React, { Component } from "react";
import styled from "styled-components";

class Pagination extends Component {
  renderButtons = count => {
    const { onClick } = this.props;
    let buttons = [];

    for (let i = 1; i <= count; i++) {
      buttons.push(
        <a href="#pagination" className="as" key={i} id={i} onClick={onClick}>
          {i}
        </a>
      );
    }
    return buttons;
  };

  render() {
    const { count } = this.props;
   
    return (
      <StyledPagination>
        <div  name="#pagination" className="test">{this.renderButtons(count)}</div>
      </StyledPagination>
    );
  }
}

const StyledPagination = styled.div`
  display: inline-block;
  padding-bottom: 10%;
  a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    font-size: 22px;
  }
  a.active {
    background-color: #4caf50;
    color: white;
    border: 1px solid #4caf50;
  }
  test {
    background-color: #000;
  }
`;

export default Pagination;
