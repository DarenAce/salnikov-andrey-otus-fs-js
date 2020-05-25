import { City } from "../types";

const localStorageKey: string = "weatherApp.cities";

export const loadCities = (): City[] => {
    try {
        const serializedCities = localStorage.getItem(localStorageKey);
        if (!serializedCities) {
            return [];
        }
        return JSON.parse(serializedCities);
    } catch (err) {
        return [];
    }
};

export const saveCities = (cities: City[]): void => {
    try {
        const serializedCities = JSON.stringify(cities);
        localStorage.setItem(localStorageKey, serializedCities);
    } catch (err) {}
};

export default { loadCities, saveCities };
