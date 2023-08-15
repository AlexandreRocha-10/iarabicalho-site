import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { BsHouseDoor, BsInfoCircle, BsCalendar, BsImage, BsNewspaper, BsDisc, BsEnvelope } from 'react-icons/bs';
import MenuItem from "./MenuItem";

const iconMapping: { [key: string]: React.ComponentType<{ size: number, className: string }> } = {
    Início: BsHouseDoor,
    Sobre: BsInfoCircle,
    Agenda: BsCalendar,
    Fotos: BsImage,
    Notícias: BsNewspaper,
    Discografia: BsDisc,
    Contato: BsEnvelope,
};

export default function Sidenav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  const handleMenuItemClick = () => handleNav();

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99]  text-2xl text-white cursor-pointer' />
        {
            nav ? (
                <div className="fixed w-full h-screen flex flex-col justify-center items-center z-20">
                    {Object.keys(iconMapping).map((itemName) => (
                        <MenuItem 
                        key={itemName}
                        name={itemName}
                        Icon={iconMapping[itemName]}
                        onClick={handleMenuItemClick}
                        />
                    ))}
                </div>
            ) : (
                ''
            )
        }
    </div>
  )
}
