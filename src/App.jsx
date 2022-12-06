import { useState } from 'react'

import './App.css'
import DataDisplay from './Results.jsx'

export default function App() {

  const [password, setPassword] = useState('')
  const [largeData, setLargeData] = useState(false)
  const [dataDisplayType, setDataDisplayType] = useState('')
  const [showData, setShowData] = useState(false)

  function handleClick() {
    if (largeData) {
      setDataDisplayType("LargeDataset")
    }
    else {
      setDataDisplayType(password)
    }
    setShowData(true)
  }

  return (
    <main>
      <div className="main-title" >
        <div className="uf-logo" ><img height="50px" src="https://catalog.ufl.edu/images/logo.svg" /></div>
        <div className="navbar-names" >
          <span>SEBASTIAN SARMIENTO</span>
          <span>MATEO SLIVKA</span>
          <span>TYLER WOODRUFF</span>
        </div>
        <h2>Hash Functions Performance Analysis</h2>
      </div>

      <p>The purpose of this program is to compare the performance of the hashing functions sha-256 and keccak in the context of password encryption. To use the program follow these instructions: </p>
      <div>
        <ul>
          <li>Select a password from the list of common passwords or select the large dataset option of over 100,000 values.</li>
          <li>Click the run test button.</li>
          <li>See results of hash functions when the password string is passed into it.</li>
        </ul>
        <div className="input-container" >
          <div className="input-data" >
            <div className="dropdown">
              <label>Select a common password: </label>
              <select onChange={e => setPassword(e.target.value)} value={password} >
                <option value="Password1" >guest</option>
                <option value="Password2">12345</option>
                <option value="Password3">1234</option>
                <option value="Password4">password</option>
                <option value="Password5">a1b2c3</option>
                <option value="Password6">liverpool</option>
                <option value="Password7">qwerty</option>
                <option value="Password8">arsenal</option>
                <option value="Password9">123456789</option>
                <option value="Password10">abc123</option>
              </select>
            </div>
            <span>or</span>
            <div className="input-large-dataset" >
              <input type="radio" id="input-data-btn" onClick={() => setLargeData(true)} />
              <label htmlFor="input-data-btn" >Select large dataset of passwords</label>
            </div>
          </div>
          <div className="run-test-btn" >
            <button
              name="result-button"
              onClick={() => handleClick()}
            >
              RUN TEST</button>
          </div>
        </div>

        <div className="results-container" >
          <div className="results-sha256" >
            <h3>SHA256</h3>
            {showData ? <DataDisplay DataType={dataDisplayType} HashType={"SHA"}></DataDisplay> : <div className="no-data-text" >No data to display</div>}
          </div>
          <div className="results-keccak" >
            <h3>Keccak</h3>
            {showData ? <DataDisplay DataType={dataDisplayType} HashType={"Keccak"}></DataDisplay> : <div className="no-data-text" >No data to display</div>}
          </div>
        </div>
      </div>
    </main>
  )
}
