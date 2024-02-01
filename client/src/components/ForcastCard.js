import React from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useWeather } from "../hooks/useWeather";
import Loading from "./Loading";
import { ListGroup } from "react-bootstrap";

const Forecast = ({ location, units }) => {
  const { forecast, isLoading, isError } = useWeather(
    "forecast",
    location,
    units
  );

  if (isLoading || isError) return <Loading />;

  return (
    <div className="m-4">
      <ListGroup variant="flush">
        {forecast.map((item, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <span>{dayjs(item.dt_txt).format("dddd")}</span>
            <span className="text-2xl text-indigo-700">
              <span className={item.forecastIcon}></span>
            </span>
            <span>
              {item.min}&deg; / {item.max}&deg;
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

Forecast.propTypes = {
  location: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
};

export default Forecast;
