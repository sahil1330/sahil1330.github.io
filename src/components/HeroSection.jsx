import Typed from 'typed.js';
import { useRef, useEffect } from 'react';

const HeroSection = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "<i>Full Stack</i> Developer.",
                "React Developer.",
                "Backend Developer.", 
                "UI/UX Enthusiast.",
                "Problem Solver."
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id='HeroSection' className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 pt-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>

            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 lg:gap-20">
                {/* Left Section - Text Content */}
                <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in-up">
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                            Hi, I&apos;m{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-primary">
                                Sahil
                            </span>
                        </h1>
                        <div className="text-2xl lg:text-4xl text-gray-300">
                            <span ref={el} className='text-transparent bg-clip-text bg-gradient-secondary' />
                        </div>
                    </div>
                    
                    <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                        Passionate developer crafting digital experiences with modern technologies. 
                        I love building scalable applications and bringing creative ideas to life through code.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a 
                            href="#ProjectsSection" 
                            className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-glow transform hover:scale-105 transition-all duration-300"
                        >
                            View My Work
                        </a>
                        <a 
                            href="#ContactMeSection" 
                            className="glass backdrop-blur-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>

                {/* Right Section - Profile Image */}
                <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
                    <div className="relative">
                        <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                            {/* Glowing Border Effect */}
                            <div className="absolute inset-0 bg-gradient-primary rounded-full animate-pulse opacity-75"></div>
                            <div className="absolute inset-2 bg-gradient-dark rounded-full"></div>
                            
                            {/* Profile Image */}
                            <img 
                                src="imgs/me.jpg" 
                                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-full object-cover shadow-card" 
                                alt="Sahil's Profile"
                            />
                            
                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center shadow-glow animate-float">
                                <span className="text-white font-bold text-xl">⚡</span>
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-float" style={{animationDelay: '1s'}}>
                                <span className="text-white font-bold text-xl">💻</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
