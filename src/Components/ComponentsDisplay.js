import "./ComponentsDisplay.css";

function ComponentsDisplay(props) {

    console.log(props)

    return (
        <div className="row">
            <div className="col-sm-4">
                <div className="card a">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComponentsDisplay;