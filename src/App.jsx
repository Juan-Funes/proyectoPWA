import React, { useState } from "react";
import Play from "./components/Play";
//import Reproducir from "./components/Reproducir";
import "./index.css";

function App() {
  const [mostrar, mostrarReproductor] = useState(false);
  

  return (
    <div className="App">
      <h1>REPRODUCIR EN PWA</h1>
      <div>
        <Play mostrarReproductor={mostrarReproductor} />
      </div>
     {//<div className="container">{mostrar ? <Reproducir /> : null}</div>
     } 
    </div>
  );
}

export default App;
