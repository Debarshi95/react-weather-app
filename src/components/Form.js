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
        <label className="labels">Country: </label>
        <input
          type="text"
          name="country"
          className="input"
          placeholder="Enter a country name"
          required
        />
        <button type="submit" className="btn-submit">
          Get Details
        </button>
      </form>
    </div>
  );
}
export default Form;
