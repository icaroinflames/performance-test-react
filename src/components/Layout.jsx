import { Outlet } from 'react-router-dom';
import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ThemeContext from "../context/ThemeContext"
import SideNav from "./SideNav";
import CustomAppBar from "./CustomAppBar";

const Layout = () => {
  const [theme, setTheme] = useState("simple");
  const [size, setSize] = useState("S");

  const toggleMode = () => {
    setTheme(theme === "simple" ? "cool" : "simple");
  };
  return (
    <ThemeContext.Provider value={{ theme, size, setSize }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <CustomAppBar/>
        <SideNav toggleMode={toggleMode} mode={theme}/>
        <Box sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>

    </ThemeContext.Provider>
  );
}

export default Layout;
