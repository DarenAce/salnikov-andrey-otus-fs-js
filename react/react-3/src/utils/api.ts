import {
    CurrentWeather,
    Weather,
    WeatherForecast,
    WeatherByTime,
} from "../types";
import {
    currentWeatherApiUrlWithId,
    weatherForecastApiUrlWithId,
} from "../config";

const loadWeather = async (
    city: string,
    baseUrl: string
): Promise<Weather | null> => {
    const searchResponseResult = await fetch(
        `${baseUrl}&units=metric&q=${city}`
    );
    if (searchResponseResult.status === 200) {
        return await searchResponseResult.json();
    }
    return null;
};

export const loadCurrentWeather = async (
    city: string
): Promise<CurrentWeather> => {
    const response = await loadWeather(city, currentWeatherApiUrlWithId);
    return {
        city,
        temperature: response ? response.main.temp : null,
        pressure: response ? response.main.pressure : null,
        humidity: response ? response.main.humidity : null,
        wind: {
            speed: response ? response.wind.speed : null,
            degrees: response ? response.wind.deg : null
        }
    };
};

export const loadWeatherForecast = async (
    city: string
): Promise<WeatherForecast> => {
    const response = await loadWeather(city, weatherForecastApiUrlWithId);
    let weatherByHours: WeatherByTime[] = [];
    if (response) {
        weatherByHours = (response.list as [any]).map((weather) => {
            return {
                time: new Date(weather.dt_txt).getTime(),
                temperature: weather.main.temp as number,
                pressure: weather.main.pressure as number,
                humidity: weather.main.humidity as number,
                wind: {
                    speed: weather.wind.speed as number,
                    degrees: weather.wind.deg as number
                }
            };
        });
    }
    return {
        city,
        weatherByHours: weatherByHours,
    };
};
