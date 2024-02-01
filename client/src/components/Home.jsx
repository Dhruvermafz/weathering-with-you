
import React from 'react';
import Layout from './Layout';
import WeatherCard from './WeatherCard';
import Forecast from './ForcastCard';
import Search from './Search';
import debounce from 'lodash/debounce';
import { Container } from 'react-bootstrap';

const searchTimeoutInMs = 500;

const Home = () => {
  const [location, setLocation] = React.useState('Eldoret');
  const [isSearching, setIsSearching] = React.useState(false);
  const [units, setUnits] = React.useState('metric');

  const debounceSearch = React.useMemo(
    () =>
      debounce((searchTerm) => {
        setLocation(searchTerm);
      }, searchTimeoutInMs),
    [],
  );

  const handleLocationChange = (location) => {
    setIsSearching(true);
    if (location) {
      debounceSearch(location);
    }
    setIsSearching(false);
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
  };

  return (
    <Layout>
      <main>
        <Container className="w-5/6 mx-auto md:w-full xl:max-w-6xl 2xl:max-w-7xl">
          <Search
            location={location}
            isSearching={isSearching}
            onLocationChange={(event) =>
              handleLocationChange(event.target.value)
            }
          />

          <div className="w-full h-auto m-auto mt-4 overflow-hidden divide-y-2 rounded-lg shadow-lg divide-light-blue-400 md:w-3/5 lg:w-1/2">
            <WeatherCard location={location} units={units} />
            <Forecast location={location} units={units} />
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default Home;
