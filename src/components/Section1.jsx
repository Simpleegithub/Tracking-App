import { useState } from "react";
import Togglebtn from "./Togglebtn";

function Section1() {
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [location, setLocation] = useState("");
  const [location2, setLocation2] = useState("");
  const [pickupPoint, setPickupPoint] = useState();
  const [pickupPoint2, setPickupPoint2] = useState();
  console.log(selectedOption);
  console.log(location);

  function handlechange(e) {
    setSelectedOption(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setPickupPoint(location);
  }

  function handleClick2(e) {
    e.preventDefault();
    setPickupPoint2(location2);
    console.log(location2, "form point 25");
  }

  function handlesubmitlocaiton(e) {
    setLocation(e.target.value);
  }

  function handlesubmitlocaiton2(e) {
    setLocation2(e.target.value);
  }

  function handleCancel() {
    setPickupPoint("");
  }

  function handleCancel2() {
    setPickupPoint2("");
  }

  console.log(selectedOption);
  return (
    <div className="Container">
      <div className="route ">
        <form action="">
          <div className="form-group">
            <label htmlFor="">Route Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Type name of route"
            />
          </div>

          <div className="radio-buttons">
            <div className="first-radio-btn">
              <input
                type="radio"
                name="singlePoint"
                id="singlePoint"
                value="singlePoint"
                onChange={handlechange}
                checked={selectedOption == "singlePoint"}
              />
              <label htmlFor="">Single Point</label>
            </div>
            <div className="second-radio-btn">
              <input
                type="radio"
                name="MultiPoint"
                id="MultiPoint"
                value="MultiPoint"
                onChange={handlechange}
                checked={selectedOption === "MultiPoint"}
              />
              <label htmlFor="">Multi Point</label>
            </div>
          </div>

          {(selectedOption === "singlePoint" || selectedOption === "MultiPoint")  && !pickupPoint && (
            <div className="Pickup-Point-1">
              <label htmlFor="">Pickup location 1</label>
              <div className="Pickup-group">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Pickup Point 1"
                  onChange={handlesubmitlocaiton}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button className="add-btn" onClick={handleClick}>
                  +
                </button>
              </div>
            </div>
          )}

          {selectedOption==='MultiPoint' && (
                 <div className="Pickup-Point-1">
                 <label htmlFor="">Pickup location 1</label>
                 <div className="Pickup-group">
                   <input
                     type="text"
                     name=""
                     id=""
                     placeholder="Enter Pickup Point 1"
                     onChange={handlesubmitlocaiton}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   />
                   <button className="add-btn" onClick={handleClick}>
                     +
                   </button>
                 </div>
               </div>
          )}

          {pickupPoint && (
            <div className="Pickup-Point-1">
              <label htmlFor="">{`Drop off location 1 ${pickupPoint}`}</label>
              <div className="Pickup-group">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Pickup Point 1"
                  onChange={handlesubmitlocaiton}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button onClick={handleCancel}>-</button>
                <button className="green-btn" onClick={handleClick}>
                  +
                </button>
              </div>
            </div>
          )}

          {(selectedOption === "singlePoint" || selectedOption === "MultiPoint")  && !pickupPoint2 && (
            <div className="Pickup-Point-1">
              <label htmlFor="">{`Drop off location 1 `}</label>
              <div className="Pickup-group">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Destination 1"
                  onChange={handlesubmitlocaiton2}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button className="green-btn" onClick={handleClick2}>
                  +
                </button>
              </div>
            </div>
          )}

          {selectedOption==='MultiPoint' && (
                  <div className="Pickup-Point-1">
                  <label htmlFor="">{`Drop off location 2 `}</label>
                  <div className="Pickup-group">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter Destination 1"
                      onChange={handlesubmitlocaiton2}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button className="green-btn" onClick={handleClick2}>
                      +
                    </button>
                  </div>
                </div>
          )}

          {pickupPoint2 && (
            <div className="Pickup-Point-1">
              <label htmlFor="">{`Drop off location 2 ${pickupPoint2}`}</label>
              <div className="Pickup-group">
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={handlesubmitlocaiton2}
                  placeholder="Enter Destination 2"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button onClick={handleCancel2}>-</button>
                <button className="green-btn" onClick={handleClick2}>
                  +
                </button>
              </div>
            </div>
          )}

          <div className="extra-Km-travel">
            <Togglebtn color="" isChecked={true} />
            <p>Will Vehical Travel extra Km</p>
          </div>

          <div className="Pickup-Point-1">
            <label htmlFor="">Extra KM</label>
            <div className="Pickup-group">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Pickup Point 1"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="distance">
        <form action="">
          <h3 className="main-heading">
            {" "}
            <span>Step 2</span>: Distance To & From
          </h3>

          <p className="distance-heading">Where Vehicle is standing ?</p>
          <div className="radio-buttons custom-btns">
            <div className="first-radio-btn">
              <input
                type="radio"
                name="singlePoint"
                id=""
                value="singlePoint"
              />
              <label htmlFor="">Custom Address</label>
            </div>
            <div className="second-radio-btn">
              <input
                type="radio"
                name="singlePoint"
                id=""
                value="singlePoint"
              />
              <label htmlFor="">Manual KMS</label>
            </div>
          </div>

          <div className="Pickup-Point-1">
            <label htmlFor="">Extra KM</label>
            <div className="Pickup-group">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Pickup Point 1"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="time-group-btn">
            <div className="flex">
              <Togglebtn color="green" />

              <p>Calculate Time Automatically</p>
            </div>

            <input
              type="text"
              name=""
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="450 Mins"
            />
          </div>
          <p className="Time-heading">Where Vehicle is standing ?</p>
          <div className="radio-buttons custom-btns">
            <div className="first-radio-btn">
              <input
                type="radio"
                name="singlePoint"
                id=""
                value="singlePoint"
              />
              <label htmlFor="">Custom Address</label>
            </div>
            <div className="second-radio-btn">
              <input
                type="radio"
                name="singlePoint"
                id=""
                value="singlePoint"
              />
              <label htmlFor="">Manual KMS</label>
            </div>
          </div>
          <div className="Pickup-Point-1">
            <label htmlFor="">Extra KM</label>
            <div className="Pickup-group">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Pickup Point 1"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="time-group-btn">
            <div className="flex">
              <Togglebtn color="green" />

              <p>Calculate Time Automatically</p>
            </div>

            <input
              type="text"
              name=""
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="450 Mins"
            />
          </div>
        </form>
      </div>

      <div className="time">
        <form>
          <h3 className="main-heading third-col-heading ">
            <span>Step 3</span>: Pickup & Dropoff{" "}
          </h3>
          <div className="whole-loading-time">
            <div className="flex flex-col  w-auto">
              <label htmlFor="">Laoding Time</label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Uplaoding Time</label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>
          </div>

          <div className="whole-loading-time">
            <div className="flex flex-col  w-auto">
              <label htmlFor="">Break</label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Time</label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>
          </div>

          <div className="whole-loading-time">
            <div className="flex flex-col  w-auto">
              <label htmlFor="">Break</label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="">Time</label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Section1;
