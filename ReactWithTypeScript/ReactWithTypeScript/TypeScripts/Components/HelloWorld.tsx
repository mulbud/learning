import * as React from "react";

// A '.tsx' file enables JSX support in the TypeScript compiler,
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

interface IHelloWorldProps {
    personName: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
    render() {
        return (
            <h1>Hello {this.props.personName}</h1>
        );
    }
}