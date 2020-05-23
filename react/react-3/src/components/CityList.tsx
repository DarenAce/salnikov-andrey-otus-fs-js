import React from "react";
import { connect } from "react-redux";
import { City, AppState } from "../types";
import CityListItem from "./City";

interface CityListProps {
    cities: City[];
}

const CityList = (props: CityListProps) => {
    const { cities } = props;
    return <div className="favorites-section">
        <h2 className="favorites-header">Favorite cities</h2>
        {cities.length > 0 && (
            <ul className="favorites-list">
                {cities.map(city => (
                    <CityListItem city={city} key={city.id} />
                ))}
            </ul>
        )}
    </div>;
};

const mapStateToProps = (state: AppState) => ({
    cities: state.cities
});

export default connect(mapStateToProps)(CityList)