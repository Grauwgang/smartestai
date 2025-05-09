import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq: React.FC = () => {
  const faqs = [
    {
      question: "Can I earn just by writing?",
      answer: "Yes. If your prompts slap, the AI tips you in $SMARTEST."
    },
    {
      question: "How is it judged?",
      answer: "GPT-based scoring on novelty, coherence, humor, and virality. Plus community votes."
    },
    {
      question: "Is $SMARTEST a joke or real?",
      answer: "It's both. That's why it works."
    },
    {
      question: "Do I need to be a crypto expert?",
      answer: "Not at all. You just need to be creative and willing to experiment with prompts."
    },
    {
      question: "How often can I submit prompts?",
      answer: "You can submit up to 5 prompts per day. Choose wisely!"
    },
    {
      question: "Can I sell my $SMARTEST tokens?",
      answer: "Yes, once earned, tokens are yours to hold, trade, or use for prompt boosting."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-dark-gray">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-neon-green">FAQ</span>
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-8"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-light-gray rounded-xl overflow-hidden"
            >
              <button
                className="w-full py-5 px-6 flex justify-between items-center bg-medium-gray hover:bg-dark-gray transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-left text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-neon-green" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neon-green" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-dark-gray">
                  <p className="leading-relaxed text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;