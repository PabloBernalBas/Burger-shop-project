import React from "react";
import { Country, State } from "country-state-city";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
              {/* Complete the code for the COUNTRY DROPDOWN*/}
            <label>Country</label>

            <select>
              <option value="">Country</option>
              {/* Enter the code here for country dropdown*/}
                {Country && 
                  Country.getAllCountries().map((i) => (
                    <option value="{i.isoCode}" key="{i.isoCode}">
                      {i.name}
                  </option>
                ))}
              </select>
          </div>
          <div>
              {/* Add the code for the STATE DROPDOWN*/}
              <label>State</label>

              <select>
                <option value="">State</option>
                {State && 
                  State.getStatesOfCountry("IN").map((i) => (
                    <option value="{i.isoCode}" key="{i.isoCode}">
                      {i.name}
                    </option>
                  ))}
              </select>

          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
        {/* Enter thr code for contact */}  
        <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone No." />
          </div>

          <Popup
            trigger={
              <Link className="link" to="/myorders">
                Confirm Order
              </Link>
            }
          >
            <div
              style={{
                color: "red",
                transform: "translate(0%,-500%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Order Successfully Placed!
            </div>
            </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;