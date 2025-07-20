import { useState } from "react"
import InputField from "./reusable-components/inputField";

function App() {

  // handle input fields value
  const [cityName, setCityName] = useState('');
  const [famous, setFamous] = useState('');

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    if(cityName !== "" && famous !== ""){
      alert("Form Submitted successfully");
      console.table({cityName, famous});
      setCityName('');
      setFamous('');
    }else{
      alert("please fill all the input fields");
    }
  }

  return (
    <div className='text-center mt-10'>
      <h1 className="text-5xl max-w-[500px] mb-20 mx-auto border-dashed border-b-2 pb-2 uppercase font-light text-slate-800">
        firebase fireStore
      </h1>

      <form onSubmit={handleFormSubmit}>
        <InputField 
          type={"text"}
          value={cityName}
          placeholder={"Enter city name..."}
          onChange={(e)=>setCityName(e.target.value)}
        />
        <InputField 
          type={"text"}
          value={famous}
          placeholder={"City Famous For..."}
          onChange={(e)=>setFamous(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
