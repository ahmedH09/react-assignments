import { useSelector } from "react-redux";

function ProductsList() {

    // get products state from store 
    let productsList = useSelector(state => state.products)

    return (
        <div>
            <h2 className="text-center m-3">List of Products</h2>
            {productsList.length === 0 && <div>
                <h6 className="text-center">List is empty</h6>    
            </div>}
            {productsList.length !== 0 && <div>
                <table className="table table-bordered">
                    <tbody>
                    {
                        productsList.map((product, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product}</td>    
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>}
        </div>
    );
}

export default ProductsList;