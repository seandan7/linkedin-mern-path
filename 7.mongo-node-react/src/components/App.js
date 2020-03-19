import React from "react";
import Header from "./Header";
import ContestPreview from './ContestPreview';


class App extends React.Component {
  // class property
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: "Naming Contests"
    };
  }
  componentDidMount() {
      // ajax, times, listeners goes here
  }
  componentWillUnmount() {
    // clean ajax. timers, listeners
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
            {this.props.contests.map((contest, i) => 
                <ContestPreview key={i} {...contest} />
            )}
        </div>
      </div>
    );
  }
}

export default App;
