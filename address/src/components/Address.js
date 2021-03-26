import React, { Component } from "react";
export default class Address extends Component {
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
                      <input name="hno" type="text" />
                      <input name="society" type="text" />
                      <input name="landmark" type="text" />
                      <select name="area">
                        <option value="" selected>
                          Select your delivery area
                        </option>
                        {/* {areaList &&
                          areaList.length > 0 &&
                          areaList.map((data, index) => {
                            return <option key={index}>{data.name}</option>;
                          })} */}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="checkout__input">
                      <p>
                        Town/City<span></span>
                      </p>
                      <input readOnly name="city" type="text" />
                    </div>

                    <div className="checkout__input">
                      <p>
                        Pin Code<span>*</span>
                      </p>
                      <input name="pincode" type="text" />
                    </div>
                  </div>
                  <div className="row my-button">
                    <button type="button" className="site-btn">
                      Save Address
                    </button>
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
