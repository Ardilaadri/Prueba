import React from "react";
import "../assets/styles/components/Item.scss";

const Item = () => (
  <section className="products">
    <div className="products-container">
      <div className="item">
        <div className="images">
          <img
            src="https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_960_720.jpg"
            alt=""
          />
        </div>
        <div className="info">
          <div className="price">
            <h2>$ 1.980</h2>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes,
            </p>
            <h3>Capital federal</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Item;
