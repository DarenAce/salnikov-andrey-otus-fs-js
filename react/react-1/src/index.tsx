import React from "react";
import { render } from "react-dom";
import HelloName from "./components/helloName";

render(
    <HelloName name="John Doe" />,
    document.querySelector("#root")
);
