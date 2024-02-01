import React from "react";
import PropTypes from "prop-types";
import { Form, Spinner } from "react-bootstrap";

const Search = ({ isSearching, onLocationChange }) => {
  return (
    <div className="m-auto w-4/5 md:w-3/5 lg:w-1/2">
      <Form className="mx-2 flex flex-row justify-start md:justify-center border-b border-green-300 p-2 dark:border-white">
        <svg
          width="24"
          height="24"
          fill="none"
          className="mr-2 text-green-600 transition-colors duration-200 group-hover:text-gray-500 dark:text-white"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <Form.Control
          type="search"
          role="search"
          onChange={onLocationChange}
          placeholder="Search for a location"
          className="mr-4 md:mr-8 w-48 text-center placeholder-gray-500 outline-none dark:bg-black dark:text-white dark:placeholder-white md:w-96"
        />
        {isSearching ? (
          <Spinner
            animation="border"
            variant="primary"
            role="status"
            className="mt-1 -ml-1 h-5 w-5 animate-spin"
          >
            <title>Search for a location</title>
          </Spinner>
        ) : null}
      </Form>
    </div>
  );
};

Search.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  onLocationChange: PropTypes.func.isRequired,
};

export default Search;
