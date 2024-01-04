import React from "react";

const About=({count, setCount})=>{
    return(
        <div>
            <h1>About</h1>
            <p>Content inside the About</p>

            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>increase count</button>
        </div>
    )
}

export default About;