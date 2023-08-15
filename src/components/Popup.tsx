import sonho from '../assets/sonho.jpeg';
import { FaSpotify, FaDeezer, FaYoutube } from 'react-icons/fa';

interface PopupProps {
  open: boolean;
  onClose: () => void;
}

function Popup({ open, onClose }: PopupProps) {
  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white/10 rounded-lg p-6 max-w-md mx-auto" onClick={(e) => e.stopPropagation()}>
        <img src={sonho} alt="sonho" className="mx-auto mb-4 rounded-lg" />
        <div className="text-center">
          <p className="text-lg font-semibold">"Sonho" está disponível em todas as plataformas digitais.</p>
          <span className="mt-2 flex justify-center">
            <a href="https://open.spotify.com/intl-pt/artist/0MDMFoY2RXR6J3xD5F4KCs" target="_blank" rel="noopener noreferrer" className="mr-3">
              <FaSpotify className="text-2xl text-green-500 hover:text-green-600 transition" />
            </a>
            <a href="https://www.deezer.com/br/artist/183519917" target="_blank" rel="noopener noreferrer" className="mr-3">
              <FaDeezer className="text-2xl text-blue-500 hover:text-blue-600 transition" />
            </a>
            <a href="https://www.youtube.com/@iarabicalhocantora" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl text-red-500 hover:text-red-600 transition" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Popup;
