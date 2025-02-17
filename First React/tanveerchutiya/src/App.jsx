import React, { useState } from 'react'

import { Navbar } from './Navbar'


export const App = () => {
  // ✅ Create a state variable for Score
  const [score, setScore] = useState(0);



  return (
    <div>
      <Navbar/>
      <div className="score">{score}</div>
      <button onClick={() => setScore(score+1)}>clicke me</button>
   

    </div>
  );
};


// import React, { useState } from "react";
// import { Navbar } from "./Navbar";

// export const App = () => {
//   // ✅ Create a state variable for Score
//   const [score, setScore] = useState(0);

//   return (
//     <div>
//       <Navbar />
//       {/* ✅ Display the dynamic score */}
//       <div className="score">{score}</div>

//       {/* ✅ Update score on button click */}
//       <button onClick={() => setScore(score + 1)}>Click me</button>
//     </div>
//   );
// };
