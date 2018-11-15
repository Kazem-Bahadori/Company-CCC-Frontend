import React from 'react';
import Searchbar from '../molecules/Searchbar';

class SearchPage extends React.Component {
    
 getSuggestionList(listOfSuggestions){
    return (
        listOfSuggestions.map(suggestion => 
        sortedList["name"] = suggestion
        )
    )
    
}
    render () {
        return(
            <div>
                <h1>Search...</h1>
                <Searchbar suggestionList={suggestionList}/>
            </div>        
        )        
    }
}

export default SearchPage;