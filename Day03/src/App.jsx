import React from 'react'

const App = () => {

  const [name ,setName] = React.useState("");
  const [email ,setEmail] = React.useState("");
  const [password ,setPassword] = React.useState("");

 

//   const show = () => {
//     return (
//     <div div className="w-95 mx-auto m-1 h-29  text-black ">

//     <h1 className='mt-2'><strong>Name:</strong>     {name}     </h1>
//     <h1 className='mt-2'><strong>Email:</strong>    {email}    </h1>
//     <h1 className='mt-2'><strong>Password:</strong> {password} </h1>

// </div>
//     );
//   };

  return (
    <>
    <div className="min-h-screen bg-gray-400">

      <div className="p-8 w-full bg-slate-800 border-2 mx-auto rounded-lg">

      </div>

      <div className="h-120 w-110 mt-6 p-4 bg-white border-2 mx-auto rounded-lg">

        <h1 className="text-slate-800  text-2xl text-center mt-2 font-bold">Enter Details</h1>

        <input type="text"
        className="w-full p-3 mt-10 border-2 rounded-lg outline-none " 
        placeholder="Enter your name"
        name="name"
        autoFocus
        required

      onChange={(e) =>
        {
          setName(e.target.value);
        }}

        ></input>

        <input type="email"
        className="w-full p-3 mt-8 border-2 rounded-lg outline-none" 
        placeholder="Enter your email"
        name="email"
       
        required

        onChange={(e) =>
          {
            setEmail(e.target.value);
          }}
        ></input>

        <input type="password"
        className="w-full p-3 mt-8 border-2 rounded-lg outline-none" 
        placeholder="Enter your password"
        name="password"
       
        required


        onChange={(e) =>
          {
            setPassword(e.target.value);
        }}

        ></input>

        <input type="checkbox"
        className="size-4 mt-4 ml-2 border-2 rounded outline-none"
        name="chk" 
       
      
        
        ></input>

{/* 
<button onClick={show}
className="h-8 w-18 border-2 mt-3 m-10 rounded  bg-red-600 text-white font-bold cursor-pointer">submit</button> */}

        <div div className="w-95 mx-auto m-1 h-29  text-black ">

            <h1 className='mt-2'><strong>Name:</strong>     {name}     </h1>
            <h1 className='mt-2'><strong>Email:</strong>    {email}    </h1>
            <h1 className='mt-2'><strong>Password:</strong> {password} </h1>

        </div>
  
          

        </div>


         

    </div>
    
    
    
  
    </>
  )
}

export default App