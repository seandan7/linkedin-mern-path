import React from 'react';
import propTypes from 'prop-types';

class Contest extends React.Component {
    render() {
        return (
            <div className="Contest">
                <div className="contest-description">
                    {this.props.description}
                </div>
                <div onClick={this.props.contestListClick} className="home link link mt-3 bold">
                    <u>All Contests</u>
                </div>
            </div>
        )
    }
}

Contest.propTypes = {
    description: propTypes.string.isRequired,
    contestListClick: propTypes.func.isRequired
}
export default Contest;