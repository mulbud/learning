import React from "react";
import { ReactElement } from "react";

export interface IHelloTwoProps {
  text: string;
}

export class HelloTwo extends React.Component<IHelloTwoProps> {

    private clickHandler() {
        alert('I am here');
    }

    render() {
        return <>
        <span>{this.props.text}</span>
        <button onClick={() => this.clickHandler()}>Click me</button>
        </>; 
    }
}
