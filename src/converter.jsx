import { useEffect, useState } from 'react';
import './converter.css';
import axios from 'axios';

function App() {
  const [value, setValue] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const convert = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const rate = response.data.rates[toCurrency];
        setExchangeRate(rate);
        setResult((value * rate).toFixed(2));
      } catch (e) {
        console.log(e);
      }
    };
    convert();
  }, [value, fromCurrency, toCurrency]);

  return (
    <div className='currency'>
      <div className="currency-container">
        <div className="pic"></div>
        <div className="infr">
          <h1>Currency Converter</h1>
          <label htmlFor="vle">Enter the value</label>
          <input type="number" id="vle" value={value} onChange={(e) => setValue(e.target.value)} />

          <label htmlFor="fromcurrency">From currency</label>
          <select id="fromcurrency" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            <option value="INR">INR - Indian Rupees</option>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>

          <label htmlFor="tocurrency">To currency</label>
          <select id="tocurrency" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="INR">INR - Indian Rupees</option>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>

          <div className="result">
            <p>{value} {fromCurrency} is equal to {result} {toCurrency}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
