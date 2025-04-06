import React, { useState } from 'react'

const App = () => {

// find the largest number among 3 numbers using arry useState()

const [Numbers, SetNumbers] = useState({ 
    num1: "", 
    num2: "",
    num3: "",
 });

const [Max ,setMax] = useState("");

const HandleChange =(e) =>
{
    SetNumbers({ ...Numbers ,[e.target.name] : e.target.value});
}

const HandleSubmit = (e) => {
    e.preventDefault();
    let max = Numbers.num1;
    if(max<Numbers.num2) {
      max = Numbers.num2;
    }
    if(max<Numbers.num3) {
      max = Numbers.num3;
    }
    setMax(max);
    // console.log(Numbers);
  };

// console.log(Max);
return (
    <>

        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-4xl p-5">Find the Largest Number</h1>
            <div className="bg-gray-800 p-8 shadow-2xl w-96 border-2 border-blue-500 rounded-lg">
                <form onSubmit={HandleSubmit}  className="flex flex-col items-center mb-5">
                    <input
                        type="text"
                        name="num1"
                        value=  {Numbers.num1}
                        onChange={HandleChange }
                        autoFocus

                        placeholder="Enter first number"
                        required
                        className="w-full p-3 border border-gray-300 rounded-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
                    />
                    <input
                        type="text"
                        name="num2"
                        value=  {Numbers.num2}
                        onChange={HandleChange }

                        placeholder="Enter second number"
                        required
                        className="w-full p-3 border border-gray-300 rounded-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
                    />
                    <input
                        type="text"
                        name="num3"
                        value=  {Numbers.num3}
                        onChange={HandleChange }

                        placeholder="Enter third number"
                        required
                        className="w-full p-3 border border-gray-300 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
                    />
                    <button
                        type="submit"
                        className="bg-green-400 p-3 w-42 rounded-full text-white font-bold text-xl cursor-pointer hover:bg-green-500 display-inline"
                    >
                        Find Largest
                    </button>

                    {/* <button
                        type="reset"
                        className="bg-green-400 p-3 w-42 rounded-full text-white font-bold text-xl cursor-pointer hover:bg-green-500"
                    >
                        Reset
                    </button> */}

                    {
                        Max && <h1 className="text-white text-xl text-semibold mt-5 text-center">Maximum of 3 numbers is: {Max}</h1>
                    }

                </form>
                
            </div>
        </div>




    </>
)
}

export default App;