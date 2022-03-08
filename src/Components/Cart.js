import axios from "axios";
import { useEffect, useState } from "react";

function Cart() {

    let [productsList, setProductsList] = useState([])

    useEffect(()=>{
        getData()
    }, [])

    let getData = async () => {
        let res = await axios.get("http://localhost:4000/Products")
        setProductsList(res.data)
    }

    console.log(productsList)

    return (
        <div>
            <h3 className="text-center">Your cart</h3>
            <div className="cardRow2 container d-flex justify-content-center align-content-center flex-row">
                
                {
                    productsList.map((productObj) => <div key={productObj.id} className="item2">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card m-3 shadow" style={{width: 252, height: 510}}>
                                    <div className="card-img-top container">
                                        <img className="b-img w-100" src={productObj.productImg} alt="..." style={{height: 272.5}}/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title text-center">{productObj.productHeading}</h4>
                                        <div className="card-text">
                                            <p className="rating">Rating: {productObj.productRating}</p>
                                            <p className="cost">{productObj.cost}</p>
                                            <p className="totalCost">{productObj.totalCost}</p>
                                            <p className="discount">Save {productObj.discount}</p>
                                            <button className="btn btn-warning text-light mt-3">Shop now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
                
            </div>
        </div>
    );
}

export default Cart;