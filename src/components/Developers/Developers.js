import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Developer from "../Developer/Developer";
import "./Developers.css";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);
  const AddToCart = (worker) => {
    const newCart = [...cart, worker];
    setCart(newCart);
  };
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  return (
    <div className="row mt-5 developers-style">
      <div className="col-md-9">
        <div className="row row-cols-1 row-cols-md-3 g-4 ms-2">
          {developers.map((developer) => (
            <Developer
              key={developer.key}
              developer={developer}
              AddToCart={AddToCart}
            />
          ))}
        </div>
      </div>
      <div className="col-md-3">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Developers;
