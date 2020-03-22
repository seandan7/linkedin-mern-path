import React from "react";
import { render } from "react-dom";

import Library from "./components/Libray";
let bookList = [
  {
    title: "The sun also rises",
    id: 1,
    author: "Hemmingway",
    pages: 120
  },
  {
    title: "Old man and the sea",
    id: 2,
    author: "Hemmingway",
    pages: 120
  },
  {
    title: "The sun also rises",
    id: 3,
    author: "Hemmingway",
    pages: 120
  }
];

render(<Library books={bookList} />, document.getElementById("root"));
