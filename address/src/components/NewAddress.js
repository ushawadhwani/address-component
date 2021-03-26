import React from "react";
import Autosuggest from "react-autosuggest";
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import AutosuggestHighlightParse from "autosuggest-highlight/parse";
const addressArray = [
  {
    add1: "10-a",
    add2: "K-G Park",
    zipcode: "382475",
    city: "Ahmedabad",
  },
  {
    add1: "11-y",
    add2: "Swareet",
    zipcode: "382485",
    city: "Ahmedabad",
  },
  {
    add1: "78521",
    add2: "Green acres",
    zipcode: "382477",
    city: "Ahmedabad",
  },
  {
    add1: "Gatlodia",
    add2: "Karmacity",
    zipcode: "382485",
    city: "Ahmedabad",
  },
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("\\b" + escapedValue, "i");

  return addressArray.filter((person, index) =>
    regex.test(getSuggestionValue(person, index))
  );
}

function getSuggestionValue(suggestion, index) {
  return ` ${index}${suggestion.add1} ${suggestion.add2} ${suggestion.city} ${suggestion.zipcode}`;
}

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.add1} ${suggestion.add2} ${suggestion.city} ${suggestion.zipcode}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className={"suggestion-content " + suggestion.twitter}>
      <span className="name">
        {parts.map((part, index) => {
          const className = part.highlight ? "highlight" : null;

          return (
            <span className={className} key={index}>
              {part.text}
            </span>
          );
        })}
      </span>
    </span>
  );
}

export default class NewAddress extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange,
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
