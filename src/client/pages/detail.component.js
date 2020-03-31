import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from '../components/button-back-to-home.component';

const API_KEY = 'ad3574aa';

export default class Detail extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    // static propTypes = {
    //     match: PropTypes.shape({
    //         params: PropTypes.array,
            
    //     })
    // }
    

    state = {
        repo: {},
        url:""
    }

    // https://api.github.com/repositories/76954504
    _fetchRepo = ({ id }) => {
        // const url ='/api/searchrepo/'+ input
        // fetch(`https://api.github.com/repositories/${id}`)
        const url =`/api/getrepo/${id}`
        // console.log("url for detail ",url)
        fetch(url)
        .then(res => res.json())
        .then(repo => {
            console.log(" single repo  ",repo)
            console.log(" image  ",repo.owner)
            console.log(" image  ",repo.owner.avatar_url)
            this.setState({
                repo,
                url:repo.owner.avatar_url
            })
        });
    }

    componentDidMount = () => {
        const  { id } = this.props.match.params;
        this._fetchRepo({id});
    }

    render(){
        const  result  = this.state.repo;
        const  url  = this.state.url;
        return(
            <div>
                <ButtonBackToHome />
                <h1 className="title">{result.login}</h1>
                <img src={url} alt={result.description}/>
                <h3>{result.html_url}</h3>
                <span>{result.description}</span>
                <p>Created at {result.created_at}</p>
                <p>Updated at {result.updated_at}</p>
                <p>Forks count {result.forks_count}</p>
                <p>Watchers Count {result.watchers_count}</p>
            </div>
        )
    }
}