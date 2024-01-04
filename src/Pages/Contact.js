import React from "react";
import { useNavigate } from "react-router-dom";

const Contact=()=>{

    const x= useNavigate();
    return(
        <div>
            <h1>Contact</h1>
            <p>Content inside the Contact</p>

            <button onClick={()=>x("/home")}>Navigate</button>
        </div>
    )
}

export default Contact;

//Navigating to another page by using a button, useNavigate component is from react-router-dom and it return a 
//function so that we do not use is it directly, but we save it in the variable.