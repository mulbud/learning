import React from "react";
import { ReactElement } from "react";

export function HelloOne() : ReactElement {
    const greeting = 'Hello Function Component!';
    return <span>{greeting}</span>; 
}