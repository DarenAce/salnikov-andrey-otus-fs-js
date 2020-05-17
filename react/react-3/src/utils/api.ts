import { currentWeatherApiUrlWithId, weatherForecastApiUrlWithId } from "../config";
import { Weather } from "../types";

const loadWeather = async (city: string, baseUrl: string): Promise<Weather> => {
    let weather = null;
    const searchResponseResult = await fetch(`${baseUrl}&units=metric&q=${city}`);
    if (searchResponseResult.status === 200) {
        const response = await searchResponseResult.json();
        weather = {
            name: response.name,
            ...response.main,
            wind: response.wind
        };
    }
    return weather;
};

// export const loadCurrentWeather = async (city: string): Promise<Weather> => {
//     let weather = null;
//     const searchResponseResult = await fetch(`${currentWeatherApiUrlWithId}&units=metric&q=${city}`);
//     if (searchResponseResult.status === 200) {
//         const response = await searchResponseResult.json();
//         weather = {
//             name: response.name,
//             ...response.main,
//             wind: response.wind
//         };
//     }
//     return weather;
// };

export const loadCurrentWeather = async (city: string): Promise<Weather> => {
    return loadWeather(city, currentWeatherApiUrlWithId);
}

export const loadWeatherForecast = async (city: string): Promise<Weather> => {
    return loadWeather(city, weatherForecastApiUrlWithId);
};
