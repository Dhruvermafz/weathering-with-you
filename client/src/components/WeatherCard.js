import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import Loading from "./Loading";
import { useWeather } from "../hooks/useWeather";
import PropTypes from "prop-types";
dayjs.extend(utc);
const WeatherCard = ({ location, units }) => {
  const { weather, isLoading, isError } = useWeather(
    "weather",
    location,
    units
  );

  if (isLoading || isError) return <Loading />;
  return (
    <>
      <div className="m-4">
        <div className="sm">
          <p className="text-2xl font-semibold tracking-wide dark:text-white">
            {weather.location}, {weather.country}
          </p>
          <p className="tracking-wide text-gray-500 dark:text-gray-400">
            {dayjs(weather.date).format("dddd")},{" "}
            {dayjs
              .utc(weather.date)
              .utcOffset(weather.timezone)
              .format("h:mm A")}
            , {weather.description}
          </p>
        </div>
        <div className="my-8 flex flex-row justify-between text-5xl tracking-wide lg:my-4 lg:text-6xl">
          <span className="mt-6 font-light text-gray-500 dark:text-white md:mt-10">
            {weather.temperature}&deg;
            <span className="mt-1 flex flex-col text-base font-normal tracking-wide text-gray-500 dark:text-gray-400">
              Feels like {weather.feels_like}&deg;
            </span>{" "}
          </span>
          <div className="mt-4 text-8xl text-indigo-700 dark:text-white sm:text-9xl">
            <span className={weather.weatherIcon}></span>
          </div>
        </div>
        <div className="mt-1 text-indigo-700 dark:text-gray-400">
          <span className="wi wi-strong-wind text-xl"></span>
          <span className="ml-1 mr-2 tracking-wide text-gray-500 dark:text-white">
            {weather.wind_speed}
          </span>
          <span className="wi wi-humidity text-xl"></span>
          <span className="ml-1 tracking-wide text-gray-500 dark:text-white">
            {weather.humidity}% humidity
          </span>
        </div>
        <div className="mt-10 mb-4 text-center text-2xl tracking-wide text-gray-500 dark:text-white">
          {weather.weatherRecommendation}
        </div>
      </div>
    </>
  );
};

export default WeatherCard;

WeatherCard.propTypes = {
  location: PropTypes.string,
};
