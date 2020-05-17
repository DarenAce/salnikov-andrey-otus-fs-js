import { combineReducers } from "redux";
import { CityAction, WeatherAction, Weather } from "../types";
import {
    ADD_CITY_TO_LIST,
    REMOVE_CITY_FROM_LIST,
    SELECT_CITY_FROM_LIST,
    CURRENT_WEATHER_HAS_BEEN_UPDATED,
    WEATHER_FORECAST_HAS_BEEN_UPDATED,
} from "./actions";
import { CitiesState, WeatherState, AppState } from "../types";

const initialCitiesState: CitiesState = {
    selected: null,
    favorites: []
};

const initialWeatherState: WeatherState = {
    current: null,
    forecast: null
};

export const initialState: AppState = {
    cities: initialCitiesState,
    weather: initialWeatherState
};

export const cityReducer = (
    state: CitiesState = initialCitiesState,
    action: CityAction
): CitiesState => {
    switch (action.type) {
        case ADD_CITY_TO_LIST:
            const cityName: string = action.payload as string;
            const exists =
                state.favorites.findIndex((city) => city.name === cityName) >
                -1;
            if (!exists) {
                const id =
                    state.favorites.reduce(
                        (max, city) => Math.max(max, city.id),
                        Number.MIN_SAFE_INTEGER
                    ) + 1;
                return {
                    ...state,
                    favorites: [
                        ...state.favorites,
                        {
                            id,
                            name: action.payload as string,
                        },
                    ],
                };
            } else {
                return state;
            }
        case REMOVE_CITY_FROM_LIST:
            return {
                ...state,
                favorites: state.favorites.filter(
                    (city) => city.id !== (action.payload as number)
                ),
            };
        case SELECT_CITY_FROM_LIST:
            return {
                ...state,
                selected: action.payload as string,
            };
        default:
            return state;
    }
};

export const weatherReducer = (
    state: WeatherState = initialWeatherState,
    action: WeatherAction
): WeatherState => {
    switch (action.type) {
        case CURRENT_WEATHER_HAS_BEEN_UPDATED:
            return {
                ...state,
                current: action.payload as Weather,
            };
        case WEATHER_FORECAST_HAS_BEEN_UPDATED:
            return {
                ...state,
                forecast: action.payload as Weather,
            };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    cities: cityReducer,
    weather: weatherReducer
});
