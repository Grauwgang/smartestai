import React, { useState } from 'react';
import { Trophy, ArrowUp } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('daily');
  
  // Mock data for the leaderboard
  const leaderboardData = {
    daily: [
      { rank: 1, wallet: '0x7a...3b2c', prompt: 'When ETH breaks 10k, PEPE will...', score: 9.8, earned: 1240 },
      { rank: 2, wallet: '0x2b...9f1d', prompt: 'Wojak buys the dip on Mars', score: 9.6, earned: 980 },
      { rank: 3, wallet: '0xc4...6e7a', prompt: 'GMI if you can explain...', score: 9.4, earned: 870 },
      { rank: 4, wallet: '0x1d...7b3c', prompt: 'WAGMI but only if...', score: 9.1, earned: 750 },
      { rank: 5, wallet: '0x8e...2a4f', prompt: 'Vitalik walks into a bar and...', score: 8.9, earned: 620 },
    ],
    weekly: [
      { rank: 1, wallet: '0xc4...6e7a', prompt: 'GMI if you can explain...', score: 9.4, earned: 4320 },
      { rank: 2, wallet: '0x7a...3b2c', prompt: 'When ETH breaks 10k, PEPE will...', score: 9.8, earned: 3980 },
      { rank: 3, wallet: '0x8e...2a4f', prompt: 'Vitalik walks into a bar and...', score: 8.9, earned: 3750 },
      { rank: 4, wallet: '0x2b...9f1d', prompt: 'Wojak buys the dip on Mars', score: 9.6, earned: 3420 },
      { rank: 5, wallet: '0x1d...7b3c', prompt: 'WAGMI but only if...', score: 9.1, earned: 3210 },
    ],
    allTime: [
      { rank: 1, wallet: '0x8e...2a4f', prompt: 'Vitalik walks into a bar and...', score: 8.9, earned: 12460 },
      { rank: 2, wallet: '0xc4...6e7a', prompt: 'GMI if you can explain...', score: 9.4, earned: 11320 },
      { rank: 3, wallet: '0x1d...7b3c', prompt: 'WAGMI but only if...', score: 9.1, earned: 10870 },
      { rank: 4, wallet: '0x7a...3b2c', prompt: 'When ETH breaks 10k, PEPE will...', score: 9.8, earned: 9980 },
      { rank: 5, wallet: '0x2b...9f1d', prompt: 'Wojak buys the dip on Mars', score: 9.6, earned: 9650 },
    ]
  };

  return (
    <section id="leaderboard" className="py-20 px-4 bg-dark-gray">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-neon-green">Leaderboard</span>
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-8"></div>
        </div>

        <div className="bg-medium-gray rounded-xl overflow-hidden border border-light-gray">
          {/* Tabs */}
          <div className="flex border-b border-light-gray">
            {['daily', 'weekly', 'allTime'].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-4 text-center font-semibold transition-colors ${
                  activeTab === tab
                    ? 'bg-dark-gray text-neon-green border-b-2 border-neon-green'
                    : 'text-gray-300 hover:bg-dark-gray hover:bg-opacity-50'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'allTime' ? 'All Time' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Leaderboard table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-dark-gray">
                  <th className="py-4 px-6 text-left">Rank</th>
                  <th className="py-4 px-6 text-left">Wallet</th>
                  <th className="py-4 px-6 text-left">Prompt</th>
                  <th className="py-4 px-6 text-right">Score</th>
                  <th className="py-4 px-6 text-right">$SMARTEST Earned</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData[activeTab as keyof typeof leaderboardData].map((entry, index) => (
                  <tr key={index} className="border-b border-light-gray hover:bg-dark-gray transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {entry.rank <= 3 ? (
                          <Trophy className={`w-5 h-5 mr-2 ${
                            entry.rank === 1 ? 'text-yellow-400' : 
                            entry.rank === 2 ? 'text-gray-400' : 'text-amber-700'
                          }`} />
                        ) : (
                          <span className="w-5 h-5 inline-block mr-2"></span>
                        )}
                        {entry.rank}
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono">{entry.wallet}</td>
                    <td className="py-4 px-6 max-w-[200px] truncate">{entry.prompt}</td>
                    <td className="py-4 px-6 text-right">
                      <span className={`${
                        entry.score >= 9.5 ? 'text-neon-green' : 
                        entry.score >= 9.0 ? 'text-green-400' : 'text-gray-300'
                      }`}>
                        {entry.score.toFixed(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end">
                        <span className="text-electric-purple font-bold mr-2">{entry.earned.toLocaleString()}</span>
                        <ArrowUp className="w-4 h-4 text-neon-green" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;