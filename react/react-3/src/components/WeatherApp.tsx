import React from "react";
import { connect } from "react-redux";
import "$root/assets/style/main.css";
import { Weather, AppState } from "../types";
import CityList from "./CityList";
import SearchForm from "./SearchForm";
import CurrentCityWeather from "./CurrentCityWeather";

interface WeatherAppProps {
    city: string | null;
    weather: Weather | null;
}

const WeatherApp = (props: WeatherAppProps) => {
    const { weather } = props;
    return <div className="container">
        <header className="app-header">
            <h1>Weather App</h1>
        </header>
        <div className="main">
            <CityList />
            <div className="search-section">
                <SearchForm />
                {weather !== null && weather.current !== null && (<CurrentCityWeather />)}
            </div>
        </div>
    </div>
};

const mapStateToProps = (state: AppState) => ({
    city: state.cities.selected,
    weather: state.weather.current
});

export default connect(mapStateToProps)(WeatherApp)