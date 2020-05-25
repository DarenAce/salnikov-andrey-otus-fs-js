import { ThunkAction } from "redux-thunk";
import {
    AddCityAction,
    CurrentWeatherHasBeenUpdatedAction,
    RemoveCityAction,
    SelectCityAction,
    Weather,
    WeatherForecastHasBeenUpdatedAction
} from "../types";
import { loadCurrentWeather, loadWeatherForecast } from "../utils/api";

export const ADD_CITY_TO_LIST: string = "ADD_CITY_TO_LIST";
export const REMOVE_CITY_FROM_LIST: string = "REMOVE_CITY_FROM_LIST";
export const SELECT_CITY_FROM_LIST: string = "SELECT_CITY_FROM_LIST";
export const CURRENT_WEATHER_HAS_BEEN_UPDATED: string = "CURRENT_WEATHER_HAS_BEEN_UPDATED";
export const WEATHER_FORECAST_HAS_BEEN_UPDATED: string = "WEATHER_FORECAST_HAS_BEEN_UPDATED";

export const addCity = (cityName: string): AddCityAction => ({
    type: ADD_CITY_TO_LIST,
    payload: cityName
});

export const removeCity = (cityId: number): RemoveCityAction => ({
    type: REMOVE_CITY_FROM_LIST,
    payload: cityId
});

export const selectCity = (cityName: string): SelectCityAction => ({
    type: SELECT_CITY_FROM_LIST,
    payload: cityName
});

export const currentWeatherHasBeenUpdated = (weather: Weather): CurrentWeatherHasBeenUpdatedAction => ({
    type: CURRENT_WEATHER_HAS_BEEN_UPDATED,
    payload: weather
});

export const weatherForecastHasBeenUpdated = (weather: Weather): WeatherForecastHasBeenUpdatedAction => ({
    type: WEATHER_FORECAST_HAS_BEEN_UPDATED,
    payload: weather
});

export const updateCurrentWeather = (
    cityName: string
): ThunkAction<any, {}, {}, CurrentWeatherHasBeenUpdatedAction> => async (dispatch) => {
    const weather = await loadCurrentWeather(cityName);
    return dispatch(currentWeatherHasBeenUpdated(weather));
};

export const updateWeatherForecast = (
    cityName: string
): ThunkAction<any, {}, {}, WeatherForecastHasBeenUpdatedAction> => async (dispatch) => {
    const weather = await loadWeatherForecast(cityName);
    return dispatch(weatherForecastHasBeenUpdated(weather));
};
