import React, { Component } from "react";
import styled from "styled-components";
import { browserHistory as history } from "react-router";

class Article extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick(this.props.id);
  };

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div key={data.MakaleBaslik} className="card mb-4">
        <img
          className="card-img-top"
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Canary-wharf-one.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h2 className="card-title">{data.MakaleBaslik}</h2>
          <p className="card-text">
            <CharLimit>{data.MakaleIcerik}</CharLimit>
          </p>
          <a >Read morea...</a>
        </div>
        <div className="card-footer text-muted">
         bu içerik
          <a href="#">Startta Bootstrap</a>
        </div>
      </div>
    );
  }
}

const CharLimit = styled.p`
  @charset "charset";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font: bold 12px/13px Arial;
`;

export default Article;
