import React from "react";
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

export default class CustomAddress extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event) => {
    var query = event.target.value;
    var newArray = addressArray.filter((item) => {
      const suggestionText = `${item.add1} ${item.add2} ${item.city} ${item.zipcode}`;
      if (suggestionText.toLowerCase().includes(query.toLowerCase())) {
        return item;
      }
    });
    this.setState({
      value: event.target.value,
      suggestions: newArray,
    });
  };

  render() {
    const { value, suggestions } = this.state;

    return (
      <>
        <input
          name="address"
          type="text"
          value={value}
          onChange={this.onChange}
          placeholder="type swareet"
        />

        {value !== "" && suggestions.length > 0 && (
          <div class="list">
            Do u mean this?
            <ul>
              {suggestions.map((data, index) => {
                return (
                  <li key={index}>
                    {data.add1} {data.add2} {data.zipcode} {data.city}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </>
    );
  }
}
