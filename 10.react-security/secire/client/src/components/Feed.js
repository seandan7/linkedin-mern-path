import React, { Component } from "react";
import FeedItem from "./FeedItem";
import axios from "axios";
class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: []
    };
  }
  componentWillMount() {
    // call api before render
    const { getAccessToken } = this.props.auth;
    const headers = {
      Authorization: `Bearer ${getAccessToken}`
    };
    const url = "http://localhost:4000/courses";
    return axios.get(url, { headers }).then(response => {
      this.setState({
        feeds: response.data
      });
    });
  }
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {!isAuthenticated() && (
          <div>
            <h4>
              You are not logged in! Please{" "}
              <a
                style={{
                  cursor: "pointer"
                }}
                onClick={this.login.bind(this)}
              >
                Log in
              </a>{" "}
              to continue
            </h4>
          </div>
        )}
        {isAuthenticated() &&
          this.state.feeds.map(item => <FeedItem key={item.id} feed={item} />)}
      </div>
    );
  }
}

export default Feed;
