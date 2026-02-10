import React from 'react'

function Home1(props) {
  return (
    <div className="border-5 border-cyan-500 shadow-lg shadow-cyan-100/20 rounded-2xl bg-gradient-to-r from-green-200 to-cyan-300 text-center p-4 w-full sm:w-[320px] md:w-[350px]">
      
      <h1 className="text-xl md:text-2xl font-semibold p-2">
        {props.Title}
      </h1>

      <p className="p-2 text-sm md:text-base">
        {props.Description}
      </p>

      <button className="bg-gradient-to-r from-blue-200 to-indigo-600 border-2 font-bold text-amber-950 border-amber-900 hover:bg-zinc-700 px-4 py-2 mt-3 rounded">
        Apply Now
      </button>
    </div>
  )
}

export { Home1 }



/*import { React } from "react";
import "./App.css";
export default function App()
{
return(<div>
<h1 className= "my-style">Hello World</h1>
</div>);
}*/





/*import React from 'react'
function Home1(props) {
const myStyle={
backgroundColor:"black",
color:"white",
textAlign:"center"
};
  return (
    <div className = "text-center text-3xl font-bold text-gray-800">
        <h1 style={myStyle}>My Name is : {props.name}</h1>
        <h1>And My Age is : {props.age}</h1>
    </div>
  )
}

export {Home1};*/