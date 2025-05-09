import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 20 },
  });

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-slate-900 via-black to-black opacity-90"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <animated.div style={fadeIn} className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
              The Smartest Coin in{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Crypto
              </span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Outprompt. Outmeme. Outearn. Join the revolution of AI-powered crypto earnings through creative prompting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center text-sm font-medium">
                Start Prompt Battle
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-200 text-sm font-medium border border-white/10">
                Learn More
              </button>
            </div>
          </animated.div>
          
          <div className="flex justify-center">
            <img 
              src="https://raw.githubusercontent.com/yourusername/smartest-assets/main/logo-3d.png"
              alt="3D Logo"
              className="w-64 h-64 md:w-80 md:h-80 object-contain animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;