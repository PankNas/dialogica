import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  { id: 1, title: 'Задача 1', text: 'Описание задачи 1' },
  { id: 2, title: 'Задача 2', text: 'Описание задачи 2' },
  { id: 3, title: 'Задача 3', text: 'Описание задачи 3' },
  { id: 4, title: 'Задача 4', text: 'Описание задачи 4' },
  { id: 5, title: 'Задача 5', text: 'Описание задачи 5' },
];

export default function PopularTasksSlider() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  // Touch swipe
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;
    let endX = 0;

    const touchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const touchMove = (e) => {
      endX = e.touches[0].clientX;
    };

    const touchEnd = () => {
      if (startX - endX > 50) next(); // swipe left
      if (endX - startX > 50) prev(); // swipe right
    };

    slider.addEventListener('touchstart', touchStart);
    slider.addEventListener('touchmove', touchMove);
    slider.addEventListener('touchend', touchEnd);

    return () => {
      slider.removeEventListener('touchstart', touchStart);
      slider.removeEventListener('touchmove', touchMove);
      slider.removeEventListener('touchend', touchEnd);
    };
  }, []);

  return (
    <div className="w-full mx-auto py-10">
      <div className="relative">
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow"
        >
          <ChevronRight />
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ width: `${SLIDES.length * 100}%` }}
          >
            {SLIDES.map((item) => (
              <div
                key={item.id}
                className="min-w-full sm:min-w-1/2 lg:min-w-1/3 bg-gray-100 p-6 rounded-2xl shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? 'bg-blue-600 scale-110' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
