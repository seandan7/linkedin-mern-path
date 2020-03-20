import React from "react";
import propTypes from "prop-types";
import Header from "./Header";
import ContestList from "./ContestList";
import Contest from "./Contest";
import * as api from "../api";

const pushState = (obj, url) => {
  return window.history.pushState(obj, "", url);
};

const onPopState = handler => {
  window.onpopstate = handler;
};
class App extends React.Component {
  // class property
  constructor(props) {
    super(props);
    this.state = this.props.initialData;
  }
  componentDidMount() {
    onPopState(event => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId
      });
    });
  }
  componentWillUnmount() {
    onPopState(null);
  }
  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }

    return "Naming Contests";
  }
  fetchContest = contestId => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest._id,
        contests: {
          ...this.state.contests,
          // this new obj has description
          [contest._id]: contest
        }
      });
    });
  };
  fetchContestList = () => {
    pushState(
      {
        currentContestId: null
      },
      "/"
    );
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });
  };
  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }
  fetchNames = nameIds => {
    if (nameIds.length === 0) {
      return;
    }
    api.fetchNames(nameIds).then(names => {
      this.setState({
        names
      });
    });
  };
  lookupNameById = (nameId) => {
    if (!this.state.names || !this.state.names[nameId]) {
      return {
        name: '...'
      };
    }
    return this.state.names[nameId]
  }
  currentContent() {
    if (this.state.currentContestId) {
      console.log("Is single");
      return (
        <Contest
          fetchNames={this.fetchNames}
          lookupNameById={this.lookupNameById}
          contestListClick={this.fetchContestList}
          {...this.currentContest()}
        />
      );
    } else {
      console.log("Is multi");
      return (
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests}
        />
      );
    }
  }
  handleBackClick() {}
  render() {
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

App.propTypes = {
  initialData: propTypes.object.isRequired
};

export default App;
