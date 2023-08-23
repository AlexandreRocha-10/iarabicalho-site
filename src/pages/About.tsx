import Header from '../components/Header';
import Footer from '../components/Footer';
import { FC } from 'react';
import AboutItem from '../components/AboutItem';

import sobrebg from '../assets/sobrebg.png';

interface AboutDataItem {
  year: string;
  title: string;
  details: string;
}

interface AboutListProps {
  AboutData: AboutDataItem[];
}

const About: FC<AboutListProps> = ({ AboutData }) => {
  return (
    <div className="relative h-screen bg-gray-700">
      <Header />
      <div id="about" className="flex items-center">
        <div
          className="absolute inset-0 w-full h-full object-cover invisible md:visible"
          style={{
            backgroundImage: `url(${sobrebg})`,
            backgroundSize: 'cover',
          }}
        />
        <div className="flex flex-col md:flex-row md:w-3/4 mx-auto">
          <div className="w-full md:w-[50%] md:pr-4 relative z-10 overflow-hidden">
            <h1 className="text-4xl font-semibold mb-4 mt-48 text-white">Biografia</h1>
            <div className="max-h-[calc(100vh-20rem)] overflow-y-auto scrollbar-hide">
              {AboutData.map((item, idx) => (
                <AboutItem
                  key={idx}
                  year={item.year}
                  title={item.title}
                  details={item.details}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
