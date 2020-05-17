import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { City, AppAction } from "../types";
import { selectCity, removeCity, updateCurrentWeather } from "../store/actions";

export interface CityProps {
    city: City;
    select: () => void;
    removeFromList: () => void
}

const CityListItem = (props: CityProps) => {
    const { city, select, removeFromList } = props;
    return <li className="favorites-item">
        <button className="show-city-weather-button" onClick={select}>{city.name}</button>
        <button className="delete-button" onClick={removeFromList}>Delete</button>
    </li>;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AppAction>, ownProps: { city: City }) => {
    const { id, name } = ownProps.city;
    return {
        select: () => {
            dispatch(selectCity(name));
            dispatch(updateCurrentWeather(name));
        },
        removeFromList: () => dispatch(removeCity(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityListItem)