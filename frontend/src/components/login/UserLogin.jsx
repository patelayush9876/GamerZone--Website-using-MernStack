import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../Context/Context';
import { userLogin } from '../Service/apicall';

function UserLogin() {

  const {setAccount} = useContext(DataContext);

  const loginInitialValues = {
    email: '',
    password: ''
  }
  const [login, setLogin] = useState(loginInitialValues);
  const onLInputChange = (e) => {
      setLogin({...login, [e.target.name]: e.target.value});
  }
  const onLogin = async (event) => {
      event.preventDefault();
      await userLogin(login).then(
          (response) => {
              if(response.status === 200) {
                  setAccount(response.data.first_name);
                  setLogin(loginInitialValues);
                  alert("User Logged in successfully !!");
              }
              else { 
                alert("Invalid user !!");
              }
          },
          (error) => {
            alert("Something went Wrong OR Invalid user !!");
          });
  }
  return (
    <>
    {/*  <!-- component --> */}
<div className="bg-gray-100 flex justify-center items-center h-screen">
    {/* <!-- Left: Image --> */}
<div className="w-1/2 h-screen hidden lg:block">
  <img src="/src/assets/images/pexels-mintworkspace-20213727.jpg" alt="Placeholder Image" className="object-cover w-full h-full"/>
</div>
{/* <!-- Right: Login Form --> */}
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4">Login</h1>
  <form onSubmit={onLogin} method="POST">
    {/* <!-- Username Input --> */}
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-600">Email</label>
      <input type="email" id="email" value={login.email}  name='email' onChange={onLInputChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"/>
    </div>
    {/* <!-- Password Input --> */}
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Password</label>
      <input type="password" id="email" value={login.password}  name="password" onChange={onLInputChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"/>
    </div>
    {/* <!-- Remember Me Checkbox --> */}
    <div className="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" className="text-blue-500"/>
      <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
    </div>
    {/* <!-- Forgot Password Link --> */}
    <div className="mb-6 text-blue-500">
      <a href="#" className="hover:underline">Forgot Password?</a>
    </div>
    {/* <!-- Login Button --> */}
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
  </form>
  {/* <!-- Sign up  Link --> */}
  <div className="mt-6 text-blue-500 text-center">
    <NavLink to={"/login"} className={
                  ()=> {
                    return "hover:underline"
                  }
                }>Sign up Here</NavLink>
    {/* <a href="#" className="hover:underline">Sign up Here</a> */}
  </div>
</div>
</div>
    </>
  )
}

export default UserLogin