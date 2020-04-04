import React, { Component } from 'react';

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handleInput: (event: React.FormEvent<HTMLInputElement>) => void,
    searchValue: string
}

export default class SearchForm extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { handleSubmit, handleInput, searchValue } = this.props;
        return <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" className="search-field" onChange={handleInput} placeholder="Type city name..." />
            <button type="submit" className="search-button" disabled={searchValue.length === 0}>Search</button>
        </form>;
    }
}