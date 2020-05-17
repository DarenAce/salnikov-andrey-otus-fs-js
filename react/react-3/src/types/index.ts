import { Action } from "redux";

export interface City {
    id: number;
    name: string;
}

export interface Weather {
    [key: string]: any;
}

export interface CitiesState {
    selected: string | null;
    favorites: City[];
}

export interface WeatherState {
    current: Weather | null;
    forecast: Weather | null;
}

export interface AppState {
    cities: CitiesState;
    weather: WeatherState;
};

export interface AddCityAction extends Action<string> {
    payload: string;
}

export interface RemoveCityAction extends Action<string> {
    payload: number;
}

export interface SelectCityAction extends Action<string> {
    payload: string;
}

export interface UpdateCurrentWeatherAction extends Action<string> {
    payload: string;
}

export interface UpdateWeatherForecastAction extends Action<string> {
    payload: string;
}

export interface CurrentWeatherHasBeenUpdatedAction extends Action<string> {
    payload: Weather;
}

export interface WeatherForecastHasBeenUpdatedAction extends Action<string> {
    payload: Weather;
}

export type CityAction = AddCityAction | RemoveCityAction | SelectCityAction;

export type WeatherAction = UpdateCurrentWeatherAction | UpdateWeatherForecastAction | CurrentWeatherHasBeenUpdatedAction | WeatherForecastHasBeenUpdatedAction;

export type AppAction = CityAction | WeatherAction;
