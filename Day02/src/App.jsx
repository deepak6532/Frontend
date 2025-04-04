
import React from 'react' //rafce

const App = () => {

  let name="Deepak"

  const [a, seta] = React.useState(0);
  const [b, setb] = React.useState(0);

  
  return (
    <>

      <div className="min-h-screen bg-gray-400 flex justify-center items-center">

    
        <div className="h-auto w-100   bg-[#141b29] border-2 p-10 rounded-xl">
        <h1 className="text-center text-2xl text-white  mt-1 font-bold mb-10 ">Enter numbers:</h1>

          <input type="text"
          className="h-11 w-80 mx-auto border-1 p-2 text-white text-xl border-[#323846]   outline-none rounded 
          placeholder:text-blue-300"
          autoFocus
          required
          name = "a"

          placeholder="Enter value  of a"

          onChange = {(e) => {

            seta(e.target.value);
          }
          }

          ></input>
          <input type="text"
          className="h-11 w-80 m-4 mx-auto border-1 p-2 text-white text-xl border-[#323846]  outline-none rounded 
          placeholder:text-blue-300 "
          required
          name = "b"

          placeholder="Enter value  of b"

          onChange={(e) => {

            setb(e.target.value);
          }
          }

          >

          </input>
          < p className="text-center text-white text-xl mt-5  ">
          
            {a && b ?
           `sum of ${a} and ${b} is : ${parseInt(a)+ parseInt(b)}`
           :` Enter values to see the sum    `
            }

          
          </p>
       
        </div>
      </div>

      

    </>
  )
}

export default App