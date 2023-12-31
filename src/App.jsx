
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import Talleres from './components/Talleres/Talleres'
import Cuenta from './components/Cuenta/Cuenta'
/* import Footer from './components/Footer/Footer' */

function App() {

  return (
    <>
      <BrowserRouter>
        
          <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='talleres' element={<Talleres />} />
          <Route path='./cuenta' element={<Cuenta />} />
        </Routes>
     {/*    <footer>
          <Footer />
        </footer> */}
      </BrowserRouter>
    </>
  )
}

export default App
