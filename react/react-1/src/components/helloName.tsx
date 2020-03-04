import React, {Component} from "react";

export default class HelloName extends Component<{ name: string }> {
    render() {
        return <div>Hello, {this.props.name}!</div>
    };
};