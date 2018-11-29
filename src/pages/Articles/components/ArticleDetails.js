import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/blog-home.css";
import { Link } from "react-router-dom";

class ArticleDetails extends Component {
  render() {
    const { data, detailId } = this.props;
    console.log(detailId);
    return (
      <div key={data._id}>
        <div>
          <Link to={"/" + data._id}>
            <h2 className="card-title">{data.MakaleBaslik}</h2>
          </Link>
          <Imagess
            className="card-img-top"
            src={data.MakaleResimUrl}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h6 className="card-title">{data.MakaleBaslik}</h6>
              {data.MakaleIcerik}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const ArticleText = styled.p`
  font-family: Roboto, sans-serif;
  margin: 0;
  color: #555555;
  font-weight: normal;
  font-style: normal;
`;
const Imagess = styled.img`
  height: 300px;
  width: 700px;
`;

export default ArticleDetails;
