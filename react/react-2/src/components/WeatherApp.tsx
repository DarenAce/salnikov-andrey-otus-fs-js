import React, { Component, FormEvent, MouseEvent } from "react";

import "$root/assets/style/main.css";
import { weatherApiUrlPlusId } from "../config";
import SearchForm from "./SearchForm";
import CityWeather from "./CityWeather";
import CityList from "./CityList";

interface IProps { }

interface IState {
    city: string,
    cityList: { name: string }[],
    cityWeather: {
        [key: string]: any
    } | null
}

export default class WeatherApp extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            city: "",
            cityList: [
                { name: "Moscow" },
                { name: "London" },
                { name: "New York" },
                { name: "Tokyo" }
            ],
            cityWeather: null
        };

        this.searchWeather = this.searchWeather.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addCityToList = this.addCityToList.bind(this);
        this.removeCityFromList = this.removeCityFromList.bind(this);
        this.selectCityFromList = this.selectCityFromList.bind(this);
    }

    async searchWeather() {
        let cityWeather = null;
        const searchResponseResult = await fetch(`${weatherApiUrlPlusId}&units=metric&q=${this.state.city}`);
        if (searchResponseResult.status === 200) {
            const response = await searchResponseResult.json();
            cityWeather = {
                name: response.name,
                ...response.main,
                wind: response.wind
            };
        }
        this.setState({ cityWeather });
    };

    handleInput(e: FormEvent<HTMLInputElement>) {
        const city = e.currentTarget.value;
        this.setState({ city });
    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.searchWeather();
    }

    addCityToList() {
        let { cityWeather, cityList } = this.state;
        if (cityWeather != null) {
            const cityIndex = cityList.findIndex(city => city.name === (cityWeather !== null ? cityWeather.name : ""));
            if (cityIndex < 0) {
                cityList = cityList.concat({ name: cityWeather.name });
            } else {
                cityList.splice(cityIndex, 1);
            }
            this.setState({ cityList });
        }
    }

    removeCityFromList(cityIndex: number) {
        return () => {
            const cityList = this.state.cityList.filter((element, index) => index !== cityIndex);
            this.setState({ cityList });
        }
    }

    selectCityFromList(cityIndex: number) {
        return () => {
            const city = this.state.cityList[cityIndex];
            this.setState({ city: city.name }, this.searchWeather)
        };
    }

    render() {
        const { city, cityList, cityWeather } = this.state;
        return <div className="container">
            <header className="app-header">
                <h1>Weather App</h1>
            </header>
            <div className="main">
                <CityList cities={cityList} removeCity={this.removeCityFromList} selectCity={this.selectCityFromList} />
                <div className="search-section">
                    <SearchForm handleInput={this.handleInput} handleSubmit={this.handleSubmit} searchValue={city} />
                    {cityWeather !== null && (
                        <CityWeather weather={cityWeather} cityList={cityList} addToCityList={this.addCityToList} />
                    )}
                </div>
            </div>
        </div>;
    }
}