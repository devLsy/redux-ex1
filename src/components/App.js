import React, { Component } from "react";
import Counter from "./Counter";

const propTypes = {

};

const defaultProps = {

};

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Counter/>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

