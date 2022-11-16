import "./styles.css";
import Layout from "./components/Layout";
import Model1 from "./components/test1/Model";
import Model2 from "./components/test2/Model";
import Model3 from "./components/test3/Model";
import { Typography } from '@mui/material';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import DataContext from "./context/DataContext";

export default function App() {
  return (
    <div className="App">
      <DataContext.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={
                <Typography variant="h6" noWrap component="div">
                  React performance testing
                </Typography>
              } />
              <Route path='/test1' element={<Model1 />} />
              <Route path="/test2" element={<Model2 />} />
              <Route path="/test3" element={<Model3 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

