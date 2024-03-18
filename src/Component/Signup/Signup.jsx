// import React, { useState } from "react";

// function Signup() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (event) => {
//     setFormData({ ... formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Replace this with your backend logic for user registration
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h1 className="text-3xl font-bold text-center">Sign Up</h1>
//           <p className="text-gray-500 text-center mt-2">
//             Welcome to our delicious food website!
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex flex-col">
//             <label htmlFor="name" className="text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//               value={formData.username}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="email" className="text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="password" className="text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           <button
//             type="submit"
//             className="inline-flex items-center px-4 py-2 bg-indigo-600 font-medium text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             onClick={()=>{
//               fetch("",{
//                 method: "GET",
//                 body: JSON.stringify({
//                   username,
//                   email,
//                   password
//                 }),
//                 headers:{
//                   "Content-type":"application/json",

//                 }
//               })
//             }}
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-center text-gray-500">
//           Already have an account?{" "}
//           <a href="/login" className="text-indigo-600 hover:text-indigo-900">
//             Log in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     fullname: "",
//     email: "",
//     password: "",
//     phone: "",
//     city: "",
//     zip: "",
//     country: ""
//   });

//   // useEffect(() => {
//   //   //const response = await axios.post('http://localhost:3000/users/signup')
//   //   // fetch("http://localhost:3000/users/signup", {
//   //   //   method: "POST",
//   //   //   body: {
//   //   //     username,
//   //   //     fullname,
//   //   //     email,
//   //   //     password,
//   //   //     phone,
//   //   //     city,
//   //   //     zip,
//   //   //     country
//   //   //   },
//   //   //   headers: {
//   //   //     "Content-type": "application/json",

//   //   //   }
//   //   // }).then((res) => {
//   //   //   return res.json();
//   //   // }).then((data) => {
//   //   //   console.log(data);
//   //   // })
//   //   //   .catch((err) => {
//   //   //     console.log(err);
//   //   //   })
//   //   // // headers: {
//   //   // //   "Content-type": "application/json",

//   //   // // }
//   // }, [])

//   // useEffect(async () => {
//   //   const response = await axios.post('http://localhost:3000/users/signup', {
//   //     formData: formData
//   //   })
//   // }, [])

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Replace this with your backend logic for user registration
//     try {
//       const response = await axios.post('https://2d72-2409-40e5-9-be1b-5cb1-965b-1a95-e595.ngrok-free.app/users/signup', {
//         formData: formData
//       });
//       console.log(response.data);
//       if(respomse.data == 200){
//         navigate('/')
//       }
//       if (response.data == 401) {
//         navigate('/404');
//       }
//       console.log("Form submitted:", formData);
//     } catch (err) {
//       console.log(err.message);
//       navigate('/404');
//     }

//   };

//   return (
//     <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-20">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h1 className="text-3xl font-bold text-center">Sign Up</h1>
//           <p className="text-gray-500 text-center mt-2">
//             Welcome to our delicious food website!
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex flex-col">
//             <label htmlFor="username" className="text-sm font-medium text-gray-700">
//               username
//             </label>
//             <input
//               id="username"
//               name="username"
//               type="text"
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//               value={formData.username}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="fullname" className="text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               id="fullname"
//               name="fullname"
//               type="text"
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//               value={formData.fullname}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="email" className="text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="password" className="text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="phone" className="text-sm font-medium text-gray-700">
//               phone
//             </label>
//             <input
//               id="phone"
//               name="phone"
//               type="number"
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="city" className="text-sm font-medium text-gray-700">
//               city
//             </label>
//             <input
//               id="city"
//               name="city"
//               type="text"
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//               value={formData.city}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="zip" className="text-sm font-medium text-gray-700">
//               zip
//             </label>
//             <input
//               id="zip"
//               name="zip"
//               type="text"
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//               value={formData.zip}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="country" className="text-sm font-medium text-gray-700">
//               country
//             </label>
//             <input
//               id="country"
//               name="country"
//               type="text"
//               required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//               value={formData.country}
//               onChange={handleChange}
//             />
//           </div>
//           <button
//             type="submit"
//             className="inline-flex items-center px-4 py-2 bg-indigo-600 font-medium text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//             Sign Up
//           </button>
//         </form>
//         <p className="text-center text-gray-500">
//           Already have an account?{" "}
//           <a href="/login" className="text-indigo-600 hover:text-indigo-900">
//             Log in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { CgProfile } from "react-icons/cg"; 


function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://38b9-2409-40e5-1c-bd9d-e00a-8074-649b-ef24.ngrok-free.app/users/signup', {
        formData: formData
      });
      console.log(response.data);
      if(response.data === 200) {
        navigate('/');
      } else if (response.data === 401) {
        navigate('/404');
      }
      console.log("Form submitted:", formData);
    } catch (err) {
      console.log(err.message);
      navigate('/404');
    }

  };

