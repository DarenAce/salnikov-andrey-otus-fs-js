import { weatherApiUrlPlusId } from "./config";

const searchWeather = async (city: string) => {
    let cityWeather = null;
    const searchResponseResult = await fetch(`${weatherApiUrlPlusId}&units=metric&q=${city}`);
    if (searchResponseResult.status === 200) {
        const response = await searchResponseResult.json();
        cityWeather = {
            name: response.name,
            ...response.main,
            wind: response.wind
        };
    }
    return cityWeather;
};

export { searchWeather };
