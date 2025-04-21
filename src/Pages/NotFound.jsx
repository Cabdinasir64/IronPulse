import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaRocket, FaSatellite, FaSpaceShuttle, FaSearch } from 'react-icons/fa';
import { GiAlienSkull, GiAstronautHelmet } from 'react-icons/gi';
import '../custom.css'

const NotFoundPage = () => {
  const astronautRef = useRef(null);
  const starsRef = useRef([]);
  const planetsRef = useRef([]);
  const containerRef = useRef(null);

  // Initialize animations
  useEffect(() => {
    // Astronaut floating animation
    gsap.to(astronautRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Stars twinkling
    starsRef.current.forEach((star, index) => {
      gsap.to(star, {
        opacity: 0.3 + Math.random() * 0.7,
        duration: 1 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2
      });
    });

    // Planets rotating
    planetsRef.current.forEach((planet, index) => {
      gsap.to(planet, {
        rotation: 360,
        duration: 20 + Math.random() * 30,
        repeat: -1,
        ease: "none"
      });
    });

    // Background parallax effect
    gsap.to(containerRef.current, {
      backgroundPosition: "50% 30%",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  // Generate random stars
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 500; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${1 + Math.random() * 3}px`,
        height: `${1 + Math.random() * 3}px`,
        opacity: 0.5 + Math.random() * 0.5
      };
      stars.push(
        <div 
          key={i} 
          ref={el => starsRef.current[i] = el}
          className="absolute bg-white rounded-full"
          style={style}
        />
      );
    }
    return stars;
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 overflow-hidden flex flex-col items-center justify-center text-white p-4"
      style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
    >
      {/* Stars */}
      {generateStars()}
      
      {/* Planets */}
      <div 
        ref={el => planetsRef.current[0] = el}
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 shadow-lg"
      >
        <div className="absolute top-2 left-4 w-4 h-4 rounded-full bg-white opacity-30"></div>
        <div className="absolute bottom-4 right-2 w-6 h-2 rounded-full bg-white opacity-20"></div>
      </div>
      
      <div 
        ref={el => planetsRef.current[1] = el}
        className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 shadow-lg"
      >
        <div className="absolute top-3 left-2 w-3 h-1 rounded-full bg-white opacity-30"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-8">
          <div 
            ref={astronautRef}
            className="relative text-6xl"
          >
            <GiAstronautHelmet className="text-7xl" />
            <div className="absolute -right-6 -bottom-2 text-3xl animate-pulse">
              <GiAlienSkull />
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Houston, we have a problem!
        </h2>
        
        <p className="text-lg mb-8 text-gray-300 max-w-lg mx-auto">
          The page you're looking for seems to have drifted off into the cosmic void.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 animate-float">
            <FaRocket className="text-blue-400" />
            <span>Lost in space</span>
          </div>
          <div className="flex items-center gap-2 animate-float" style={{ animationDelay: '0.5s' }}>
            <FaSatellite className="text-purple-400" />
            <span>Signal lost</span>
          </div>
          <div className="flex items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
            <FaSpaceShuttle className="text-cyan-400" />
            <span>Mission failed</span>
          </div>
        </div>
        
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search our galaxy..." 
            className="w-full md:w-96 px-6 py-3 rounded-full bg-gray-800 bg-opacity-70 backdrop-blur-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 transition-all duration-300 group-hover:bg-opacity-90"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition-colors duration-300">
            <FaSearch />
          </button>
        </div>
        
        <div className="mt-8">
          <a onClick={() => window.history.back()}
            href="#" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Return to Earth
          </a>
        </div>
      </div>
      
      {/* Floating debris */}
      <div className="absolute top-1/3 left-1/5 w-4 h-4 rounded-full bg-gray-400 opacity-70 animate-float" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute top-2/5 right-1/6 w-3 h-3 rounded-full bg-gray-300 opacity-60 animate-float" style={{ animationDelay: '0.7s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-gray-200 opacity-50 animate-float" style={{ animationDelay: '1.2s' }}></div>
    </div>
  );
};

export default NotFoundPage;