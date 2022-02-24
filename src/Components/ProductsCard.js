import "./ProductsCard.css";

function ProductsCard(props) {
  console.log(props);

  return (
    <div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-header">
            <h4 className="cardHeading">{props.children}</h4>
            </div>
            <div className="card-body">
              <div>
                <img className="card-img b" src={props.productObj.productImg} alt="..." />
              </div>
            </div>
            <div className="card-footer">
              <a href="...">See more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
