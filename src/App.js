// without **useCallBack**

// import React, { useState} from 'react';
// const funccount = new Set();
// const App = () => {

//   const [count, setCount] = useState(0)
//   const [number, setNumber] = useState(0)

//   const incrementCounter = () => {
//     setCount(count + 1)
//   }
//   const decrementCounter = () => {
//     setCount(count - 1)
//   }

//    const incrementNumber = () => {
//     setNumber(number + 1)
//   }

// funccount.add(incrementCounter);
// funccount.add(decrementCounter);
// funccount.add(incrementNumber);
// alert(funccount.size);

//   return (
//     <div>
//       Count: {count}
//       <button onClick={incrementCounter}>
//         Increase counter
//       </button>
//       <button onClick={decrementCounter}>
//          Decrease Counter
//       </button>
//       <button onClick={incrementNumber}>
//         increase number
//       </button>
//     </div>
//   )
// }

// export default App;

// with useCallBack

import React, { useState, useCallback } from "react";
import './App.css';
import { Button } from "antd";
import 'antd/dist/antd.css';
var funccount = new Set();
const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrementCounter = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  const incrementNumber = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  funccount.add(incrementCounter);
  funccount.add(decrementCounter);
  funccount.add(incrementNumber);
  alert(funccount.size);

  return (
    <div className="App">
      Count: {count}
      <Button  onClick={incrementCounter}>Increase counter</Button>
      <Button  onClick={decrementCounter}>Decrease Counter</Button>
      <Button  onClick={incrementNumber}>increase number</Button>
    </div>
  );
};

export default App;
