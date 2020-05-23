import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import CityList from "./components/CityList";
import CityWeatherForecast from "./components/WeatherForecast";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import "$root/assets/style/main.css";

if (process.env.NODE_ENV === "development") {
    console.log("Store:", store.getState());
}

render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <header className="app-header">
                    <h1>Weather App</h1>
                </header>
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/cities"} component={CityList} />
                    <Route exact path={"/cities/:name"} component={CityWeatherForecast} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);
