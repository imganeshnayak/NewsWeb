import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 15; // Update the number of items per page to 15

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=dbb5b90a268345549ad00cc09b08a03a"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="card-container">
        {currentItems.map((item) => (
          <Card
            key={item.url}
            title={item.title}
            description={item.description}
            imageUrl={item.urlToImage}
            url={item.url}
          />
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <style >{`
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
          padding: 16px;
        }
        .pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }
        .pagination button {
          padding: 8px 12px;
          border: none;
          background-color: #007bff;
          color: white;
          cursor: pointer;
        }
        .pagination button:disabled {
          background-color: #cccccc;
        }
      `}</style>
      <Footer />
    </>
  );
};

export default Home;
