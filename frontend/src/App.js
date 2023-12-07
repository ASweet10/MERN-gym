import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import toast, { Toaster } from 'react-hot-toast'
import './index.css'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Blog from './pages/Blog'
import Classes from './pages/Classes'
import Rates from './pages/Rates'
import Footer from './components/Footer'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="font-poppins">
      <BrowserRouter basename="/index.html">
        <div><Toaster/></div>
        <Navbar />
        <div className="w-full h-full my-0 mx-auto">
          <Routes>
            {/* If user exists, route to proper page. If not, route to login */}
            <Route path="/" element={ <Home /> }/>
            <Route path="/about" element={ <About /> } />
            <Route path="/blog" element={ <Blog /> } />
            <Route path="/classes" element={ <Classes /> } />
            <Route path="/rates" element={ <Rates /> } />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
