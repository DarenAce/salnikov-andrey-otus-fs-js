import { AppAction } from "../types";
import {
    ADD_CITY_TO_LIST,
    REMOVE_CITY_FROM_LIST,
    SELECT_CITY_FROM_LIST,
} from "./actions";
import { AppState } from "../types";

export const initialState: AppState = {
    cities: [],
    current: ""
};

export const rootReducer = (
    state: AppState = initialState,
    action: AppAction
): AppState => {
    switch (action.type) {
        case ADD_CITY_TO_LIST:
            const cityName: string = action.payload as string;
            const exists =
                state.cities.findIndex((city) => city.name === cityName) >
                -1;
            if (!exists) {
                const id =
                    state.cities.reduce(
                        (max, city) => Math.max(max, city.id),
                        Number.MIN_SAFE_INTEGER
                    ) + 1;
                return {
                    ...state,
                    cities: [
                        ...state.cities,
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
                cities: state.cities.filter(
                    (city) => city.id !== (action.payload as number)
                ),
            };
        case SELECT_CITY_FROM_LIST:
            return {
                ...state,
                current: action.payload as string,
            };
        default:
            return state;
    }
};
