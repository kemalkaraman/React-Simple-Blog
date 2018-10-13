import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";

class RightBar extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="col-md-4">
        <div className="card my-4">
          <h5 className="card-header">Search</h5>
          <div className="card-body">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
              />
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">
                  Go!
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="card my-4">
          <h5 className="card-header">Categories</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
              {categories.map(makale => (
              <ul className="list-unstyled mb-0">{makale.KategoriAdi}</ul>)
               ) }
                
              </div>
            </div>
          </div>
        </div>
        <div className="card my-4">
          <h5 className="card-header">Side Widget</h5>
          <div className="card-body">
            You can put anything you want inside of these side widgets. They are
            easy to use, and feature the new Bootstrap 4 card containers!
          </div>
        </div>
      </div>
    );
  }
}

export default RightBar;
