import { useState } from "react";
import "./WeightMechine.css";
import { useNavigate } from "react-router-dom";


function App() {
    const native=useNavigate()
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  const calculate = () => {
    if (!/^\d+$/.test(height) || !/^\d+$/.test(weight)) {
      setError(true);
      return;
    }
    
    setError(false);
    const heightInM = Number(height) / 100;
    const n = Number(weight) / (heightInM * heightInM);
    setBmi(n.toFixed(2));

    if (n < 18.5) {
      setResult("Underweight");
    } else if (n >= 18.5 && n < 25) {
      setResult("Normal");
    } else if (n >= 25 && n < 30) {
      setResult("Overweight");
    } else {
      setResult("Obese");
    }
    
  };

  const clear = () => {
    setHeight("");
    setWeight("");
    setBmi("");
    setResult("");
    setError(false);
  };

  return (
    <div className="weight">
      <div className="container-weight">
        <div className="des"></div>
        <div className="data">
          <h1>Weight Calculator</h1>
          {error && <p>Please enter valid height and weight</p>}
          <label>
            Enter the height in (cm)
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <label>
            Enter the weight in (kg)
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <div className="btn">
            <button onClick={calculate}>Calculate</button>
            <button onClick={clear}>Clear</button>
            <button onClick={()=>native("*")}>back</button>
          </div>
          {
          !error && bmi && <div className="result">
            {bmi && <p>Your BMI score is {bmi}</p>}
            {result && <p>{result}</p>}
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
