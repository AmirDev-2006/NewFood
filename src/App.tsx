import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import SearchBar from './components/SearchBar/SearchBar'
import Detail from './components/Detail/Detail'
import Acount from './components/Acount/Acount'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/search' element={<SearchBar/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/acount' element={<Acount/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