//   return (
//     <div className=" min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8  ">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h1 className="text-3xl font-bold text-center">Sign Up</h1>
//           <p className="text-center text-gray-500 mt-auto">
//             Welcome to our delicious food website!
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//            {/* <div className="flex flex-col">
//              <label htmlFor="username" className="text-sm font-medium text-gray-700">
//                Username
//              </label>
//             <input
//                id="username"
//                name="username"
//                type="text"
//                required
//                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//                value={formData.username}
//                onChange={handleChange} />
//           </div> */}
//            <div className="flex flex-col">
//              <label htmlFor="fullname" className="text-sm font-medium text-gray-700">
//                Full Name
//              </label>
//             <input
//               id="name"
//                name="name"
//                type="text"
//                required
//                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//                value={formData.name}
//                onChange={handleChange}
//              />
//           </div>
//            <div className="flex flex-col">
//              <label htmlFor="email" className="text-sm font-medium text-gray-700">
//               Email Address
//              </label>
//              <input
//                id="email"
//                name="email"
//                type="email"
//                required
//                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//               value={formData.email}
//                onChange={handleChange}
//              />
//            </div>
//            <div className="flex flex-col">
//              <label htmlFor="password" className="text-sm font-medium text-gray-700">
//                Password
//              </label>
//              <input
//                id="password"
//                name="password"
//                type="password"
//                required
//                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//                value={formData.password}
//                onChange={handleChange}
//              />
//            </div>
//            <div className="flex flex-col">
//              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
//                Phone Number
//              </label>
//              <input
//                id="phone"
//                name="phone"
//                type="number"
//                required
//                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//                value={formData.phone}
//                onChange={handleChange}
//              />
//            </div>
//            <div className="flex flex-col">
//              <label htmlFor="otp" className="text-sm font-medium text-gray-700">
//                OTP
//              </label>
//              <input
//                id="otp"
//                name="otp"
//                type="text"
//                required
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
//                value={formData.city}
//                onChange={handleChange}
//              />
//            </div>
//            <Button variant="contained" 
//            onClick={ async ()=>{
//             console.log(formData);
//               const response = await axios.post("https://38b9-2409-40e5-1c-bd9d-e00a-8074-649b-ef24.ngrok-free.app/users/send-otp",{
//                 formData:formData
//               })
//            }}
//            >GET OTP</Button>
           
//            <button
//              type="submit"
//              className="inline-flex items-center px-4 py-2 bg-indigo-600 font-medium text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//            // onClick={() => {
//            //   fetch("https://localhost:3000/users", {
//            //     method: "POST",
//            //     body: ({
//            //       username,
//            //       fullname,
//            //       email,
//            //       password,
//            //       phone,
//            //       city,
//            //       zip,
//            //       country
//            //     }),           //     headers: {
//            //       "Content-type": "application/json",
//            //     }
//          //   })
//           // }}
//           >
//              Sign Up
//            </button>
 
          
//         </form>
//         <p className="text-center text-gray-500">
//           Already have an account?{" "}
//           <a href="/login" className="text-indigo-600 hover:text-indigo-900">
//             Log in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

return (
  <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 items-center ">
  <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 h-[85vh] sm:mx-auto sm:w-[100vh] sm:rounded-lg sm:px-10">

        <div>
          <h1 className="text-3xl font-bold text-center mb-[50px]">Sign Up</h1>
        </div>
    <div className="mx-auto w-[500px] grid grid-cols-2 ">
        <div >
          <form onSubmit={handleSubmit}>

          <div className="flex flex-row items-center">
          <CgProfile />
            <div className="flex flex-col">
             <label htmlFor="name" className="text-sm font-medium "/>
            <input
              id="name"
              placeholder="FullName"
               name="name"
               type="text"
               required
               className="appearance-none relative block w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800 "
               value={formData.name}
               onChange={handleChange}
             />
          </div>
          </div>
          <div className = "border border-slate-500 w-72 mb-[40px]"></div>

          <div className="flex flex-row items-center">
          <MdEmail /> 
           <div className="flex flex-col">
             <label htmlFor="email" className="text-sm font-medium w-[75px]"/>
            <input
              id="email "
              placeholder="Email"
               name="email"
               type="text"
               required
               className="appearance-none relative block w-full px-3 py-2  focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
               value={formData.email}
               onChange={handleChange}            
             />
          </div>
          </div>
          <div className = "border border-slate-500 w-72 mb-[40px]"></div>
           
          <div className="flex flex-row items-center">
             <FaLock />   
           <div className="flex flex-col">
             <label htmlFor="password" className="text-sm font-medium "/>
            <input
              id="password"
              placeholder="Password"
               name="password"
               type="password"
               required
               className="appearance-none  relative block w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
               value={formData.passwor}
               onChange={handleChange}
             />
          </div>
          </div>
          <div className = "border border-slate-500 w-72 mb-[40px]"></div>

          <div className="flex flex-row items-center">
             <ImPhone />   
           <div className="flex flex-col">
             <label htmlFor="phone" className="text-sm font-medium "/>
            <input
              id="phone"
              placeholder="Phone Number"
               name="phone"
               type="text"
               required
               className="appearance-none  relative block w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
               value={formData.phone}
               onChange={handleChange}
             />
          </div>
          </div>

          <div className = "border border-slate-500 w-72 mb-[40px]"></div>

          <div className="flex flex-row items-center"> 
           <div className="flex flex-col">
             <label htmlFor="otp" className="text-sm font-medium "/>
            <input
              id="otp"
              placeholder="OTP"
               name="otp"
               type="text"
               required
               className="appearance-none  relative block w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
             />
          </div>
          </div>
          <div className = "border border-slate-500  w-72 mb-[40px]"></div>
          
          </form>
          <button
            type="submit"
            onClick={()=>{
              console.log(formData)
            }}
             className="inline-flex items-center px-4 py-2 bg-indigo-600 font-medium text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
             Sign Up
           </button>
        </div>
        <div>
          <img src="https://github.com/thapatechnical/mernstack/blob/master/client/public/images/register.png?raw=true " className="ml-[75px]" alt=""/>
        </div>
      </div>  
    </div>
  </div>
)

}
export default Signup;
