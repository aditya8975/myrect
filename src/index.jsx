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
const customBox = {
  display:"flex",
  flexDriection: "row",
  flexWrap: "wrap",
  alignContent:"center",
  justifyContent: "space-evenly",
  alignItems: "center",
}

const img="https://picsum.photos/200";
ReactDOM.render(
  <div>
    {/* adding css by classes */}
    <h1 className="title">My Faviroute food</h1>
    {/* inline css with css object */}
   <div style={customBox}>
     <img src={img} />
     <img src={img} />
     <img src={img} />
     <img src={img} />
  </div>
  </div>
  ,document.getElementById('root'));



