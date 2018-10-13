import React, { Component } from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap.css";
import "../../assets/css/style.css";
import articles from "./fakeData/articles.json";
import categories from "./fakeData/categories.json";
import RightBar from "../../layouts/rightBar";
import Article from "./components/article";
import Pagination from "./components/pagination";
import ArticleDetails from "./components/ArticleDetails";
import { connect } from "react-redux";

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: articles,
      categories: categories,
      currentPage: 1,
      todosPerPage: 5
    };
  }

  handleClick = event => {
    /*  if (this.temp) {
      document.getElementById(this.temp).classList.remove("active");
    }
    document.getElementById(event.target.id).classList.add("active");
    this.temp = event.target.id;

    this.setState({
      currentPage: Number(event.target.id)
    }); */
  };

  componentDidMount() {
    //this.fetchArticles();
    //this.fetchCategories();
  }

  fetchArticles() {
    fetch("http://localhost:8000/Makale")
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data
        });
      })
      .catch(err => console.log(err));
  }
  fetchCategories() {
    fetch("http://localhost:8000/Kategori")
      .then(response => response.json())
      .then(data =>
        this.setState({
          categories: data
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { articles, detailId, currentPage, todosPerPage } = this.state;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const paginationArticle = articles.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(articles.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const count = articles.length / todosPerPage;

    var control;
    if (this.props.detailId != null) {
      control = paginationArticle.map(
        makale =>
          this.props.detailId == makale._id ? (
            <ArticleDetails data={makale} />
          ) : (
            null
          )
      );
    } else {
      control = paginationArticle.map(makale => <Article data={makale} />);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="my-4" />
            {control}
            <Pagination count={count} onClick={this.handleClick} />
          </div>
          <RightBar categories={categories} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  detailId: state.reducer.detailId
});
Articles = connect(mapStateToProps)(Articles);
export default Articles;
