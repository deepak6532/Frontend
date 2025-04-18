import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Sum from './Components/Sum';
import Mul from './Components/Mul';
import Sub from './Components/Sub';
import Greator3 from './Components/greator3';
import Factorial from './Components/Factorial';

const App = () => {
  return (
    <div>
      <Router>
        <div className="bg-slate-900 min-h-screen text-white">
          <nav className="p-6">
            <ul className="flex justify-center ">
              <li className="mx-4 text-3xl ">
                <Link to="/sum">Sum</Link>
              </li>

              <li className="mx-4 text-3xl ">
                <Link to="/mul">Mul</Link>
              </li>

              <li className="mx-4 text-3xl">
                <Link to="/Sub">Sub</Link>
              </li>

              <li className="mx-4 text-3xl">
                <Link to="/Greator3">Largest3</Link>
              </li>

              <li className="mx-4 text-3xl">
                <Link to="/Factorial">Factorial</Link>
              </li>  

            
            </ul>
          </nav>

          <Routes>
            <Route path="/sum" element={<Sum />} />
            <Route path="/mul" element={<Mul />} />
            <Route path="/sub" element={<Sub />} />
            <Route path="/Greator3" element={<Greator3 />} />            
            <Route path="/factorial" element={<Factorial/>}/>


          </Routes>
        </div>
      </Router>

    </div>
  )
}

export default App;

