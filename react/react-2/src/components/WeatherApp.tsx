import React, { Component, FormEvent, MouseEvent } from "react";

import "$root/assets/style/main.css";
import { searchWeather } from "../utils";
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

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addCityToList = this.addCityToList.bind(this);
        this.removeCityFromList = this.removeCityFromList.bind(this);
        this.selectCityFromList = this.selectCityFromList.bind(this);
    }

    handleInput(e: FormEvent<HTMLInputElement>) {
        const city = e.currentTarget.value;
        this.setState({ ...this.state, city });
    }

    async handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.setState({ ...this.state, cityWeather: await searchWeather(this.state.city) });
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
            this.setState({ ...this.state, cityList });
        }
    }

    removeCityFromList(cityIndex: number) {
        return () => {
            const cityList = this.state.cityList.filter((element, index) => index !== cityIndex);
            this.setState({ ...this.state, cityList });
        }
    }

    selectCityFromList(cityIndex: number) {
        return async () => {
            const city = this.state.cityList[cityIndex];
            this.setState({ ...this.state, city: city.name, cityWeather: await searchWeather(city.name) });
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