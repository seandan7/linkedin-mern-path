import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import Hiring from "./Hiring";
import NotHiring from "./NotHiring";
class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      freeBookmark: true,
      hiring: false,
      data: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then(data => data.json())
      .then(data => {
        this.setState({
          data,
          loading: false
        });
      });
  }
  componentDidUpdate() {
    console.log("The component just updated");
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  render() {
    const { books } = this.props;
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading ? (
          "Loading..."
        ) : (
          <div>
            {this.state.data.map(product => {
              return (
                <div
                  style={{
                    border: "1px solid black"
                  }}
                  key={product.id}
                >
                  <h3>Product of the week</h3>
                  <h4>{product.name}</h4>
                  <img
                    alt={product.name + " Image"}
                    src={product.image}
                    height={100}
                  />
                </div>
              );
            })}
          </div>
        )}
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
        {books.map(book => {
          return (
            <Book
              freeBookmark={this.state.freeBookmark}
              key={book.id}
              title={book.title}
              author={book.author}
              pages={book.pages}
            />
          );
        })}
        <button href="#" onClick={this.toggleOpenClosed}>
          toggle
        </button>
      </div>
    );
  }
}

Library.propTypes = {
  books: PropTypes.array
};

export default Library;
