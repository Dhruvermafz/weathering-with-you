import React from "react";
import Layout from "./Layout";
import { Container, Card, Button } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Layout>
        <Container className="mt-5">
          <Card className="p-4 text-gray-500 dark:text-gray-400">
            <Card.Body>
              <Card.Title
                as="h3"
                className="font-sans text-xl font-medium text-gray-600 dark:text-white"
              >
                About Weathering With You
              </Card.Title>
              <Card.Text className="pt-4">
                Weathering With You is a beautiful weather app built on top of
                the{" "}
                <a
                  className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                  href="https://openweathermap.com/api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenWeatherMap API
                </a>
                .
              </Card.Text>
              <Card.Text className="pt-4">
                Check out more on{" "}
                <a
                  className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                  href="https://dhruvermafz.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dhruv Verma
                </a>
              </Card.Text>
              <Card.Text className="pt-4">
                It runs on{" "}
                <a
                  className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>{" "}
                and{" "}
                <a
                  className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                  href="https://react-bootstrap.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bootstrap
                </a>
                . It is hosted on{" "}
                <a
                  className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                  href="https://weathering-with-you-theta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </a>
                . If you like the project, please fork it on{" "}
                <a
                  className="text-indigo-500 underline hover:text-indigo-700 dark:text-gray-300 dark:hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Dhruvermafz/weathering-with-you"
                >
                  GitHub
                </a>{" "}
                and leave a star!
              </Card.Text>
              <Card.Text className="pt-4">
                Thanks for swinging by. Enjoy the rest of your day!
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Layout>
    </>
  );
};

export default About;
