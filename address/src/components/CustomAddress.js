import React from "react";
import Popper from "@material-ui/core/Popper";
import addressData from "../assets/json/address.json";

const addressArray = addressData.addresses;

export default class CustomAddress extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
      anchorEl: null,
    };
  }

  onChange = (event) => {
    var query = event.target.value;
    var newArray = addressArray.filter((item) => {
      const suggestionText = `${item.address1} ${item.address2} ${item.city} ${item.zipcode}`;
      if (suggestionText.toLowerCase().includes(query.toLowerCase())) {
        return item;
      }
    });
    this.setState({
      value: event.target.value,
      suggestions: newArray,
      anchorEl: event.currentTarget,
    });
  };

  listItemClicked = (event) => {
    const data = this.state.suggestions[event.currentTarget.id];
    this.setState({
      value: `${data.address1}, ${data.address2}, ${data.city}, ${data.zipcode}`,
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    return (
      <div class="container">
        <input
          name="address"
          type="text"
          value={value}
          onChange={this.onChange}
          placeholder="Enter Address Here"
          class="inputBox"
        />
        <Popper
          id={"simple-popper"}
          open={value !== "" && suggestions.length > 0}
          anchorEl={this.state.anchorEl}
          class="paper"
        >
          <div class="list">
            <b>Did you mean this address?</b>
            <hr class="hr1" style={{ margin: "10px" }} />
            {suggestions.map((data, index) => {
              return (
                <>
                  <li onClick={this.listItemClicked} id={index}>
                    {`${data.address1}, ${data.address2},`} <br />
                    {`${data.city}, ${data.zipcode}`}
                  </li>
                  <hr class="hr" />
                </>
              );
            })}
          </div>
        </Popper>

        {/* {value !== "" && suggestions.length > 0 && (
          <div class="list">
            Do u mean this?
            <ul>
              {suggestions.map((data, index) => {
                return (
                  <li key={index}>
                    {data.address1} {data.address2} {data.zipcode} {data.city}
                  </li>
                );
              })}
            </ul>
          </div>
        )} */}
      </div>
    );
  }
}
