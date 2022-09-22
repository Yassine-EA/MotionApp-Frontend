import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';


import Home from "./pages/Home/index";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TvShows from "./pages/TvShows";
import Actors from "./pages/Actors";


function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );


  return (



    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path='tv' element={<TvShows />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='actors' element={<Actors />} />
      <Route path='contact' element={<Contact />} />
    </Routes>

  );
}

export default App;