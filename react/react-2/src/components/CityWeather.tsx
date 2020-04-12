import React, { Component, FormEvent } from "react";

interface IProps {
    weather: {
        [key: string]: any
    },
    cityList: { name: string }[],
    addToCityList: (event: FormEvent<HTMLButtonElement>) => void
}

export default class CityWeather extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    convertWindDirectionToString(degrees: number): string {
        let direction = "N/A";
        if (degrees >= 0 && degrees < 22.5 || (degrees > 337.5 && degrees < 360)) {
            direction = "E";
        } else if (degrees >= 22.5 && degrees < 67.5) {
            direction = "NE";
        } else if (degrees >= 67.5 && degrees < 112.5) {
            direction = "N";
        } else if (degrees >= 112.5 && degrees < 157.5) {
            direction = "NW";
        } else if (degrees >= 157.5 && degrees < 202.5) {
            direction = "W";
        } else if (degrees >= 202.5 && degrees < 247.5) {
            direction = "SW";
        } else if (degrees >= 247.5 && degrees < 292.5) {
            direction = "S";
        } else if (degrees >= 292.5 && degrees < 337.5) {
            direction = "SE";
        }
        return direction;
    }

    render() {
        const { weather: searchResult, cityList, addToCityList } = this.props;
        const isFavorite = cityList.find(city => city.name === searchResult.name);
        return <div className="city-weather-card">
            <div className="city-weather-header">
                <h2>{searchResult.name}</h2><button className="add-to-favorites-button" onClick={addToCityList}>
                    <svg version="1.1" id="favorites-icon" className={isFavorite ? "added-to-favorites" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.21 482.21" width="25px" height="25px" fill="transparent" stroke="#000000" stroke-width="20">
                        <g id="IconsRepo_bgCarrier"></g>
                        <polygon points="482.207,186.973 322.508,153.269 241.104,11.803 159.699,153.269 0,186.973 109.388,308.108 92.094,470.404 241.104,403.803 390.113,470.404 372.818,308.108 "></polygon>
                    </svg>
                </button></div>
            <table className="conditions">
                <tbody>
                    <tr>
                        <td>Temperature:</td>
                        <td>{searchResult.temp}&deg; C</td>
                    </tr>
                    <tr>
                        <td>Pressure:</td>
                        <td>{searchResult.pressure} hPa</td>
                    </tr>
                    <tr>
                        <td>Humidity:</td>
                        <td>{searchResult.humidity} %</td>
                    </tr>
                    <tr>
                        <td>Wind speed:</td>
                        <td>{searchResult.wind.speed} m/s</td>
                    </tr>
                    <tr>
                        <td>Wind direction:</td>
                        <td>{this.convertWindDirectionToString(searchResult.wind.deg)}</td>
                    </tr>
                </tbody>
            </table>
        </div >;
    }
}