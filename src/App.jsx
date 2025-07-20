import { useEffect, useState } from "react"
import InputField from "./reusable-components/inputField";
import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "./firebase/firebase.config";
import DisplayData from "./reusable-components/Display/DisplayData";

function App() {

  // handle input fields value
  const [cityName, setCityName] = useState('');
  const [famous, setFamous] = useState('');

  const [doc, setDoc] = useState([]);

  // function to save data in fireStore
  const handleFormSubmit = async(e) =>{
    e.preventDefault();
    if(cityName !== "" && famous !== ""){
      try {
        const dataRef = await addDoc(collection(db, "famous_cities"), {
          city: cityName, 
          famous_for: famous
        });
        if(dataRef.id){
          alert("Data successfully added in firebase fireStore");
        }
        setCityName('');
        setFamous('');

      } catch (error) {
        console.log(error);
      }

    }else{
      alert("please fill all the input fields");
    }
  }

  // function to read data from fireStore
  useEffect(()=>{
    const fetchData = async() =>{
      const city_info = [];
      const querySnapshot = await getDocs(collection(db, "famous_cities"));
      querySnapshot.forEach((doc) => {
        city_info.push({id: doc?.id, ...doc?.data()});
      })
      setDoc(city_info);
    }

    fetchData();
  }, []);

  console.log(doc);

  return (
    <div className='text-center mt-10'>
      <h1 className="text-5xl max-w-[500px] mb-20 mx-auto border-dashed border-b-2 pb-2 uppercase font-light text-slate-800">
        firebase fireStore
      </h1>

      <form 
        onSubmit={handleFormSubmit}
        className="mb-20"
        >
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

      {/* displaying data component */}
      {
        doc.map((city_doc) => <div className="flex justify-center flex-row" key={city_doc?.id}>
          <DisplayData 
            city_doc={city_doc}
          />
        </div>)
      }
    </div>
  )
}

export default App
