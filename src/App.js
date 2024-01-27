// import {BrowserRouter, Routes, Route} from "react-router-dom"

// import Layout from "./Layout"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Service from "./pages/Service"

// export default function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//         <Route index element={<Home/>}/>
//         <Route path="about" element={<About/>}/>
//         <Route path="contact" element={<Contact/>}/>
//         <Route path="service" element={<Service/>}/>

//       </Route>
//     </Routes>
//     </BrowserRouter>
//     )
// }

import React from 'react'
import Counter from './pages/Counter'
import Effect from './pages/Effect'
import Reducer from './pages/Reducer'
import Callback from './pages/Callback'
import Ref from './pages/Ref'
import CounterComponent from './pages/CounterComponent'
import Memo from './pages/Memo'

export default function App() {
  return (
    <div>
    <Counter/>
    <Effect/>
    <Reducer/>
    <Callback/>
    <Ref/>
    <CounterComponent/>
    <Memo/></div>
  )
}