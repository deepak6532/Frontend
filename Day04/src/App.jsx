import React from 'react'

import Sum from './Components/Sum'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Mul from './Components/Mul';


const App = () => {
  return (
    <div>
      <Router>
        <div className="bg-slate-900 min-h-screen text-white">
          <nav className="p-6">
            <ul className="flex justify-center">
              <li className="mx-4 text-3xl ">
              <Link to="/sum">Sum</Link>
              </li>

              <li className="mx-4 text-3xl ">
              <Link to="/mul">Mul</Link>
              </li>

              {/* <li className="mx-4 text-3xl ">
              <Link to="/sub">Sub</Link>
              </li> */}

            </ul>
          </nav>

          <Routes>
            <Route path="/sum" element={<Sum />} />
            <Route path="/mul" element={<Mul />} />
            {/* <Route path="/sub" element={<Sub />} /> */}
        
          </Routes>
        </div>
      </Router>

    </div>

  )
}

export default App