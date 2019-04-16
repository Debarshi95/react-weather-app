import React from "react";

function Form(props) {
  return (
    <div className="form">
      <form onSubmit={props.getWeatherData}>
        <label className="labels">City: </label>
        <input
          type="text"
          name="city"
          className="input"
          placeholder="Enter a city name"
          required
        />
        <br />
        <label className="labels left">Country: </label>
        <input
          type="text"
          name="country"
          className="input"
          placeholder="Enter country name"
          required
        />
        <br />
        <button type="submit" className="btn-submit">
          Get Details
        </button>
      </form>
    </div>
  );
}
export default Form;
