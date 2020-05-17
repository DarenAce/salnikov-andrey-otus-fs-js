import React, { FormEvent, Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AppState, UpdateCurrentWeatherAction } from '../types';
import { updateCurrentWeather } from '../store/actions';

interface SearchFormProps {
    loadCurrentWeather: (cityName: string) => void;
    city: string | null;
}

interface SearchFormState {
    city: string | null;
}

class SearchForm extends Component<SearchFormProps, SearchFormState> {
    constructor(props: SearchFormProps) {
        super(props);
        this.state = {
            city: this.props.city
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { city } = this.state;
        return <form className="search-form" onSubmit={this.handleSubmit}>
            <input type="text" className="search-field" onChange={(e) => this.setState({ city: e.target.value })} placeholder="Type city name..." />
            <button type="submit" className="search-button" disabled={city === null || city === undefined || city.length === 0}>Search</button>
        </form>;
    };

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const { city } = this.state;
        if (city) {
            this.props.loadCurrentWeather(city);
            this.setState({ city: "" });
        }
    }
}

const mapStateToProps = (state: AppState) => ({
    city: state.cities.selected
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, UpdateCurrentWeatherAction>) => ({
    loadCurrentWeather: (cityName: string) => dispatch(updateCurrentWeather(cityName))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
