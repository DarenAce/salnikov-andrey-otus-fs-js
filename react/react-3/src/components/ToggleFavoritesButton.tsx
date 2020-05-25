import React, { Component, Dispatch } from "react";
import { connect } from "react-redux";
import { AppState, CityAction, City } from "../types";
import { addCity, removeCity } from "../store/actions";

interface ToggleFavoritesProps {
    city: string;
    cities: City[];
    addCityToList: (name: string) => void;
    removeCityFromList: (id: number) => void;
}

class ToggleFavorites extends Component<ToggleFavoritesProps> {
    constructor(props: ToggleFavoritesProps) {
        super(props);
        this.toggleCity = this.toggleCity.bind(this);
    }

    render() {
        const { city, cities } = this.props;
        const alreadyAdded = cities.findIndex(favorite => favorite.name === city) > -1;
        return <button className="button add-to-favorites-button" onClick={this.toggleCity}>
            <svg version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className={alreadyAdded ? "added-to-favorites" : ""}
            >
                <polygon points="12,0 16.059,7.031 24,8.719 18.568,14.752 19.416,22.825 12,19.523 4.584,22.825 5.432,14.752 0,8.719 7.941,7.031"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    }

    toggleCity() {
        const { city, cities } = this.props;
        if (city) {
            const favorite: City | undefined = cities.find(favorite => favorite.name === city);
            if (favorite) {
                this.props.removeCityFromList(favorite.id);
            } else {
                this.props.addCityToList(city);
            }
        }
    }
}

const mapStateToProps = (state: AppState) => ({
    cities: state.cities
});

const mapDispatchToProps = (dispatch: Dispatch<CityAction>) => ({
    addCityToList: (name: string) => dispatch(addCity(name)),
    removeCityFromList: (id: number) => dispatch(removeCity(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFavorites);
