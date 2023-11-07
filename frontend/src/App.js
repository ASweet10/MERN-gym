import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import toast, { Toaster } from 'react-hot-toast'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Blog from './pages/Blog'
import Classes from './pages/Classes'
import Footer from './components/Footer'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="font-poppins">
      <BrowserRouter>
        <div><Toaster/></div>
        <Navbar />
        <div className="w-full h-full my-0 mx-auto">
          <Routes>
            {/* If user exists, route to proper page. If not, route to login */}
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/about" element={user ? <About /> : <Navigate to="/login" />} />
            <Route path="/blog" element={user ? <Blog /> : <Navigate to="/login" />} />
            <Route path="/classes" element={user ? <Classes /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          </Routes>
        </div>
        { user && <Footer /> }
      </BrowserRouter>
    </div>
  );
}

export default App;
