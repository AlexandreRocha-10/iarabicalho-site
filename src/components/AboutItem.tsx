import { FC } from 'react';

interface AboutItemProps {
  year: string;
  title: string;
  details: string;
}

const AboutItem: FC<AboutItemProps> = ({ year, title, details }) => {
  return (
    <div className="mb-6 p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-md">
      <div className="flex justify-start items-center mb-2 space-x-2">
        <p className="text-xl font-bold text-white">{year}</p>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-white text-sm">{details}</p>
    </div>
  );
};

export default AboutItem;
