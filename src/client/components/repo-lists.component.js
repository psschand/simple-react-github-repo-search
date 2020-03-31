import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Repo from './repo.component';

export default class RepoList extends Component {
    static propTypes = {
        repos: PropTypes.array
    }

    render(){
        const { repos } = this.props;
        return(
            <div className='RepoList'>
                {
 
                    repos.map(repo => {
                        return (
                            <div key={repo.id} className='RepoList-item'>
                                <Repo 
                                    id={repo.id}
                                    title={repo.name} 
                                    name={repo.full_name} 
                                    owner_name={repo.owner.login}
                                    poster={repo.owner.avatar_url}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}