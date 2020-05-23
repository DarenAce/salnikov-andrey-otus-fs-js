import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { AppState } from "../types";
import { loadCities, saveCities } from "../utils/storage";
import { rootReducer, initialState } from "./reducers";

const state: AppState = initialState;
state.cities = loadCities();
const store: Store = createStore(rootReducer, state, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => saveCities((store.getState() as AppState).cities));

export default store;
