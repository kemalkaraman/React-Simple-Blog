import React, { Component } from "react";
import RightBar from "../../layouts/rightBar";
import Article from "./components/article";
import ArticleDetails from "./components/ArticleDetails";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";

class Articles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;
  console.log(products)
    var control;

    if (this.props.detailId != null) {
      control = products.map(makale =>
        this.props.detailId == makale._id ? (
          <ArticleDetails data={makale} />
        ) : null
      );
    } else {
      control = products.map(makale => <Article data={makale} />);
    }

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="my-4" />
            {control}
          </div>
          <RightBar />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  detailId: state.reducer.detailId,
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});
Articles = connect(mapStateToProps)(Articles);
export default Articles;
