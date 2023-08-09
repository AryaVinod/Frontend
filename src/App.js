import { useState, useEffect } from 'react';
import './App.css';
import Field from './components/dropdown/Field'

// const data = [
//   {
//     label: "None",
//     states: [],
//   },
//   {
//     label: "India",
//     states: [{ label: "Kerala" }, { label: "Tamil nadu" }],
//   },
//   {
//     label: "Japan",
//     states: [{ label: "Tokyo" }, { label: "Osaka" }],
//   },
// ]

function App() {

  const [country, setCountry] = useState(null);
  const [data, setdata] = useState([]);

  useEffect(()=>{
    setdata([
      {
        label: "None",
        states: [],
      },
      {
        label: "India",
        states: [{ label: "Kerala" }, { label: "Tamil nadu" }],
      },
      {
        label: "Japan",
        states: [{ label: "Tokyo" }, { label: "Osaka" }],
      },
    ])
  },[])

  return (
    <div className="container">
      <h2>Location Details</h2>
      <Field label="Choose Country" options={data} onChooseCountry={setCountry}/>
      {country && country !== "None" && (
        <Field label="Choose State" options={data.find((item)=> item.label === country).states}/>
      )}
      <button className='button'>Submit</button>
    </div>
  );
}

export default App;
