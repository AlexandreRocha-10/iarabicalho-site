import { Route, Routes } from 'react-router-dom';
import Main from "./pages/Main";
import About from './pages/About';
import Schedule from './pages/Schedule';

import aboutData from './data/AboutData';



function App() {
  const mainRoutes = ['/', '/inicio'];

  return (
    <Routes>
      {mainRoutes.map((path) => (
        <Route key={path} path={path} element={<Main />} />
      ))}
      <Route path="/sobre" element={<About AboutData={aboutData} />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
}

export default App;