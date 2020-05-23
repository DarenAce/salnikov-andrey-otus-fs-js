import { Action } from "redux";

export interface City {
    id: number;
    name: string;
}

export interface Weather {
    [key: string]: any;
}

export interface WeatherConditions {
    temperature: number | null;
    pressure: number | null;
    humidity: number | null;
    wind: {
        speed: number | null;
        degrees: number | null;
    };
}

export type CurrentWeather = { city: string } & WeatherConditions;

export type WeatherByTime = { time: number } & WeatherConditions;

export interface WeatherByDate {
    date: number;
    dayWeather: WeatherByTime | null;
    nightWeather: WeatherByTime | null;
}

export interface WeatherForecast {
    city: string;
    weatherByHours: WeatherByTime[];
}

export interface AppState {
    cities: City[];
    current: string;
}

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

export type WeatherAction =
    | UpdateCurrentWeatherAction
    | UpdateWeatherForecastAction
    | CurrentWeatherHasBeenUpdatedAction
    | WeatherForecastHasBeenUpdatedAction;

export type AppAction = CityAction | WeatherAction;
