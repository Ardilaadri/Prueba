import React from "react";
import "../assets/styles/components/Results.scss";

const Results = () => (
  <section className="results">
    <div className="results-container">
      <div className="left">
        <img
          src="https://cdn.pixabay.com/photo/2016/12/26/06/16/i-phone-1931557_960_720.jpg"
          alt="celular"
        />
        <h3>Descripción del producto</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet.
        </p>
      </div>
      <div className="right">
        <p>Nuevo - 234 vendidos</p>
        <h3>
          Deco Reverse
          <br />
          Sombrero Oxford
        </h3>
        <h2>
          $ 1.980<span>00</span>
        </h2>
        <button type="submit">Comprar</button>
      </div>
    </div>
  </section>
);

export default Results;
