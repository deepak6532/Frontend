import React from 'react' //rafce

const App = () => {

  const HandleChange = (e) =>
  {
    console.log("Input tag touched ",e.target.value);
  };

  return (
    <>
    {/* <div className="bg-amber-400 p-4 flex justify-center ">App</div> */}
    <div className="h-150 w-full bg-green-200 min-h-screen items-center flex justify-center" >
 

   <div className="h-auto   w-80 border-2 mx-auto mt-6 bg-[#141b29] rounded-xl">
      <h1 className="mt-10 text-center text-white font-bold text-xl" >Enter Detail</h1>
      <form>
      <input type="text" 
      className="h-13 w-60 ml-10 mt-4 border-3 rounded-md border-[#323846] p-4 outline-none text-xl placeholder:text-[#6b717f] placeholder:ml-2 text-white"
       placeholder="Enter name"
       autoFocus   
       required
       name="name"

       onChange={HandleChange}
       
       ></input>

      <input type="email" 
      className="h-13 w-60 ml-10 mt-4 border-3 rounded-md border-[#323846] p-4 outline-none text-xl placeholder:text-[#6b717f] placeholder:ml-2 text-white"
       placeholder="Enter email"  
       required
       name="email"

       onChange={(e) =>
        {
          console.log("Input tag email touched ",e.target.value)
        }}

       ></input>

      <button type="submit"   className="h-12 w-34 mt-10 ml-24 flex justify-center font-bold bg-[#e9b64e] p-3 rounded-3xl cursor-pointer  hover:bg-[#e9a34ef4]">submit</button>
      </form>
      {/* <div className="w-70 h-1 ml-6 mt-4 bg-amber-200"></div>  */}
    </div>
    </div>

    </>
  )
}

export default App