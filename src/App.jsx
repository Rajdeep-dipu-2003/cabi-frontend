import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
import UserProtectedWrapper from "./pages/UserProtectedWrapper"
import CaptainProtectWrapper from "./pages/CaptainProtectedWrapper"
import UserLogout from "./pages/UserLogout"
import CaptainHome from "./pages/CaptainHome"

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
        }/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/singup' element={<UserSignup/>}/>
        <Route path='/captain-singup' element={<CaptainSignup/>}/>
        <Route path='/user/logout' element={<UserLogout/>}/>
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>

        } />
      </Routes>
    </>
  )
}

export default App
