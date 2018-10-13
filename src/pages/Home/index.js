import React, { Component } from "react";
import Articles from "../Articles";
import Header from "../../layouts/navBar";
import Footer from "../../layouts/footer";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/blog-home.css";
class App extends Component {

  render() {
   
    return (
      <div>
        <Header />
        <main className="main-content">
          <Articles />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
