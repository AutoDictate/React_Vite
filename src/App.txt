import { useState } from "react";

const App = () => {

  const [count,setCount] = useState(0); 
              // hooks -> Hooks can be used inside the function Components.
              // hooks executed in a sequence order.

  const btnClick2 = () =>{
    console.log("Clicked");
    setCount(count+1);
    console.log(count);
  }
  const btnClick = () =>{
    console.log("Clicked");
    // setcount(count -1 );
    // setcount(count -1 );

      /** The abouve code does'nt work for decrementing -2 
       * bcoz, when we use setState like this, it doesn't make any changes to our code
       * For that, We are going to use "Functional Forms" -- Which act as a callback functions
       * these callback functions stores the value as a parameter and use it when the function calls
       * By this, the value get changed
      */

      // Functional Forms
    setCount(preCount => preCount+1);
    setCount(preCount => preCount+1);
    /** This above line of code increment the value by 2 */
    console.log(count);
  }
  return (
    <div>
      <button onClick={btnClick2}>-</button>
      {count}
      <button onClick={btnClick}>+</button>
      
    </div>
  )
}

export default App