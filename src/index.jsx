import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

// var name="Aditya";
// const currD=new Date();
// var current=2019;
// ReactDOM.render(
//   <div>  
//   <h1>craated by {name}</h1>
//     <h2>copyright {currD.getFullYear()}</h2>
// </div>
//   ,document.getElementById('root')
// );
const img="https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="title">My Faviroute food</h1>
   <div className='box'>
     <img src={img} />
     <img src={img} />
     <img src={img} />
     <img src={img} />
  </div>
  </div>
  ,document.getElementById('root'));



