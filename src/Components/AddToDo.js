import { useForm } from "react-hook-form";

function AddToDo(props) {

    let { register, handleSubmit } = useForm()

    let onFormSub = (todoObj) => {
        props.setTodoList([...props.todoList, todoObj.newtodo])
    }

    return (
        <div className="">
            <form className="row row-cols-lg-auto justify-content-center align-content-center" onSubmit={handleSubmit(onFormSub)}>
                <div className="">
                    <input type="text" id="todo" className="form-control" placeholder="Enter task..." {...register("newtodo")}></input>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary shadow">ADD</button>
                </div>
            </form>
        </div>
    );
}

export default AddToDo;