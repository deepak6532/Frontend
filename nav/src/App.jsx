import React from 'react' //rafce

const App = () => {

  const HandleChange = (e) => {
    console.log("Input tag touched ", e.target.value);
  };

  return (
    <>
      {/* <div className="bg-amber-400 p-4 flex justify-center ">App</div> */}
      <div className="h-130 w-full bg-white min-h-screen " >

        <div className="bg-slate-700 w-full p-2 flex justify-around items-center  shadow-lg shadow-gray-300">

          <div className="h-13 w-25 rounded text-white text-center flex items-center ml-4">
           <img src="https://static.vecteezy.com/system/resources/previews/000/611/276/original/vector-luxury-letter-d-emblem-wings-logo-design-concept-template.jpg" alt="" 
           className="h-full w-full rounded"/>
          </div>

          <ul className="w-150  h-15 text-xl flex justify-around items-center  ml-10 ">
            <li className="font-semibold text-white  hover:font-bold  hover:text-red-600  hover:underline"><a href="#">Home</a></li>
            <li className="font-semibold text-white hover:font-bold  hover:text-red-600 hover:underline"><a href="#">About</a></li>
            <li className="font-semibold text-white hover:font-bold  hover:text-red-600 hover:underline"><a href="#">Service</a></li>
            <li className="font-semibold text-white hover:font-bold  hover:text-red-600 hover:underline"><a href="#">Blog</a></li>
            <li className="font-semibold text-white hover:font-bold  hover:text-red-600 hover:underline"><a href="#">Contact</a></li>
          </ul>

        </div>

        <div className="min-h-screen p-8 ml-10 mr-10 h-130 border-2 mt-4 bg-green-200  flex  justify-around items-center">

          <div className="h-130 w-90 border-2 border-black "></div>
          <div className="h-130 w-190 border-2 border-black p-1">
            <img src="https://wallpaperaccess.com/full/1349226.jpg" alt="" 
            className="h-full w-full cursor-pointer transform scale-[1.02]"/>
          </div>
        </div>

      </div>

    </>
  )
}

export default App