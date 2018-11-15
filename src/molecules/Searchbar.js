import React from 'react';
import Autosuggest, {AutosuggestHighlightMatch ,AutosuggestHighlightParse} from 'react-autosuggest';


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion, { query }) {
    const matches = AutosuggestHighlightMatch(suggestion.name, query);
    const parts = AutosuggestHighlightParse(suggestion.name, matches);

    return (
        <span>
        {parts.map((part, index) => {
            const className = part.highlight ? 'react-autosuggest__suggestion-match' : null;

            return (
            <span className={className} key={index}>
                {part.text}
            </span>
            );
        })}
        </span>
    );
}
    
class Searchbar extends React.Component {
    constructor() {
        super();

        this.state = {
        value: '',
        suggestions: []
        };    
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
        value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
        suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
        suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
        placeholder: "Type 'c'",
        value,
        onChange: this.onChange
        };

        return (
            <Autosuggest 
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default Searchbar;