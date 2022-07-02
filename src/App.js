import "./App.css";
import Home from "./Pages/Home";
import Results from "./Pages/Results";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [Term, setTerm] = useState();
  const [data, setData] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home Term={Term} setTerm={setTerm} data={data} setData={setData} />
          }
        />
        <Route
          path="Results"
          element={
            <Results
              Term={Term}
              setTerm={setTerm}
              data={data}
              setData={setData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
