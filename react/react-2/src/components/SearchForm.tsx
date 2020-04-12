import React, { Component } from 'react';

interface IProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handleInput: (event: React.FormEvent<HTMLInputElement>) => void,
    searchValue: string
}

export default (props: IProps) => {
    const { handleSubmit, handleInput, searchValue } = props;
    return <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" className="search-field" onChange={handleInput} placeholder="Type city name..." />
        <button type="submit" className="search-button" disabled={searchValue.length === 0}>Search</button>
    </form>;
}
