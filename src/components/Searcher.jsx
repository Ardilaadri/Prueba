import React from "react";
import "../assets/styles/components/Searcher.scss";

const Searcher = () => (
  <section className="search">
    <div className="search-container">
      <div className="logo">
        <a href="google.com">
          <img src="https://i.postimg.cc/YS1yRxGT/Logo-ML.png" alt="logo" />
        </a>
      </div>
      <div className="search-input">
        <input type="text" placeholder="Nunca dejes de buscar" />
        <div className="autocomplete"></div>
        <div className="icon">
          <img src="https://i.postimg.cc/3RYfcD2N/ic-Search.png" alt="icon" />
        </div>
      </div>
    </div>
  </section>
);

export default Searcher;
