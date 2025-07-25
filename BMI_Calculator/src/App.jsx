import { useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState('Health isn’t about numbers, but they help guide better choices — know your BMI');


  const handelHeight = (event) => {
    setHeight(event.target.value);
  }

  const handelWeight = (event) => {
    setWeight(event.target.value);
  }


  const handelCalc = function () {

    if (!height || !weight || height <= 0 || weight <= 0) {
      setResult("Please enter valid height and weight to calculate your BMI!!");
      return;
    }

    const heightInCm = height / 100;
    const bmi = (weight / (heightInCm * heightInCm)).toFixed(2);
    const catogery = getCatogery(bmi);


    const finalResult = `Your Calculated BMI is ${bmi} : ${catogery}`;
    setResult(finalResult);
  }

  const getCatogery = (bmi) => {

     if (bmi < 16 ) {
      return "Severe Thinness";
    } else if (bmi >= 16 && bmi <= 16.9) {
      return "Moderate Thinness";
    } else if (bmi >= 17 && bmi <= 18.4) {
      return "Mild Thinness";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal (Healthy)";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
      return "Obese Class I";
    } else if (bmi >= 35 && bmi <= 39.9) {
      return "Obese Class II";
    } else if (bmi >= 40) {
      return "Obese Class III";
    }
  }

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
              <input 
              value={weight}
              onChange={handelWeight}
              type="number" 
              min={0} 
              id='weight' 
              placeholder='Enter weight here..'/>
            </div>
            <div className="height-content">
              <label htmlFor="height">Height <span>(cm)</span></label>
              <input 
              value={height}
              onChange={handelHeight}
              type="number" 
              min={0} 
              id='height' 
              placeholder='Enter height here..'/>
            </div>
          </form>

          <div className="calculate">
            <button onClick={handelCalc}>Calculate Your BMI</button>
          </div>

          <div className="result">
            <p>{result}</p>
          </div>

          <div className="info-details">
            <div className="info-header">
              <h4>BMI Categories</h4>
            </div>
            <div className="text-content">
              <ul className='left-info'>
              <li><strong>Severe Thinness :</strong> BMI &lt; 16</li>
              <li><strong>Moderate Thinness :</strong> 16 – 16.9</li>
              <li><strong>Mild Thinness :</strong> 17 – 18.4</li>
              <li><strong>Normal (Healthy) :</strong> 18.5 – 24.9</li>
            </ul>
            <ul className='right-info'>
              <li><strong>Overweight :</strong> 25 – 29.9</li>
              <li><strong>Obese Class I :</strong> 30 – 34.9</li>
              <li><strong>Obese Class II :</strong> 35 – 39.9</li>
              <li><strong>Obese Class III :</strong> BMI ≥ 40</li>
            </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
