import React from 'react'

const Greator3 = () => {

  const [a, seta] = React.useState("");
  const [b, setb] = React.useState("");
  const [c, setc] = React.useState(" ");
  const [ans, setans] = React.useState(" ");

  const Greator = (e) => {
    e.preventDefault()

    setans((a > b && a > c) ? a :
           (b > c && b > a) ? b :
          c)

    seta("")
    setb("")
    setc("")

  }




  return (
    <>
      <div className="bg-slate-900 min-h-screen flex flex-col justify-center items-center">

        <h1 className="text-2xl text-white text-center font-bold mx-auto  mb-2">Greator number</h1>
        <div className="h-120 w-100 border-2 border-blue-300 rounded-xl mx-auto ">

          <h1 className="text-xl mx-auto mt-8 text-white text-center font-semibold">Enter numbers</h1>

          <form onSubmit={Greator}>
            <input type="number"
              className="w-80 border-2 border-white  text-white outine-none p-2 rounded ml-10 mt-10 placeholder:text-white placeholder:ml-2"
              autoFocus
              required
              name="a"
              placeholder="Enter the number first"

              onChange={(e) => {
                seta(e.target.value);
              }
              }


            ></input>

            <input type="number"
              className="w-80 border-2 border-white  text-white outine-none p-2 rounded ml-10 mt-10 placeholder:text-white placeholder:ml-2"
              required
              name="b"
              placeholder="Enter the number second"

              onChange={(e) => {
                setb(e.target.value);
              }
              }

            ></input>

            <input type="number"
              className="w-80 border-2 border-white  text-white outine-none p-2 rounded ml-10 mt-10 placeholder:text-white placeholder:ml-2"
              required
              name="c"
              placeholder="Enter the number third"

              onChange={(e) => {
                setc(e.target.value);
              }
              }

            ></input>


            <div className="w-90 ml-6 border-2 p-2 mt-6 border-none flex justify-between">

              <button type="submit"
                className="bg-green-500 ml-[-10] p-2 w-30 rounded-full text-white font-semibold text-xl cursor-pointer hover:bg-green-600 ">Greator</button>

              {/* <button type="button"
      className="bg-green-500 ml-[-10] p-2 w-30 rounded-full text-white font-semibold text-xl cursor-pointer hover:bg-green-600 ">LessThan</button>
 */}

            </div>
          </form>

          <p className="text-xl text-center text-white mt-10">
            {ans != null ?
              `Result is: ${ans}`
              : "Enter values to see the greator"
            }


          </p>
        </div>



      </div>
    </>
  )
}

export default Greator3;