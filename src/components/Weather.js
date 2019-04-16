import React from "react";

function Weather(props) {
  const celsius = Math.floor(props.temperature - 273.15);
  return (
    <div>
      <p className="p-response">
        {props.city && props.country && (
          <span>
            Location: {props.city}, {props.country}
          </span>
        )}
      </p>
      <p className="p-response">
        {props.temperature && <span>Temperature: {celsius}&#8451;</span>}
      </p>
      <p className="p-response">
        {props.humidity && <span>Humidity: {props.humidity}</span>}
      </p>
      <p className="p-response">
        {props.description && <span>Conditions: {props.description}</span>}
      </p>
    </div>
  );
}
export default Weather;
