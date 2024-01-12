import Sidebar from "./Sidebar"
import Hero from "./hero"
import React from "react"
import '../App.css'
import Profile from "./profile"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function AppRouter(){
return (
<Router>
<Routes>
<Route path="/" element={<Hero />} />
 <Route path="/profile" element={<Profile />}/>
</Routes>
</Router> 
)
}

export default AppRouter;