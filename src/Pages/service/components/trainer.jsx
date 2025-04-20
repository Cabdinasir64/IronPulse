import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram, FaLinkedin, FaTrophy } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Trainer = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const trainer1Ref = useRef(null);
  const trainer2Ref = useRef(null);
  const trainer3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      });

      // Trainers animation
      const trainers = [trainer1Ref.current, trainer2Ref.current, trainer3Ref.current];
      
      trainers.forEach((trainer, index) => {
        gsap.from(trainer, {
          scrollTrigger: {
            trigger: trainer,
            start: "top 75%",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          onComplete: () => {
            // Badge animation
            gsap.from(trainer.querySelector('.trainer-badge'), {
              scale: 0,
              duration: 0.5,
              ease: "elastic.out(1, 0.5)"
            });
          }
        });

        // Hover effect
        trainer.addEventListener('mouseenter', () => {
          gsap.to(trainer.querySelector('.trainer-image'), {
            scale: 1.05,
            duration: 0.3,
            ease: "power1.out"
          });
          gsap.to(trainer.querySelector('.trainer-content'), {
            y: -10,
            duration: 0.3,
            ease: "power1.out"
          });
        });

        trainer.addEventListener('mouseleave', () => {
          gsap.to(trainer.querySelector('.trainer-image'), {
            scale: 1,
            duration: 0.3,
            ease: "power1.out"
          });
          gsap.to(trainer.querySelector('.trainer-content'), {
            y: 0,
            duration: 0.3,
            ease: "power1.out"
          });
        });
      });

      // Continuous floating effect for badges
      gsap.to(".trainer-badge", {
        y: -5,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.2
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-6 bg-iron text-white"
      id="trainers"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-20 font-title"
        >
          <span className="text-iron-pulse">MEET</span> YOUR COACHES
        </h2>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Trainer 1 */}
          <div 
            ref={trainer1Ref}
            className="trainer-card group"
          >
            <div className="relative overflow-hidden rounded-2xl mb-6 h-80">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                alt="Trainer"
                className="trainer-image w-full h-full object-cover transition-transform duration-300"
              />
              <div className="trainer-badge absolute -top-5 -right-5 bg-iron-pulse text-white p-3 rounded-full z-10">
                <FaTrophy className="text-2xl" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold">Marcus Johnson</h3>
                <p className="text-iron-energy">Strength Specialist</p>
              </div>
            </div>
            <div className="trainer-content px-4 transition-transform duration-300">
              <p className="text-gray-300 mb-4">
                10+ years coaching professional athletes. NASM certified with a focus on power development.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-iron-pulse transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-iron-pulse transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Trainer 2 */}
          <div 
            ref={trainer2Ref}
            className="trainer-card group"
          >
            <div className="relative overflow-hidden rounded-2xl mb-6 h-80">
              <img 
                src="https://images.unsplash.com/photo-1540206276207-3af25c08abc4?q=80&w=1974&auto=format&fit=crop" 
                alt="Trainer"
                className="trainer-image w-full h-full object-cover transition-transform duration-300"
              />
              <div className="trainer-badge absolute -top-5 -right-5 bg-iron-pulse text-white p-3 rounded-full z-10">
                <FaTrophy className="text-2xl" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold">Lusa Williams</h3>
                <p className="text-iron-energy">Performance Coach</p>
              </div>
            </div>
            <div className="trainer-content px-4 transition-transform duration-300">
              <p className="text-gray-300 mb-4">
                Former Olympic athlete specializing in functional movement and mobility training.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-iron-pulse transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-iron-pulse transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Trainer 3 */}
          <div 
            ref={trainer3Ref}
            className="trainer-card group"
          >
            <div className="relative overflow-hidden rounded-2xl mb-6 h-80">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                alt="Trainer"
                className="trainer-image w-full h-full object-cover transition-transform duration-300"
              />
              <div className="trainer-badge absolute -top-5 -right-5 bg-iron-pulse text-white p-3 rounded-full z-10">
                <FaTrophy className="text-2xl" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold">David Chen</h3>
                <p className="text-iron-energy">Nutrition Expert</p>
              </div>
            </div>
            <div className="trainer-content px-4 transition-transform duration-300">
              <p className="text-gray-300 mb-4">
                Registered dietitian with a sports nutrition specialization. Helps clients optimize body composition.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-iron-pulse transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-iron-pulse transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainer;