import React, { Component } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { WeatherByDate, WeatherForecast } from "../types";
import { convertWindDirectionToString } from "../utils";
import { loadWeatherForecast } from "../utils/api"
import ToggleFavorites from "./ToggleFavoritesButton";
import HomeButton from "./HomeButton";

interface MatchParams {
    name: string;
}

interface CityWeatherForecastProps extends RouteComponentProps<MatchParams> {}

interface CityWeatherForecastState {
    forecast: WeatherForecast;
}

export default class CityWeatherForecast extends Component<CityWeatherForecastProps, CityWeatherForecastState> {
    constructor(props: CityWeatherForecastProps) {
        super(props);
        this.state = {
            forecast: {
                city: this.props.match.params.name,
                weatherByHours: []
            }
        };
    }

    async componentDidMount() {
        const { city } = this.state.forecast;
        if (city) {
            this.setState({
                forecast: await loadWeatherForecast(city)
            });
        }
    }

    render() {
        const { forecast } = this.state;
        const weatherByDays: WeatherByDate[] = forecast.weatherByHours
            .reduce((weatherByDays, weather) => {
                const hours = new Date(weather.time).getHours();
                if (hours === 3 || hours === 15) {
                    const date: Date = new Date(weather.time);
                    date.setHours(0, 0, 0, 0);
                    if (hours === 3) {
                        date.setDate(date.getDate() - 1);
                    }
                    let i = weatherByDays.findIndex(dayWeather => dayWeather.date === date.getTime());
                    if (i === -1) {
                        i = weatherByDays.push({
                            date: date.getTime(),
                            dayWeather: null,
                            nightWeather: null
                        }) - 1;
                    }
                    weatherByDays[i].date = date.getTime();
                    if (hours === 3) {
                        weatherByDays[i].nightWeather = weather;
                    } else if (hours === 15) {
                        weatherByDays[i].dayWeather = weather;
                    }
                }
                return weatherByDays;
            },
                new Array<WeatherByDate>());
        return <div className="city-forecast-card">
            <div className="city-forecast-header">
                <HomeButton />
                <h2>{forecast.city || ""}</h2>
                <ToggleFavorites city={forecast.city} />
            </div>
            <div className="city-forecast">

            </div>

            <table className="forecast-table">
                <thead>
                    <tr>
                        <th></th>
                        {weatherByDays.map(weather =>
                            <th>{new Date(weather.date).toLocaleDateString("ru", { month: "numeric", day: "numeric" })}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Day temperature, &deg;C</th>
                        {weatherByDays.map(weather =>
                            <td>{weather.dayWeather && weather.dayWeather.temperature ? Math.round(weather.dayWeather.temperature) : "\u2014"}</td>
                        )}
                    </tr>
                    <tr>
                        <th>Night temperature, &deg;C</th>
                        {weatherByDays.map(weather =>
                            <td>{weather.nightWeather && weather.nightWeather.temperature ? Math.round(weather.nightWeather.temperature) : "\u2014"}</td>
                        )}
                    </tr>
                    <tr>
                        <th>Pressure, hPa</th>
                        {weatherByDays.map(weather =>
                            <td>{weather.dayWeather && weather.dayWeather.pressure ? weather.dayWeather.pressure : "\u2014"}</td>
                        )}
                    </tr>
                    <tr>
                        <th>Humidity, %</th>
                        {weatherByDays.map(weather =>
                            <td>{weather.dayWeather && weather.dayWeather.humidity ? weather.dayWeather.humidity : "\u2014"}</td>
                        )}
                    </tr>
                    <tr>
                        <th>Wind speed, m/s</th>
                        {weatherByDays.map(weather =>
                            <td>{weather.dayWeather && weather.dayWeather.wind.speed ? weather.dayWeather.wind.speed : "\u2014"}</td>
                        )}
                    </tr>
                    <tr>
                        <th>Wind direction</th>
                        {weatherByDays.map(weather =>
                            <td>{weather.dayWeather && weather.dayWeather.wind.degrees ? convertWindDirectionToString(weather.dayWeather.wind.degrees) : "\u2014"}</td>
                        )}
                    </tr>
                </tbody>
            </table>
        </div >;
    };
}
