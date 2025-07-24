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
              <input type="text" id='weight' placeholder='Enter weight here..'/>
            </div>
            <div className="height-content">
              <label htmlFor="height">Height <span>(cm)</span></label>
              <input type="text" id='height' placeholder='Enter height here..'/>
            </div>
          </form>

          <div className="calculate">
            <button>Calculate Your BMI</button>
          </div>

          <div className="result">
            <p>Health isn’t about numbers, but they help guide better choices — know your BMI</p>
          </div>

          <div className="info-details">
            <div className="info-header">
              <h4>BMI Categories</h4>
            </div>
            <div className="text-content">
              <ul className='left-info'>
              <li><strong>Severe Thinness:</strong> BMI &lt; 16</li>
              <li><strong>Moderate Thinness:</strong> 16 – 16.9</li>
              <li><strong>Mild Thinness:</strong> 17 – 18.4</li>
              <li><strong>Normal (Healthy):</strong> 18.5 – 24.9</li>
            </ul>
            <ul className='right-info'>
              <li><strong>Overweight:</strong> 25 – 29.9</li>
              <li><strong>Obese Class I:</strong> 30 – 34.9</li>
              <li><strong>Obese Class II:</strong> 35 – 39.9</li>
              <li><strong>Obese Class III:</strong> BMI ≥ 40</li>
            </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
