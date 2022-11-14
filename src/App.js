import "./styles.css";
import Model from "./components/simpleCalcs/Model";
import ModelTest from "./components/simpleCalcs2/Model";
import ModelFirst from "./components/firstAttempt/Model";
import ModelSecond from "./components/secondAttempt/Model";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import DataContext from "./context/DataContext";

export default function App() {
  return (
    <div className="App">
      <DataContext.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/:structureSize" element={<Model/>}></Route>
            <Route path="test/:structureSize" element={<ModelTest/>}></Route>
            <Route path="first/:structureSize" element={<ModelFirst/>}></Route>
            <Route path="second/:structureSize" element={<ModelSecond/>}></Route>
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

