import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainLayout from './layout/MainLayout';
import Product from './pages/App/Product';
import Favourite from './pages/App/Favourite';
import SearchResult from './pages/App/SearchResult';
import AddPrduct from './pages/App/AddPrduct';
import EditProduct from './pages/App/EditProduct';
import { useEffect, useState } from 'react';
import api from './api';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store/slices/UserSlice';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import PrivateRoute from './components/PrivateRoute';
import { RootState } from './store/store';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


function App() {

  // const [authState, setAuthState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authState , setAuthState] = useState(false)
  const dispatch = useDispatch();
  

  useEffect(() => {

    const fetchCurrentUser = async () => {

      try{
        setLoading(true)
        const res = await api.get('auth/current-user');
        console.log(res)
        dispatch(setUser(res.data.user))
        setAuthState(true)
        setLoading(false)
      }catch(err){
        console.log(err)
        setAuthState(false)
      }finally{
        setLoading(false)
      }
      
    }

    fetchCurrentUser()

    if(!localStorage.getItem('favouriteItems')) localStorage.setItem('favouriteItems' ,  JSON.stringify([]))
    
  }, [])

  if(loading){
    return (
      <div className='tw-w-full tw-h-[100vh] tw-flex tw-justify-center tw-items-center'><label>Loading...</label></div>
    )
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <BrowserRouter>
        
        <Routes>
          
          <Route path="/" element={<MainLayout />}>
            <Route index element={ <PrivateRoute element={ <Product />} />} />
            <Route path='/favourite' element={ <PrivateRoute  element={ <Favourite />} /> } />
            <Route path='/search' element={ <PrivateRoute  element={ <SearchResult />} /> } />
            <Route path='/add-product' element={ <PrivateRoute  element={ <AddPrduct />} /> } />
            <Route path='/edit-product' element={ <PrivateRoute element={ <EditProduct /> } /> } />
          </Route>

          <Route path='auth/login' element={<Login />} />
          <Route path='auth/register' element={<Register />} />

        </Routes>

      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
