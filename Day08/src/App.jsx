import React, { useState } from 'react';

const App = () => {
  const [radius, setRadius] = useState(""); 
  // const [area, setArea] = useState("");



  return (
    <div className="min-h-screen bg-slate-800 flex justify-center items-center">
      <div className="w-100 h-100 p-6 bg-slate-900 rounded border-2 border-blue-500">
        <h1 className="text-white text-2xl text-center font-semibold">
          Calculate the area of a circle
        </h1>

        <form>
          <input
            type="number"
            name="r"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="w-80 h-11 mt-10 p-5 ml-5 text-white font-semibold focus:outline-none focus-blue-400 focus:ring-2 rounded-full border-2 border-blue-600 outline-none drop-shadow-[0_0_5px_#22d3ee]"
            autoFocus
            required
            placeholder="Enter the radius of circle"
          />
        </form>

        <p className="text-center text-white text-xl mt-10">
          {radius
            ? `Area of circle is: 3.14 * ${radius} * ${radius} = ${(3.14 * radius * radius).toFixed(2)}`
            : 'Enter values to see the area'}
        </p>
      </div>
    </div>
  );
};

export default App;
