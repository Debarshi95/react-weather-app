import React, { Component } from "react";
import axios from "axios";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";

const API_KEY = "";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      city: "",
      country: "",
      humidity: "",
      description: ""
    };
  }


  getWeatherData = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      )
      .then(res => {
        console.log(res.data);
        if (city && country) {
          this.setState({
            temperature: res.data.main.temp,
            city: res.data.name,
            country: res.data.sys.country,
            humidity: res.data.main.humidity,
            description: res.data.weather[0].description
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="card">
        <p className="p">Get Weather Details</p>
        <Form getWeatherData={this.getWeatherData} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
