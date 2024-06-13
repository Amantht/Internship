import Navbar from './Navbar.jsx'
import Homepage from './Homepage.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>

        <BrowserRouter>
        <Routes>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter> 
    </>


  )
}

export default App
