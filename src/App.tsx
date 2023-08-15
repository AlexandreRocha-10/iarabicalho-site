import { Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import About from './pages/About';
import Schedule from './pages/Schedule';



function App() {
  return (
    <Routes>
      <Route path="/" element={ <Main /> }/>
      <Route path="/about" element={ <About /> } />
      <Route path="/schedule" element={ <Schedule /> } />
      <Route path="/photos" element={ <About /> } />
      <Route path="/news" element={ <About /> } />
      <Route path="/discos" element={ <About /> } />
      <Route path="/contact" element={ <About /> } />
      <Route path="/central" element={ <About /> } />
      <Route path="/store" element={ <About /> } />
    </Routes>
  )
}

export default App