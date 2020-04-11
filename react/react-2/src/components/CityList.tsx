import React, { Component, FormEvent } from "react";

interface IProps {
    cities: { name: string }[],
    removeCity: (index: number) => (event: FormEvent<HTMLButtonElement>) => void,
    selectCity: (index: number) => (event: FormEvent<HTMLButtonElement>) => void
}

export default class CityList extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { cities, removeCity, selectCity } = this.props;
        return <div className="favorites-section">
            <h2 className="favorites-header">Favorite cities</h2>
            {cities.length > 0 && (
                <ul className="favorites-list">
                    {cities.map(({ name }, number) => (
                        <li className="favorites-row" key={number}>
                            <button className="show-city-weather-button" onClick={selectCity(number)}>{name}</button>
                            <button className="delete-button" onClick={removeCity(number)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>;
    }
}