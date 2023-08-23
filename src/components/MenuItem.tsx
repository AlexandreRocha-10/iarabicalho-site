interface MenuItemProps {
    name: string;
    Icon: React.ComponentType<{ size: number, className: string }>;
    onClick: () => void;
}


export default function MenuItem({ name, Icon, onClick }: MenuItemProps) {
  return (
    <a 
      href={`${name.toLowerCase()}`} 
      onClick={onClick}
      className="w-[75%] flex justify-center items-center m-2 p-4 border rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out bg-black/90">
      <Icon size={20} className="text-blue-500"/>
      <span className="pl-4 text-white">{name}</span>
    </a>
  );
}