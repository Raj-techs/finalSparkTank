import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import StaticPg from './pages/StaticPg'
import SingleGroup from './pages/SingleGroup'
import DetailsPage from './pages/DetailsPage'
import UserAuth from './pages/UserPg/UserAuth'
import UserStaticPg from './pages/UserPg/UserStaticPg'
import UserReq from './pages/UserPg/UserReq'
import GovstaticPg from './pages/Gov/GovstaticPg'
import DetailsGov from './components/Gov/DetailsGov'
import Home from './pages/HomePages/pages/Home'
import Header from './components/HomeComponents/components/Header'
import Profile from './pages/HomePages/pages/Profile'
import About from './pages/HomePages/pages/About'
import Login from './pages/HomePages/pages/Login'
import Register from './pages/HomePages/pages/Register'

const App = () => {
  return (
    <>
      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path="/profile" element={<Profile />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>


          <Route path='/addUser' element={<StaticPg/>}/>
          <Route path='/singlegroup' element={<SingleGroup/>}/>
          <Route path='/special' element={<StaticPg/>}/>
          <Route path='/update' element={<StaticPg/>}/>
          <Route path='/details/:id' element={<DetailsPage/>}/>




          <Route path='/admin' element={<StaticPg/>}/>
          <Route path='/user/home' element={<UserStaticPg/>}/>
          <Route path='/user/req' element={<UserReq/>}/>
          
          
          <Route path='/gov' element={<GovstaticPg/>}/>
          <Route path='/gov/details/:id' element={<DetailsGov/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
