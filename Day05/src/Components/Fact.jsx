import React from 'react'

const Fact = () => {

    const [f,setf] = React.useState("");
    const [ans,setans] = React.useState();

    const facto = (e) =>
    {
        e.preventDefault()
        let n = parseInt(f);
        let result = 1;

        for(let i=1; i<=n;i++)
        {
            result = result*i;
        }
        setans(result);
        setf("");
    }
    
  return (
   <>

   <div className="min-h-screen bg-green-300 flex justify-center items-center ">


    <div className="h-100 w-100 bg-white p-2 mx-auto rounded-xl">
        <h1 className="text-slate-900 font-bold text-2xl text-center mt-4 ">Find Factorail of a number </h1>

  <form onSubmit={facto}>

  <input type="number"
        className="w-80 ml-10 p-2 mt-10 border-2 border-slate-900 text-black rounded-xl placeholder:text-black placeholder:ml-2"
        placeholder="Enter the number "
        autoFocus
        required
        name="f"
        onChange={(e) =>{
            setf(e.target.value);
        }
        }
        >

        </input>

        <button type="submit" className="w-30 p-2 bg-slate-800 text-white font-bold rounded-full mt-10 ml-10 cursor-pointer hover:bg-slate-900 ">Result</button>
  </form>


  <p className="text-2xl font-semibold text-center mt-15">

  { ans !== undefined ?
      `Result is : ${ans}`
        : "Enter values to see the factorial"
  }
  </p>




    </div>
   </div>
   
   
   
   
   </>
  )
}

export default Fact;