'use client';

import React, { useState, useEffect } from 'react';
import { TitleSlideContent, CornellSlideContent, SlideshowProps } from "@/app/components/interfaces";
import SlideCounter from "@/app/components/SlideCounter";
import TitleSlide from "@/app/components/TitleSlide";
import Navigation from "@/app/components/Navigation";
import CornellSlide from "@/app/components/CornellSlide";

export default function Slideshow({ slides }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const changeSlide = (direction: number) => {
    const newSlide = currentSlide + direction;
    if (newSlide >= 0 && newSlide < totalSlides) {
      setCurrentSlide(newSlide);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') changeSlide(-1);
      if (e.key === 'ArrowRight') changeSlide(1);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="slideshow-container">
      <SlideCounter current={currentSlide + 1} total={totalSlides} />
      
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          {slide.type === 'title' ? (
            <TitleSlide
              title={slide.title}
              content={slide.content as TitleSlideContent}
            />
          ) : (
            <CornellSlide
              title={slide.title}
              content={slide.content as CornellSlideContent}
            />
          )}
        </div>
      ))}
      
      <Navigation
        onPrevious={() => changeSlide(-1)}
        onNext={() => changeSlide(1)}
        canGoPrevious={currentSlide > 0}
        canGoNext={currentSlide < totalSlides - 1}
      />
    </div>
  );
}