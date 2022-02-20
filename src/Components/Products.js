import React from "react";
import "./Products.css";

function Products(props) {
  console.log(props);

  return (
    <div>
      <div className="cardRow">
        <div className="row">
          <div className="col-sm-4">
            <div className="card card-body">
              <h4 className="productHeading">{props.children}</h4>
              <div className="imgRow">
                <div className="imgCol">
                  <img
                    src={props.productObj.productImage1}
                    className="itemImg"
                    alt="..."
                  />
                  <h4 className="productname">
                    {props.productObj.productTitle1}
                  </h4>
                </div>
                <div className="imgCol">
                  <img
                    src={props.productObj.productImage2}
                    className="itemImg"
                    alt="..."
                  />
                  <h4 className="productname">
                    {props.productObj.productTitle2}
                  </h4>
                </div>
              </div>
              <div className="imgRow">
                <div className="imgCol">
                  <img
                    src={props.productObj.productImage3}
                    className="itemImg"
                    alt="..."
                  />
                  <h4 className="productname">
                    {props.productObj.productTitle3}
                  </h4>
                </div>
                <div className="imgCol">
                  <img
                    src={props.productObj.productImage4}
                    className="itemImg"
                    alt="..."
                  />
                  <h4 className="productname">
                    {props.productObj.productTitle4}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
