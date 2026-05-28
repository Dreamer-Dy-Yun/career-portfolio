import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';

type CardCarouselProps = {
  ariaLabel: string;
  className?: string;
  items: ReactNode[];
  intervalMs?: number;
  itemsPerPage?: number;
};

const CardCarousel = ({ ariaLabel, className = '', items, intervalMs = 8400, itemsPerPage = 1 }: CardCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pageCount = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const pages = Array.from({ length: pageCount }, (_, pageIndex) =>
    items.slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage),
  );

  useEffect(() => {
    if (pageCount <= 1) {
      return;
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % pageCount);
    }, intervalMs);

    return () => {
      window.clearInterval(timerId);
    };
  }, [intervalMs, pageCount]);

  useEffect(() => {
    if (activeIndex >= pageCount) {
      setActiveIndex(0);
    }
  }, [activeIndex, pageCount]);

  if (items.length === 0) {
    return null;
  }

  const moveToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + pageCount) % pageCount);
  };

  const moveToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % pageCount);
  };

  return (
    <div className={`card-carousel ${className}`.trim()} aria-label={ariaLabel}>
      <div className="carousel-viewport" aria-live="polite">
        <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {pages.map((pageItems, index) => (
            <div className="carousel-slide" key={index} aria-hidden={activeIndex !== index}>
              <div className="carousel-page" style={{ '--items-per-page': itemsPerPage } as CSSProperties}>
                {pageItems}
              </div>
            </div>
          ))}
        </div>
      </div>
      {pageCount > 1 ? (
        <div className="carousel-controls">
          <button className="carousel-button" type="button" onClick={moveToPrevious}>
            Prev
          </button>
          <div className="carousel-dots" aria-label="Carousel pages">
            {pages.map((_, index) => (
              <button
                aria-label={`Show page ${index + 1}`}
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
      ) : null}
    </div>
  );
};

export default CardCarousel;
