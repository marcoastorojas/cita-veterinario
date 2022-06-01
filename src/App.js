import { useEffect, useState } from "react";
import { Citas } from "./components/Citas";
import { CrearCitas } from "./components/CrearCitas";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas")) || [];

  const [listaCitas, setListaCitas] = useState(citasIniciales)
  
  useEffect(() => {
      localStorage.setItem("citas",JSON.stringify(listaCitas))
  }, [listaCitas])
  


  return (
    <div className="App">
      <CrearCitas 
        setListaCitas={setListaCitas}
      />

      <Citas 
        listaCitas = {listaCitas}
      />
    </div>
  );
}

export default App;
