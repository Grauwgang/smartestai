import React from 'react';

const Roadmap: React.FC = () => {
  const roadmapData = [
    {
      quarter: 'Q2 2025',
      items: [
        'Launch Prompt Bot v1',
        'Token claim & leaderboard site',
        'First IQ Cup Tournament'
      ]
    },
    {
      quarter: 'Q3 2025',
      items: [
        'GPT model upgrades',
        'Meme-to-NFT minting integration',
        'Community DAO proposal system'
      ]
    },
    {
      quarter: 'Q4 2025',
      items: [
        'Partnered prompt battles w/ meme DAOs',
        'Live event: "PromptCon" (online)',
        'Brainfarm Mode: Long-form prompt competitions'
      ]
    },
    {
      quarter: 'Q1 2026',
      items: [
        'Open-source scoring protocol',
        'AI vs. Human weekly tournaments',
        'BrainDAO treasury deployment'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-neon-green">Roadmap</span>
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-light-gray transform md:translate-x-[-50%] hidden md:block"></div>

          <div className="space-y-16 md:space-y-0 relative">
            {roadmapData.map((period, index) => (
              <div key={index} className="relative">
                <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-neon-green transform md:translate-x-[-50%] mt-6 hidden md:block"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-10 md:pl-0 relative`}>
                    {/* Mobile timeline */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-light-gray md:hidden"></div>
                    <div className="absolute top-6 left-0 w-4 h-4 rounded-full bg-neon-green transform translate-x-[-50%] md:hidden"></div>
                    
                    <div className="bg-dark-gray border border-light-gray rounded-xl p-6 hover:border-neon-green transition-all duration-300">
                      <h3 className="text-xl font-bold mb-4 text-electric-purple">{period.quarter}</h3>
                      <ul className="space-y-3">
                        {period.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;