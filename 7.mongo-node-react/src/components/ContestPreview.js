import React from "react";

class ContestPreview extends React.Component {
  render() {
    return (
      <div className="ContestPreview">
        <div className="category-name">{this.props.categoryName}</div>
        <div className="contest-name">{this.props.contestName}</div>
      </div>
    );
  }
}

export default ContestPreview;
