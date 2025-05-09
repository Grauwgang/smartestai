import React from 'react';
import { Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-dark-gray">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What is <span className="text-neon-green">$SMARTEST</span>?
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-8"></div>
        </div>

        <div className="space-y-10">
          <div className="bg-medium-gray p-8 rounded-xl border border-light-gray">
            <p className="text-lg leading-relaxed mb-6">
              <span className="text-neon-green font-bold">$SMARTEST</span> is the first memecoin where your intelligence (or at least your meme-enhanced version of it) is rewarded on-chain. Each day, users submit prompts in a battle royale of wit, chaos, and AI absurdity. The best prompts — judged by GPT models and community votes — earn $SMARTEST tokens. You're not just farming IQ points, you're minting the future of meme-powered intelligence.
            </p>
          </div>

          <div className="bg-medium-gray p-8 rounded-xl border border-light-gray">
            <div className="flex items-start">
              <div className="mr-6 mt-1">
                <div className="w-12 h-12 bg-electric-purple bg-opacity-20 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-electric-purple" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Unique Selling Point</h3>
                <p className="text-lg leading-relaxed text-gray-300">
                  Unlike other meme coins, $SMARTEST isn't based on hype or vibes alone — it's earned through brainpower, humor, and creative prompting. A true "Proof of Prompt."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;