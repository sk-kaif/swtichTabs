
// import Navbar from '../components/Navbar'

// export default function Home() {
//   return (
//    <div className='max-w-7xl mx-auto  px-2 py-2 '>
//       <Navbar />
//    </div>
//   );
// }


// // ----------------------------------------------


// 'use client'
// import React, { useState } from 'react'
// import menu from './foodData'

// const Navbar = () => {
//     const [menuData,setMenuData]= useState(menu)

//     const navClick = (disName)=>{
//         if( disName === 'All'){
//             return setMenuData(menu)
//         }
//         const upFood = menu.filter((curEl)=>{
//             return curEl.category === disName
//         })

//         setMenuData(upFood)
//     }
//   return (
//     <>
//         <div className='flex gap-8'>
//             <button className='bg-slate-500 p-2' onClick={()=>navClick('All')}>All</button>
//             <button className='bg-slate-500 p-2' onClick={()=>navClick('breakfast')}>breakfast</button>
//             <button className='bg-slate-500 p-2' onClick={()=>navClick('lunch')}>lunch</button>
//             <button className='bg-slate-500 p-2' onClick={()=>navClick('dinner')}>dinner</button>
//         </div>


//         <div className='flex mt-9 gap-9 flex-wrap'>
//             {
//                 menuData &&
//                 menuData.map((dis,idx)=>(
//                     <div className='border border-red-600 p-4' key={idx}>
//                         <h1>{dis.foodName}</h1>
//                         <p>{dis.price}</p>
//                         <p>{dis.category}</p>
//                     </div>
//                 ))
//             }
//         </div>
    
    
//     </>


//   )
// }

// export default Navbar

// // ------------------------------------------------
// const menu = [
//     {
//       foodName: "Spaghetti Carbonara",
//       price: 12.99,
//       category: "breakfast"
//     },
//     {
//       foodName: "Caesar Salad",
//       price: 8.99,
//       category: "lunch"
//     },
//     {
//       foodName: "Grilled Cheese Sandwich",
//       price: 5.99,
//       category: "lunch"
//     },
//     {
//       foodName: "Tomato Soup",
//       price: 4.99,
//       category: "lunch"
//     },
//     {
//       foodName: "Steak Frites",
//       price: 19.99,
//       category: "dinner"
//     },
//     {
//       foodName: "Chicken Alfredo",
//       price: 14.99,
//       category: "dinner"
//     },
//     {
//       foodName: "Pancakes",
//       price: 6.99,
//       category: "breakfast"
//     },
//     {
//       foodName: "Cheeseburger",
//       price: 9.99,
//       category: "breakfast"
//     },
//     {
//       foodName: "Vegetable Stir Fry",
//       price: 11.99,
//       category: "dinner"
//     },
//     {
//       foodName: "French Fries",
//       price: 3.99,
//       category: "breakfast"
//     }
//   ];
  
// export default menu;
  