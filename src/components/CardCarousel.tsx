import { useEffect, useState, type ReactNode } from 'react';

type CardCarouselProps = {
  ariaLabel: string;
  className?: string;
  items: ReactNode[];
  intervalMs?: number;
};

const CardCarousel = ({ ariaLabel, className = '', items, intervalMs = 4200 }: CardCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, intervalMs);

    return () => {
      window.clearInterval(timerId);
    };
  }, [intervalMs, items.length]);

  useEffect(() => {
    if (activeIndex >= items.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, items.length]);

  if (items.length === 0) {
    return null;
  }

  const moveToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + items.length) % items.length);
  };

  const moveToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
  };

  return (
    <div className={`card-carousel ${className}`.trim()} aria-label={ariaLabel}>
      <div className="carousel-viewport" aria-live="polite">
        <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div className="carousel-slide" key={index} aria-hidden={activeIndex !== index}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-button" type="button" onClick={moveToPrevious}>
          Prev
        </button>
        <div className="carousel-dots" aria-label="Carousel pages">
          {items.map((_, index) => (
            <button
              aria-label={`Show item ${index + 1}`}
              aria-pressed={activeIndex === index}
              className="carousel-dot"
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button className="carousel-button" type="button" onClick={moveToNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
