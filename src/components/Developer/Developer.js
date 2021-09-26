import React from "react";
import "./Developer.css";
const Developer = (props) => {
  const { name, work, age, salary, email, image } = props.developer;
  return (
    <div className="col ">
      <div className="card h-100 bg-light card-style">
        <div className="img-div">
          <img src={image} className=" images card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <div className="card-text">
            <h5>Work : {work}</h5>
            <h6>Age : {age}</h6>
            <h6>Salary : {salary} $</h6>
            <p>
              <small>Email : {email}</small>
            </p>
          </div>
        </div>
        <div className="card-footer border-0 bg-light">
          <button
            onClick={() => props.AddToCart(props.developer)}
            className="btn btn-success w-100"
          >
            <i class="fas fa-user-check me-2"></i>Add Candidate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Developer;
