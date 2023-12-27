import { useState } from "react";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "100%", height: "100vh", textAlign: "center" }}>
      <Calculator />
    </div>
  );
}

export default App;
