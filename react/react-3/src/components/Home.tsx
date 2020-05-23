import React from "react";
import { connect } from "react-redux";
import { AppState } from "../types";
import CityList from "./CityList";
import CurrentCityWeather from "./CurrentWeather";
import SearchForm from "./SearchForm";

interface HomeProps {
    city: string
}

const Home = (props: HomeProps) => {
    const { city } = props;
    return <div className="home-screen">
        <CityList />
        <div className="search-section">
            <SearchForm />
            {city && (<CurrentCityWeather />)}
        </div>
    </div>
};

const mapStateToProps = (state: AppState) => ({
    city: state.current
});

export default connect(mapStateToProps)(Home)