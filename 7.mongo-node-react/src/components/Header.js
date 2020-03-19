import propTypes from 'prop-types';
import React from 'react';

const Header = ({message}) => {
    return (
        <h2 className="text-center">
            {message}
        </h2>
    )
}

Header.propTypes = {
    headerMessage : propTypes.string
};

Header.defaultProps = {
    headerMessage: "Hello!!"
}

export default Header;