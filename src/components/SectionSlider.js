import { useState } from 'react';

const SectionSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrev} className="text-xl hover:text-blue-500">
          &larr;
        </button>
        <button onClick={handleNext} className="text-xl hover:text-blue-500">
          &rarr;
        </button>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="relative">
                <img src={item.imgSrc} alt={item.title} className="w-full h-auto rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSlider;
