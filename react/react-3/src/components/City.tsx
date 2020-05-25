import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Link } from "react-router-dom";
import { City, AppAction } from "../types";
import { removeCity } from "../store/actions";

export interface CityProps {
    city: City;
    removeFromList: () => void
}

const CityListItem = (props: CityProps) => {
    const { city, removeFromList } = props;
    return <li className="favorites-item">
        <Link className="show-city-weather-link" to={`/cities/${city.name}`}>{city.name}</Link>
        <button className="button delete-button" onClick={removeFromList}>Delete</button>
    </li>;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AppAction>, ownProps: { city: City }) => {
    const { id } = ownProps.city;
    return {
        removeFromList: () => dispatch(removeCity(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityListItem)