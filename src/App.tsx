import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainLayout from './layout/MainLayout';
import Product from './pages/App/Product';
import Favourite from './pages/App/Favourite';
import SearchResult from './pages/App/SearchResult';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <BrowserRouter>
        
        <Routes>
          
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Product />} />
            <Route path='/favourite' element={<Favourite />} />
            <Route path='/search' element={<SearchResult />} />
          </Route>

        </Routes>

      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
