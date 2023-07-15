import React, { Component } from "react";
import PropTypes from 'prop-types';
import Control from "./Control";
import Value from "./Value";

const propTypes = {
    number: PropTypes.number,
};

const defaultProps = {
    number: -1
};

export default class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div>
                <Value/>
                <Control/>
            </div>
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;