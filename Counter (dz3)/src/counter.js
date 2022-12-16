import { useState } from "react";

function Counter() {
    
    const [count,setCount]=useState(1)
    const plus=()=>{
        setCount(count+1)
    }
    return (
      <div className="counter">
        {count}

        <button className="btn" onClick={plus}>Plus</button>  
      </div>
    );
  }
  
  export default Counter;
  