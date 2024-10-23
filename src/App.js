import React, { useState } from "react"

export default function App(){

  const[name, setName] =useState("");
  const[output, setOutput] =useState("");

  function handleChange(e){
    setName(e.target.value);
}
console.log(name)

   function handleClick(){
    // console.log(name)
    setOutput(name)

}
   return(
    
    <div style={Styles.parent}>
      <h1>Names</h1>
      {/* <h3>{name}</h3> */}
      <input type="text" style={Styles.inputstyles} onChange={handleChange}></input>
      <button style={Styles.buttonstyles} onClick={handleClick}>Output</button>
    </div>

  )}
  const Styles = {
    parent:{
      width:"100%", 
      height: "100vh", 
      display: "flex",
      // background-color:""
       alignItems: "center",
        justifyContent: "center", 
        flexDirection:"column",
        gap:"20px"

      },
      inputstyles:{
        width:"200px",
        height:"25px", 
        fontSize:"15px"
      },
      buttonstyles:{
        width:"100px",
        height:"40px",
        marginTop:"30px"
      }
  }
