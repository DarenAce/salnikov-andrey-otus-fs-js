import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import WeatherApp from "./components/WeatherApp";

if (process.env.NODE_ENV === "development") {
    console.log("Store:", store.getState());
}

render(
    <Provider store={store}>
        <WeatherApp />
    </Provider>,
    document.querySelector("#root")
);
