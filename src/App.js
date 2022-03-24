
import './App.css';
import { useForm } from "react-hook-form";
import { useState } from "react";

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  let [usersList, setUsersList] = useState([])

  // on form submission
  const onFormSub = (userObj) => {
    setUsersList([...usersList, userObj])
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='text-center m-3 text-light'>User registration</h1>
            <form className='w-75 mx-auto p-3 bg-light' onSubmit={handleSubmit(onFormSub)}>
              <div className='container'>
                {/* username */}
                <div className='mb-3'>
                  <label htmlFor='username'>Username</label>
                  <input type="text" id="username" className="form-control" {...register("username", { required: true, minLength: 3, maxLength: 8 })}></input>
                  {/* validation error msg for required of username */}
                  {errors.username?.type === "required" && <p className='text-danger'>* Username is required</p>}
                  {/* validation error msg for minLength o9f username */}
                  {errors.username?.type === "minLength" && <p className='text-danger'>* Atleast 3 character are required</p>}
                  {/* validation error msg for maxLength of username */}
                  {errors.username?.type === "maxLength" && <p className='text-danger'>* Maximum 8 characters are allowed</p>}
                </div>
                {/* email */}
                <div className='mb-3'>
                  <label htmlFor='email'>E-mail</label>
                  <input type="email" id='email' className='form-control' {...register("email", { required: true })}></input>
                </div>
                {/* gender */}
                <div className='mb-3'>
                  <label>Select gender</label>
                  {/* radio 1 */}
                  <div className='form-check'>
                    <input type='radio' id='male' className='form-check-input' {...register("gender")} value="male"></input>
                    <label htmlFor='male' className='form-check-label'>Male</label>
                  </div>
                  {/* radio 2 */}
                  <div className='form-check'>
                    <input type='radio' id='female' className='form-check-input' {...register("gender")} value="female"></input>
                    <label htmlFor='female' className='form-check-label'>Female</label>
                  </div>
                  {/* radio 3 */}
                  <div className='form-check'>
                    <input type='radio' id='others' className='form-check-input' {...register("gender")} value="others"></input>
                    <label htmlFor='others' className='form-check-label'>Others</label>
                  </div>
                </div>
                {/* submit button */}
                <button type='submit' className='btn btn-dark d-block mx-auto'>Submit</button>
              </div>
            </form>
          </div>

          <div className='col'>
            {/* tabular view of data */}
            <h1 className='m-3 text-light text-center'>List of Users</h1>
            {/* if the list is empty */}
            {usersList.length === 0 && <h1 className=' mb-3 text-center text-light'>List is empty</h1>}
            {/* if the list is not empty */}
            {usersList.length !== 0 &&
              <table className='table border bg-light'>
                {/* thead */}
                <thead>
                  <tr>
                    <td>Username</td>
                    <td>E-mail</td>
                    <td>Gender</td>
                  </tr>
                </thead>
                {/* tbody */}
                <tbody>
                  {
                    usersList.map((userObj, index) => <tr key={index}>
                      <td>{userObj.username}</td>
                      <td>{userObj.email}</td>
                      <td>{userObj.gender}</td>
                    </tr>)
                  }
                </tbody>
              </table>}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
