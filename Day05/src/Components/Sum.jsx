import React from 'react' //rafce

const Sum = () => {

  const [a, seta] = React.useState("");
  const [b, setb] = React.useState("");
  const [ans, setans] = React.useState();
  
  const HandleSubmit = (e) => {
    e.preventDefault();
    setans(parseInt(a) + parseInt(b))
    seta("")
    setb("")

  }


  return (
    <>
      <div className="min-h-screen bg-gray-400">

        <div className="min-h-screen bg-gray-400 flex flex-col justify-center items-center">
          <h1 className=" text-center text-[#141b29] text-3xl font-bold p-2">Calculate the sum</h1>

          <div className="h-auto w-100  mb-20 bg-[#141b29] border-2 p-10 rounded-xl">

            <h1 className="text-center text-2xl text-white  mt-1 font-bold mb-10 ">Enter numbers:</h1>

            <form onSubmit={HandleSubmit}>

              <input type="text"
                className="h-11 w-80 mx-auto border-1 p-2 text-white text-xl border-[#323846]   outline-none rounded 
          placeholder:text-blue-300"
                autoFocus
                required
                name="a"
                value={a}
                placeholder="Enter value  of a"

                onChange={(e) => {

                  seta(e.target.value);
                }
                }

              ></input>

              <input type="text"
                className="h-11 w-80 m-4 mx-auto border-1 p-2 text-white text-xl border-[#323846]  outline-none rounded 
          placeholder:text-blue-300 "
                required
                name="b"
                value={b}

                placeholder="Enter value  of b"

                onChange={(e) => {

                  setb(e.target.value);
                }
                }

              >

              </input>

              <button type="submit"
                className="bg-green-400 w-30 p-2 rounded-full hover:bg-green-500 text-white font-semibold  text-whtite  text-xl">
                sum </button>
            </form>



            < p className="text-center text-white text-xl mt-5  ">

              {ans != null ?
                `Result is : ${ans}`
                : "Enter values to see the sum"
              }


            </p>

          </div>
        </div>

      </div>
    </>
  )
}

export default Sum;