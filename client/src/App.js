import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { apiKey } from "./config";
import "./App.css";
const API_KEY = apiKey;

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values.",
      });
    }
  };
  render() {
    return (
      // <div>
      //   <div className="wrapper">
      //     <div className="main">
      //       <div className="container">
      //         <div className="row">
      //           <div className="col-xs-5 title-container">
      //             <h1 className="title-container__title">
      //               Weathering With You
      //             </h1>
      //           </div>
      //           <div className="col-xs-7 form-container">
      //             <Form getWeather={this.getWeather} />
      //             <Weather
      //               temperature={this.state.temperature}
      //               humidity={this.state.humidity}
      //               city={this.state.city}
      //               country={this.state.country}
      //               description={this.state.description}
      //               error={this.state.error}
      //             />
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
