import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {Home, Login, Profile, Register, ResetPassword} from "./pages";
import { Fragment } from "react";

function Layout(){
const {user} = useSelector(state => state.user);
  const location = useLocation()
  // console.log(user); 
  return user?.token ? (
    <Outlet />
  ):(
    <Navigate to="/login" start={{from : location}} replace />
  )
}
function App() {
  const {theme} = useSelector((state) => state.theme);
  // console.log(theme); x2 'dark' 'dark'
  return (
    <Fragment>
      <div data-theme={theme} className="w-full-min-h-[100vh]">
      {/* <h1 className="text-blue"> hello</h1> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile/:id?' element={<Profile />}/>
        </Route>
        
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />}/>
        

      </Routes>
    </div>
    </Fragment>
  );
}

export default App;
