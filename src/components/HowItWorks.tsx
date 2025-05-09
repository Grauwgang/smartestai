import React from 'react';
import { PenLine, Bot, Vote, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <PenLine className="w-8 h-8" />,
      emoji: '🧠',
      title: 'Write a Prompt',
      description: 'Enter the arena with a prompt — weird, brilliant, or degen.'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      emoji: '🤖',
      title: 'AI Judges It',
      description: 'GPT-4 scores creativity, logic, humor, and viral potential.'
    },
    {
      icon: <Vote className="w-8 h-8" />,
      emoji: '🗳️',
      title: 'Community Votes',
      description: 'Bonus points if the people love it. Boost it with $SMARTEST.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      emoji: '🪙',
      title: 'Earn & Climb',
      description: 'Win tokens, level up, and flex on the leaderboard.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It <span className="text-neon-green">Works</span>
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-dark-gray border border-light-gray rounded-xl p-6 hover:border-neon-green transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="w-14 h-14 bg-medium-gray rounded-full flex items-center justify-center text-neon-green">
                  {step.icon}
                </div>
                <span className="text-3xl">{step.emoji}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
              <div className="mt-4 flex justify-end">
                <div className="w-8 h-8 bg-medium-gray rounded-full flex items-center justify-center text-neon-green">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;