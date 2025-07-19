import { useState } from "react"

function App() {

  // handle input fields value
  const [cityName, setCityName] = useState('');
  const [famous, setFamous] = useState('');

  

  return (
    <div className='text-center mt-10'>
      <h1 className="text-5xl max-w-[500px] mb-20 mx-auto border-dashed border-b-2 pb-2 uppercase font-light text-slate-800">
        firebase fireStore
      </h1>

      <form>
        <input type="text" placeholder="Enter city name..." />
        <input type="text" placeholder="Famous for..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
