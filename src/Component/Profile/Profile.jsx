// // import React from 'react'
// // import Button from '../Button/Button'

// // const Profile = () => {
// //   return (
// //     <div className='flex justify-center'>
// //      <div className=' h-[650px]  mt-4 mb-4 w-[700px] bg-white'>
// //        <div>
// //          <div className='flex flex-rows justify-around h-[50px] items-center'>
// //              <div className='text-3xl font-bold mt-4'>Profile</div>
// //              <div className=''>
// //              <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" className="h-[75px] rounded-full mt-7 "alt="Profile Photo" />
// //              </div>
// //          </div>
// //           <div>
// //             <form className='pt-10'>
// //           <div className="flex flex-col justify-center mb-4">
// //             <label htmlFor="fullname" className="text-sm text-gray-700 font-semibold">
// //               FullName
// //             </label>
// //             <input
// //               id="fullname"
// //               type="text"
// //               required
// //               className="appearance-none rounded-md relative block w-[400px] px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800 "
// //             />
            
// //           </div>

// //           <div className="flex flex-col mt-6">
// //             <label htmlFor="email" className="text-sm font-semibold text-gray-700">
// //               Email Address
// //             </label>
// //             <input
// //               id="email"
              
// //               type="email"
// //               required
// //               className="appearance-none rounded-md relative block w-[400px] px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800" 
// //             />
            
// //           </div>  

// //           <div className="flex flex-col mt-6">
// //             <label htmlFor="password" className="text-sm font-semibold text-gray-700">
// //               Password
// //             </label>
// //             <input
// //               id="password"
            
// //               type="password"
// //               required
// //               className="appearance-none rounded-md relative block w-[400px] px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
            
// //             />
// //           </div>

// //           <div className="flex flex-col mt-6">
// //             <label htmlFor="address" className="text-sm font-semibold text-gray-700">
// //               Address
// //             </label>
// //             <input
// //               id="address"   
// //               type="text"
// //               required
// //               className="appearance-none rounded-md relative block w-[650px] px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
// //             />
// //           </div>
// //             <div className='flex gap-4 mb-4'>
// //             <div className="flex flex-col mt-6">
// //             <label htmlFor="city" className="text-sm font-semibold text-gray-700">
// //               City
// //             </label>
// //             <input
// //               id="city"   
// //               type="text"
// //               required
// //               className="appearance-none rounded-md relative block w-[300px] px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
// //             />
// //           </div>

// //           <div className="flex flex-col mt-6">
// //             <label htmlFor="state" className="text-sm font-semibold text-gray-700">
// //               State
// //             </label>
// //             <input
// //               id="state"   
// //               type="text"
// //               required
// //               className="appearance-none rounded-md relative block w-[300px] px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800"
// //             />
// //           </div>
// //             </div>
// //             <Button title="Edit Profile" className="w-[100px]   "/>
// //           </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
    
// //   )
// // }

// // export default Profile

// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Profile = () => {
//  const navigate = useNavigate()

//   return (
//     <div className='grid sm:grid-cols-12 h-[650px] bg-white'>
//         <div className='h-[500px] col-span-4 bg-white gap-6 mt-12 ml-6 shadow'>
//             <div className='h-[300px] bg-cover'>
//                 <div className='relative'>
//                    <img src="https://www.shutterstock.com/image-illustration/abstract-texture-background-your-design-600nw-516874498.jpg" className='h-[250px] w-[500px]' alt="" />
//                 </div>
//                 <div className='w-[50%] relative bottom-[75px]  '>
//                     <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" className='rounded-full' alt="Profile Photo" />
//                 </div>
                
//             </div>
//             <div className=' bg-white h-[200px] relative top-[120px]'>
//                <div className=''>
//                 <button className='w-full shadow h-10 items-center text-gray-400 text-md hover:bg-slate-500 hover:text-white place-items-end'>PROFILE SETTINGS</button>
//                 <button className='w-full shadow h-10 items-center text-gray-400 text-md hover:bg-slate-500 hover:text-white place-items-end'>ORDERS LIST</button>
//                </div>
//             </div>
//         </div>
//         <div className=' h-[600px] col-span-8  m-[50px]'>
//             <div className='text-5xl font-bold m-5 items-center'>
//                 Profile
//             </div>
//             <form className='grid grid-cols-2' >
//             <div className="flex flex-col mr-4">
//             <label htmlFor="username" className="text-sm font-medium mb-3 text-gray-700">
//               Username
//             </label>
//             <input
//               id="name"
//               type="text"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800 bg-slate-300"
//             />
//           </div>
//           <div className="flex flex-col mb-5">
//             <label htmlFor="email" className="text-sm font-medium mb-3 text-gray-700">
//               Email
//             </label>
//             <input
//               id="email"
//               type="text"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800  bg-slate-300"
//             />
//           </div>
//           <div className="flex flex-col mr-4">
//             <label htmlFor="password" className="text-sm font-medium mb-3 text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800  bg-slate-300"
//             />
//           </div>
//           <div className="flex flex-col mb-5 ">
//             <label htmlFor="phone" className="text-sm font-medium mb-3 text-gray-700">
//               Phone Number
//             </label>
//             <input
//               id="phone"
//               type="text"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800 bg-slate-300"
//             />
//           </div>
//           </form>
//           <form >
//           <div className="flex flex-col mb-5 ">
//             <label htmlFor="address" className="text-sm font-medium mb-3 text-gray-700">
//               Address
//             </label>
//             <input
//               id="address"
//               type="text"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800 bg-slate-300"
//             />
//           </div>
//           </form>
//           <form className='grid grid-cols-2'>
//           <div className="flex flex-col mb-5 mr-4 ">
//             <label htmlFor="city" className="text-sm font-medium mb-3 text-gray-700">
//               City
//             </label>
//             <input
//               id="city"
//               type="text"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800 bg-slate-300"
//             />
//           </div>
//           <div className="flex flex-col mb-5 ">
//             <label htmlFor="country" className="text-sm font-medium mb-3 text-gray-700">
//               Country
//             </label>
//             <input
//               id="country"
//               type="text"
//               required
//               className="appearance-none relative block w-full px-3 py-2 border border-gray-700 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-800 bg-slate-300"
//             />
//           </div>
//           <button className='text-center px-6 ml-[230px] mt-3 h-[40px] border-2 w-[400px] border-orange-700 text-orange-600 hover:bg-orange-600 hover:text-white transition all '
//         onClick={()=>{
//             navigate("/editprofile")
//         }}
//           >Edit Profile</button>
//           </form>
//         </div>
//         <div>
//         </div>
//     </div>
//   )
// }

// export default Profile

import React, { useState } from 'react';
import './Profile.css';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    address: '123 Main St',
    email: 'john@example.com',
    pincode: '12345',
    phone: '123-456-7890',
    image: 'profile.jpg' // Replace with the path to the user's profile image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      <div className="profile-container">
        <div className="profile-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuqdXafLzUdCuWbcMZDoEOz67hG4MZv2GOBiVs8wjo2jfvS-cJPGNSsmv&s=10" alt="Profile" />
        </div>
        <div className="profile-details">
          <div className="input-group">
            <label>Name:</label>
            <input type="text" name="name" value={profileData.name} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Address:</label>
            <input type="text" name="address" value={profileData.address} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" name="email" value={profileData.email} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Pincode:</label>
            <input type="text" name="pincode" value={profileData.pincode} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Phone:</label>
            <input type="text" name="phone" value={profileData.phone} onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;