import React from 'react';
import './App.css';
import Kalkulator from './Kalkulator';
import ButtonAppBar from './AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='App'>
        <Kalkulator />
        <ButtonAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
      </div>
    </ThemeProvider>
  );
};

export default App;