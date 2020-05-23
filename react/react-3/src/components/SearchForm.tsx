import React, { FormEvent, Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { AppState, UpdateCurrentWeatherAction } from '../types';
import { selectCity } from '../store/actions';

interface SearchFormProps {
    city: string;
    selectCity: (cityName: string) => void;
}

interface SearchFormState {
    input: string | null;
}

class SearchForm extends Component<SearchFormProps, SearchFormState> {
    constructor(props: SearchFormProps) {
        super(props);
        this.state = {
            input: this.props.city
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { input } = this.state;
        return <form className="search-form" onSubmit={this.handleSubmit}>
            <input type="text" className="search-field" onChange={(e) => this.setState({ input: e.target.value })} placeholder="Type city name..." />
            <button type="submit" className="button search-button">Search</button>
        </form>;
    };

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const { input: city } = this.state;
        if (city) {
            this.props.selectCity(city);
            this.setState({ input: "" });
        }
    }
}

const mapStateToProps = (state: AppState) => ({
    city: state.current
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, UpdateCurrentWeatherAction>) => ({
    selectCity: (cityName: string) => dispatch(selectCity(cityName))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
