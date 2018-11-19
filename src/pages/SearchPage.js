import React from 'react';
import SearchResult from '../molecules/SearchResult.js';

class SearchPage extends React.Component {
    state = {
        games: [],
        streamers: [],
    };
    render () {
        const { games, streamers} = this.state;
        return(
            <div>
                <h1>Search...</h1>
                < SearchResult games={games} streamers={streamers} />
            </div>
            
        )        
    }
}

export default SearchPage;