import { useForm } from "react-hook-form";

function RemoveToDo(props) {
  let { register, handleSubmit } = useForm();

  let onFormSub = (todoObj) => {
    props.setTodoList(props.todoList.filter(ele => ele !== todoObj.removetodo))
  }

  return <div>
        <form className="row row-cols-lg-auto justify-content-center align-content-center" onSubmit={handleSubmit(onFormSub)}>
            <div className="">
                <input type="text" id="todo" className="form-control" placeholder="Completed task..." {...register("removetodo")}></input>
            </div>
            <div className="">
                <button type="submit" className="btn btn-danger shadow">REMOVE</button>
            </div>
        </form>
  </div>;
}

export default RemoveToDo;
