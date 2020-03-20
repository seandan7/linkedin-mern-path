import React from 'react';
import propTypes from 'prop-types';

class Contest extends React.Component {
    render() {
        return (
            <div className="Contest">
                {this.props.description}
            </div>
        )
    }
}

Contest.propTypes = {
    description: propTypes.string.isRequired
}
export default Contest;