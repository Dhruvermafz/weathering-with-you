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
            href="https://denniskigen.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dennis
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
