import React, { Component } from "react";
import styled from "styled-components";
import { truncate } from "../../../helpers/utilities";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../../redux/actions/action";

export const TRUNCATION_LIMIT = 400;

class Article extends Component {
  constructor(props) {
    super(props);
  }

  doneTask = e => {
    action.SetDetailId(e.target.id);
  };

 
  render() {
    const { data, detailId } = this.props;
    

   
    return (
      <div key={data._id}>
      
        <div>
          <h2 id={data._id} onClick={this.doneTask} className="card-title">
            {data.MakaleBaslik}
          </h2>
          <Imagess
            className="card-img-top"
            src={data.MakaleResimUrl}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h6 className="card-title">{data.MakaleBaslik}</h6>
              <ArticleText>
                {truncate(data.MakaleIcerik, TRUNCATION_LIMIT)}
                <span> ...</span>
              </ArticleText>
            </p>
            <a
              href="#"
              key={data._id}
              id={data._id}
              onClick={this.doneTask}
              className="btn btn-primary"
            >
              Read More &rarr;
            </a>
          </div>
          <div className="card-footer text-muted">
            Posted on s 1a, 2017 by
            <a href={null}>Start Bootstrap</a>
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

const mapStateToProps = (state, ownProps) => ({
  detailId: state.reducer.detailId
});
Article = connect(mapStateToProps)(Article);
export default Article;
