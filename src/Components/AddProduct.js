import { useForm } from "react-hook-form";
import { addProduct } from "../Slice/productSlice";
import { useDispatch } from "react-redux";

function AddProduct() {

    let { register, handleSubmit } = useForm()
    let dispatch = useDispatch()

    let onFormSub = (productObj) => {
        // create action obj by calling action creator function
        let actionObj = addProduct(productObj.newproduct)
        // dispatch action obj to redux store
        dispatch(actionObj)
    }

    return (
        <div>
            <h2 className="text-center m-3">Add new Product</h2>
            <form className="row row-cols-lg-auto justify-content-center align-content-center" onSubmit={handleSubmit(onFormSub)}>
                <div>
                    <input type="text" className="form-control" placeholder="Enter Product..." {...register("newproduct")}></input>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary shadow" >Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;