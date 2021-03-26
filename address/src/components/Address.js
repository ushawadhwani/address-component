import React, { Component } from "react";
import AddressConfirmationDialogs from "./AddressConfirmDialog";
export default class Address extends Component {
  state = {
    openModal: false,
    hno: "10",
    society: "k-g-park",
    landmark: "Indira bridge",
    state: "Gujarat",
    city: "Ahmedabad",
    pincode: "382475",
  };
  cityList = [
    { name: "Ahmedabad" },
    { name: "Surat" },
    { name: "Rajkot" },
    { name: "Baroda" },
  ];
  stateList = [{ name: "Gujarat" }];
  updateValues = (target) => {
    this.setState({ [target.target.name]: target.target.value });
  };

  handleClickOpen = () => {
    this.setState({
      openModal: true,
    });
  };
  handleClose = () => {
    this.setState({
      openModal: false,
    });
  };
  render() {
    return (
      <div>
        <section className="checkout spad">
          <div className="container">
            <div className="checkout__form">
              <h4>Address Details</h4>
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="checkout__input">
                      <p>
                        Address<span>*</span>
                      </p>
                      <input
                        name="hno"
                        type="text"
                        value={this.state.hno}
                        onChange={this.updateValues}
                        placeholder="Block No"
                      />
                      <input
                        name="society"
                        type="text"
                        value={this.state.society}
                        onChange={this.updateValues}
                        placeholder="Society name"
                      />
                      <input
                        name="landmark"
                        type="text"
                        value={this.state.landmark}
                        onChange={this.updateValues}
                        placeholder="Landmark"
                      />
                      <select
                        name="city"
                        value={this.state.city}
                        onChange={this.updateValues}
                      >
                        <option value="" selected>
                          Select your City
                        </option>
                        {this.cityList.map((data, index) => {
                          return <option key={index}>{data.name}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="checkout__input">
                      <select
                        name="state"
                        onChange={this.updateValues}
                        value={this.state.state}
                      >
                        <option value="" selected>
                          Select your State
                        </option>
                        {this.stateList.map((data, index) => {
                          return <option key={index}>{data.name}</option>;
                        })}
                      </select>
                    </div>

                    <div className="checkout__input">
                      <p>
                        Pin Code<span>*</span>
                      </p>
                      <input
                        name="pincode"
                        type="text"
                        onChange={this.updateValues}
                        value={this.state.pincode}
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <button
                      type="button"
                      className="site-btn"
                      onClick={this.handleClickOpen}
                    >
                      Save Address
                    </button>
                    <AddressConfirmationDialogs
                      open={this.state.openModal}
                      handleClose={this.handleClose}
                      address={this.state}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
