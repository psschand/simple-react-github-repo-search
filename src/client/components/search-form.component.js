import React, { Component } from 'react';

const API_KEY = 'ad3574aa';
export default class SearchForm extends Component{
    state = {
        input: ''
    }

    _handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

 
    _handleSubmit = (e) => {
        e.preventDefault();
        const {input} = this.state;
      
        const url ='/api/searchrepo/'+ input
        // console.log(input)
        // console.log("url for ", url)
        // const url = `https://api.github.com/search/repositories?q=${input}&sort=stars&order=desc`;
        fetch(url)
            .then( response => response.json())
            .then( results => {
                const { total_count=0, incomplete_results= false, items= [] } =results
                // console.log(results)
                // console.log(results['items'])
                console.log( "test data",total_count, incomplete_results, items)
                this.props.onResults(items);
         
                    });
  

     
    }

    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                        className="input" 
                        type="text" 
                        onChange={this._handleChange}
                        placeholder="search repo"/>
                    </div>
                    <div className="control">
                        <button data-testid="search-button" className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}