import videobg from '../assets/video-bg.mp4';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import { useState, useEffect } from 'react';

function Schedule() {
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    setOpenPopup(true);
  }, []);

  return (
    <>
      <Header />
      <Footer />
      <Popup open={openPopup} onClose={() => setOpenPopup(false)} />
      <div className='video-background h-screen max-w-full'>
        <video src={videobg} autoPlay loop muted />
      </div>
    </>
  );
}

export default Schedule;