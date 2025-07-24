import {  } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="container-header">
            <h2>BMI Calculator</h2>
          </div>

          <form action="" className="inputForm">
            <div className="weight-content">
              <label htmlFor="weight">Weight <span>(Kg)</span></label>
              <input type="text" id='weight' placeholder='enter weight here..'/>
            </div>
            <div className="height-content">
              <label htmlFor="height">Height <span>(cm)</span></label>
              <input type="text" id='height' placeholder='enter height here..'/>
            </div>
          </form>

          <div className="calculate">
            <button>Calculate Your BMI</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
