import React from "react";
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from "../components/Footer";
import news from '../components/news';

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="card-container">
        {news.map((item) => (
          <Card
            key={item.source.id} // React uses this key internally
            title={item.title}
            description={item.description}
            imageUrl={item.urlToImage}
            url={item.url}
          />
        ))}
      </div>

      {/* Optional inline styling for the card container */}
      <style jsx>{`
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
          padding: 16px;
        }
      `}</style>
      <Footer/>
        </>
    )
}
export default Home