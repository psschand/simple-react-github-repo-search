import React, { Component } from 'react';
import RepoList from '../components/repo-lists.component';
import SearchForm from '../components/search-form.component';
import {Title} from '../components/title.component';

export default class Home extends Component{

    state = {
        results: [],
        usedSearch: false
    }
    

    _handleResults = (results) => {
        this.setState({
        results,
        usedSearch: true
        });
    }

    _renderResults = () => {
        console.log("length",this.state.results.length)
        return this.state.results.length === 0
            ? <p>No hay resultados</p>
            : <RepoList repos={this.state.results}/>
    }
    render(){
        return(
            <div>
                <Title>Search Repos</Title>
                <div className='SearchForm-wrapper'>
                <SearchForm onResults={this._handleResults}/>
                </div>
                {
                this.state.usedSearch 
                ? this._renderResults() 
                : <small>Use the input to write a repo name to search</small>
                }
            </div>
        )
    }
}