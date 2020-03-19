import React from 'react';
import ReactDOM from 'react-dom';

import propTypes from 'prop-types';


const App = (props) => {
    return (
        <h2 className="text-center ">
            {props.headerMessage}
        </h2>
    )
}
App.propTypes = {
    headerMessage : propTypes.string
};

const color = Math.random() > 0.5 ? 'green': 'red';
ReactDOM.render(
    <App headerMessage="Hello Props!"/>,
    document.getElementById('root')
)