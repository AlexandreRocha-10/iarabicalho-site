import { useEffect, useState } from 'react';
import videobg from '../assets/video-bg.mp4';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Popup from '../components/Popup';


function Main() {
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    setOpenPopup(true);
  }, []);

  return (
    <div className='relative h-screen'>
      <Header />
      <Popup open={openPopup} onClose={() => setOpenPopup(false)} />
      <video className='absolute inset-0 w-full h-full object-cover' src={videobg} autoPlay loop muted />
      <Footer />
    </div>
  );
}

export default Main;