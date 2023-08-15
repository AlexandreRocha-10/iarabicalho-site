import { FaInstagram, FaYoutube, FaSpotify, FaDeezer } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="absolute bottom-0 p-3 left-0 right-0 flex justify-between items-center bg-opacity-50 bg-black">
            <div className="flex space-x-4 text-white">
                <a href="https://www.instagram.com/iarabicalhocantora/"><FaInstagram size={25}/></a>
                <a href="https://www.youtube.com/@iarabicalhocantora"><FaYoutube size={25}/></a>
                <a href="https://open.spotify.com/intl-pt/artist/0MDMFoY2RXR6J3xD5F4KCs"><FaSpotify size={25}/></a>
                <a href="https://www.deezer.com/br/artist/183519917"><FaDeezer size={25}/></a>
            </div>
            <div>
                <p className="text-white invisible md:visible">Todos os direitos reservados - Light FOR 2023</p>
            </div>
        </footer>
    );
}

export default Footer;