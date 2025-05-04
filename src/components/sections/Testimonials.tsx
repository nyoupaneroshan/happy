import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "White Happydent has completely transformed my morning routine! My teeth feel cleaner than ever, and the fresh mint flavor lasts throughout the day. I've noticed less sensitivity since switching, too.",
    author: "Emily Johnson",
    position: "Marketing Director",
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    content: "As someone with sensitive teeth, I've tried countless toothpastes with disappointing results. White Happydent's Sensitive Care Formula is the first one that actually works for me. I can finally enjoy ice cream again!",
    author: "Michael Zhang",
    position: "Software Engineer",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    content: "I've been using the Natural Fresh Mint toothpaste for my entire family, and we love it! It's gentle enough for my kids but effective enough for adults. Plus, I feel good about the natural ingredients.",
    author: "Sophia Williams",
    position: "Elementary School Teacher",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Don't just take our word for it. Hear from the people who use White Happydent every day."
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full opacity-70" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-100 rounded-tr-full opacity-70" />
            
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary-200" />
            
            <div className="relative z-10 pt-8">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-center"
                >
                  <p className="text-lg text-gray-600 mb-6 italic">
                    "{currentTestimonial.content}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-primary-500">
                      <img
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-lg">{currentTestimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{currentTestimonial.position}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center mt-8">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-500 transition mr-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentIndex ? 'bg-primary-500 w-4' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-500 transition ml-2"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;