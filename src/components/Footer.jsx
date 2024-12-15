import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">© 2024 Your Company Name. All Rights Reserved.</p>
        <ul className="list-inline mt-2">
          <li className="list-inline-item">
            <a href="https://facebook.com" className="text-white text-decoration-none">
              Facebook
            </a>
          </li>
          <li className="list-inline-item mx-3">
            <a href="https://twitter.com" className="text-white text-decoration-none">
              Twitter
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://instagram.com" className="text-white text-decoration-none">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
