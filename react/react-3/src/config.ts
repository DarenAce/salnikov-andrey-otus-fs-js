export const weatherApiUrl = "https://api.openweathermap.org/data/2.5/";
export const weatherAppId = "cf668b5e3a0abf6c8811280ddc9c481c";
export const currentWeatherApiUrlWithId = `${weatherApiUrl}weather?appid=${weatherAppId}`;
export const weatherForecastApiUrlWithId = `${weatherApiUrl}forecast?appid=${weatherAppId}`;

export default {
    weatherApiUrl,
    weatherAppId,
    currentWeatherApiUrlWithId,
    weatherForecastApiUrlWithId
};
