import React, { useState } from 'react';

const App = () => {
  // Declare state variables for principal, rate, and time
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');

  const [inte ,setInte] = useState("");

  // Function to handle the calculation of interest
  const calculateInterest = (e)=>{
    e.preventDefault();
    // let ans = 0;
    setInte((principal *rate*time)/100) 
  }
  console.log(inte);

  return (
    <>
      <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4 text-white">
        <div className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-cyan-500 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center text-cyan-400 mb-6">
            Interest Calculator
          </h1>

          
          <input
            type="number"
            placeholder="Principal (₹)"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full mb-7 p-3 rounded-full bg-slate-800 border border-cyan-500 text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 drop-shadow-[0_0_5px_#22d3ee]"
          />

          
          <input
            type="number"
            placeholder="Rate of Interest (%)"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full mb-7 p-3 rounded-full bg-slate-800 border border-cyan-500 text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 drop-shadow-[0_0_5px_#22d3ee]"
          />

        
          <input
            type="number"
            placeholder="Time (Years)"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full mb-5 p-3 rounded-full bg-slate-800 border border-cyan-500 text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 drop-shadow-[0_0_5px_#22d3ee]"
          />

          {/* Buttons for Simple Interest and Compound Interest */}
          <div className="flex justify-between mt-4 gap-4">
            <button
              onClick={calculateInterest}
              className="flex-1 px-4 py-2 rounded-md border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black font-semibold transition-all shadow-lg drop-shadow-[0_0_6px_#ec4899]"
            >
              Simple Interest
            </button>
            <button
              className="flex-1 px-4 py-2 rounded-md border border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-semibold transition-all shadow-lg drop-shadow-[0_0_6px_#4ade80]"
            >
              Compound Interest
            </button>
            

            
          </div>
          {inte && 
            <p className="text-center text-xl  text-cyan-400 font-semibold mt-7">
              Simple Interest: ₹{inte} 
              </p>
            }
        </div>
      </div>
    </>
  );
};

export default App;
