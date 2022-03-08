import React from "react";
import { useForm } from "react-hook-form";
import "./Products.css";
import axios from "axios";


function Products(props) {
  console.log(props);

  let { register, handleSubmit } = useForm()

  let onFormSub = async () => {
    let res = await axios.post("http://localhost:4000/Products", props.productObj)
    let message = res.data
    alert("Product added to cart")
  }

  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="card a m-3 shadow">
          <div className="card-img-top container">
            <img className="a-img" src={props.productObj.productImg} alt="..." />
          </div>
          <div className="card-body">
            <h4 className="card-title text-center">{props.productObj.productHeading}</h4>
            <div className="card-text">
              <p className="rating">Rating: {props.productObj.productRating}</p>
              <p className="cost">{props.productObj.cost}</p>
              <p className="totalCost">{props.productObj.totalCost}</p>
              <p className="discount">Save {props.productObj.discount}</p>
              <form onSubmit={handleSubmit(onFormSub)}>
                <div className="mt-3">
                  <button className="btn btn-warning text-light shadow">Shop now</button>
                <button type="submit" className="btn btn-warning shadow text-light mx-2" {...register("productObj")}>Add to cart</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
