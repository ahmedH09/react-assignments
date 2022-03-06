import { useSelector } from "react-redux";

function ProductsList() {

    // get products state from store 
    let productsList = useSelector(state => state.products)

    return (
        <div>
            <h2 className="text-center m-3">List of Products</h2>
            <div className="text-center">
                {
                    productsList.map((product, index) => <h4 key={index}>{product}</h4>)
                }
            </div>
        </div>
    );
}

export default ProductsList;