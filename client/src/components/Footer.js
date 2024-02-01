import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="text-center py-5">
        <div className="text-sm text-muted">
          Crafted by{" "}
          <a
            className="text-primary"
            href="https://dhruvermafz.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dhruv Verma
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
