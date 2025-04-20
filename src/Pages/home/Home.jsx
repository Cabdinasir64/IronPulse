import { gsap } from 'gsap'
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Features from './components/feature'
import Testimonials from './components/testimonial'
import About from './components/about'
import Promo from './components/promo'

const Home = () => {
    useEffect(() => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline({ ease: 'power2.out' })
            tl.fromTo(".image", {
                opacity: 0,
                scale: 1.4,
            }, {
                opacity: 1,
                scale: 1,
                duration: 1.3,
            }, "+=0.5")
                .from(".title", {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                }, "-=0.4")
                .from(".substitle", {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                }, "-=0.3")
                .from(".btn", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                }, "-=0.3")

        })

        return () => ctx.revert()
    }, [])
    return (
        <>
            <Navbar ref={Navbar} />
            <section
                className="relative h-screen w-full overflow-hidden bg-iron"
            >

                {/* Background with gradient overlay */}
                <div
                    className="image absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-iron/90 via-iron/70 to-iron/40" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center">
                    {/* Main title with pulse element */}
                    <div className="overflow-hidden">
                        <h1
                            className="text-5xl md:text-7xl lg:text-8xl font-title text-white mb-4 title"
                        >
                            <span className="relative inline-block">
                                IGNITE YOUR{' '}
                                <span
                                    className="text-iron-pulse relative inline-block"
                                >
                                    POWER
                                    <span className="absolute inset-0 bg-iron-pulse rounded-full mix-blend-overlay opacity-20 animate-ping"></span>
                                </span>
                            </span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <div className="overflow-hidden">
                        <p
                            className="text-xl md:text-2xl text-iron-energy font-sans max-w-2xl mb-8 tracking-wide substitle"
                        >
                            Where strength meets endurance
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="overflow-hidden">
                        <div className='btn'>
                            <button
                                className="px-10 py-4 bg-iron-pulse hover:bg-iron-energy text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
                            >
                                <span className="relative z-10">START YOUR JOURNEY</span>
                                <span className="absolute inset-0 bg-iron-energy rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></span>
                            </button>
                        </div>
                    </div>
                </div>

            </section>
            <About />
            <Features />
            <Promo />
            <Testimonials />
            <Footer />
        </>


    );
};

export default Home;
