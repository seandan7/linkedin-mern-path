import React from "react";
import PropTypes from "prop-types";
const Book = ({
  title = "No Title Provided",
  author = "No Auth",
  pages = "NA",
  freeBookmark
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free bookmark today : {freeBookmark ? "yes" : "no"}</p>
    </section>
  );
};
Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool
};
export default Book;
