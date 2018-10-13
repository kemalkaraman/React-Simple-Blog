import React, { Component } from "react";
class footer extends Component {
  render() {
    return (
      <div className="footer">
        <div style={{ marginTop: 20 }}>
          <a href="https://cosmicjs.com" style={{ textDecoration: "none" }}>
           
            
            <span
              className="powered-by"
              style={{ position: "relative", top: 4, color: "#333" }}
            />
          </a>
        </div>
        <div className="copyright">
          &copy;&nbsp;&nbsp;
          {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}
export default footer;
