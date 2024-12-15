import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const navbarStyle = {
    background: "linear-gradient(90deg, #6a11cb, #2575fc)", // Gradient color
    color: "#fff", // Text color
  };

  // State to track the search query
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (onSearch) {
      onSearch(searchTerm); // Trigger the parent-provided search function
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          <strong> DAILY BUZZ</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm} // Controlled input
              onChange={(e) => setSearchTerm(e.target.value)} // Update state
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
