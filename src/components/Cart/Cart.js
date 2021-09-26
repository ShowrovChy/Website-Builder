import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let salary = cart.reduce((prev, curr) => prev + curr.salary, 0);
  //   const { name } = cart;
  let names = cart.map((nam) => <h6> Name : {nam.name}</h6>, "");

  //   console.log(name);
  return (
    <div className="col right-col ">
      <div className="card cart-style ">
        <div className="card-body p-3 ">
          <h3 className="text-success text-center"> Candidates Summary</h3>
          <h4 className="card-title">
            Candidates Added :
            <span className="fw-bold text-success"> {cart.length}</span>
          </h4>
          <h5 className="card-text">
            Total Salary Cost :{" "}
            <span className="fw-bold text-success"> {salary} $</span>
          </h5>

          <h5 className="fw-bold"> {names}</h5>
        </div>
        <div className="card-footer bg-light border-0">
          <button className="btn btn-success w-100 ">
            {" "}
            <i class="fas fa-check-circle"></i> Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
