import ToDoList from "./Components/ToDoList";
import AddToDo from "./Components/AddToDo";
import RemoveToDo from "./Components/RemoveToDo";
import { useState } from "react";
import './App.css';
import ToDoCount from "./Components/ToDoCount";

function App() {

  let [todoList, setTodoList] = useState([])

  return (
    <div className="App">
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-content-center'>
          <div className='col col-lg-9 col-xl-7'>
            <div className='card rounded-3'  style={{backgroundColor: "#FEF4EA",}}>
              <div className='card-body p-4'>

                <h4 className='text-center my-3'>To Do App</h4>

                <AddToDo todoList={todoList} setTodoList={setTodoList} />
                <br></br>
                <hr></hr>

                <ToDoList todoList={todoList} />

                <ToDoCount todoList={todoList} />

                <hr></hr>

                <RemoveToDo todoList={todoList} setTodoList={setTodoList} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
