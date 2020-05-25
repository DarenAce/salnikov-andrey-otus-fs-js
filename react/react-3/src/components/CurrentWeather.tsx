import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AppState, CurrentWeather } from "../types";
import { convertWindDirectionToString } from "../utils";
import { loadCurrentWeather } from "../utils/api";
import ToggleFavorites from "./ToggleFavoritesButton";

interface CurrentCityWeatherProps {
    city: string;
}

interface CurrentCityWeatherState {
    weather: CurrentWeather;
}

class CurrentCityWeather extends Component<CurrentCityWeatherProps, CurrentCityWeatherState> {
    constructor(props: CurrentCityWeatherProps) {
        super(props);
        const { city } = this.props;
        this.state = {
            weather: {
                city,
                temperature: null,
                pressure: null,
                humidity: null,
                wind: {
                    speed: null,
                    degrees: null
                }
            }
        };
    }

    componentDidMount() {
        this.updateWeather();
    }

    componentDidUpdate() {
        this.updateWeather();
    }

    async updateWeather() {
        const { city } = this.props;
        if (city) {
            this.setState({
                weather: await loadCurrentWeather(city)
            });
        }
    }

    render() {
        const { weather } = this.state;
        return <div className="city-weather-card">
            <div className="city-weather-header">
                <Link to={`/cities/${weather.city}`} className="city-name">{weather.city}</Link>
                <ToggleFavorites city={weather.city} />
            </div>
            <table className="conditions">
                <tbody>
                    <tr>
                        <td>Temperature:</td>
                        <td>{weather.temperature ? Math.round(weather.temperature) : "\u2014"} &deg;C</td>
                    </tr>
                    <tr>
                        <td>Pressure:</td>
                        <td>{weather.pressure ? weather.pressure : "\u2014"} hPa</td>
                    </tr>
                    <tr>
                        <td>Humidity:</td>
                        <td>{weather.humidity ? weather.humidity : "\u2014"}%</td>
                    </tr>
                    <tr>
                        <td>Wind speed:</td>
                        <td>{weather.wind.speed ? weather.wind.speed : "\u2014"} m/s</td>
                    </tr>
                    <tr>
                        <td>Wind direction:</td>
                        <td>{weather.wind.degrees ? convertWindDirectionToString(weather.wind.degrees) : "\u2014"}</td>
                    </tr>
                </tbody>
            </table>
        </div >;
    }
}

const mapStateToProps = (state: AppState) => ({
    city: state.current
});

export default connect(mapStateToProps)(CurrentCityWeather);
