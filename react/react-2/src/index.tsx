import React from "react";
import { render } from "react-dom";
import WeatherApp from "./components/WeatherApp";

render(
    <WeatherApp />,
    document.querySelector("#root")
);