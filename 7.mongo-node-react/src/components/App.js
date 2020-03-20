import React from "react";
import Header from "./Header";
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api'

const pushState = (obj, url) => {
  return window.history.pushState(obj, '', url);
}
class App extends React.Component {
  // class property
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: "Naming Contests",
      contests: this.props.initialContests,
      currentContestID: null
    };
  }
  componentDidMount() {
    
  }
  componentWillUnmount() {
    
  }
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    );
    api.fetchContest(contestId).then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          // this new obj has description
          [contest.id]: contest
        }
      });
    });
    // lookup the contest
    // this.state.contests[currentContestID]
   
  }
  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }
  currentContent() {
    if (this.state.currentContestId) {
      console.log("Is single");
      return <Contest {...this.currentContest()} />
    } else {
      console.log("Is multi");
      return <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests} />;
    }
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
