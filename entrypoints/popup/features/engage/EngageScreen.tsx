import { Tweet, TweetCard } from "./components/TweetCard";
import { Zap } from "lucide-react";
import { useState } from "react";
import { Modal } from "../../components/ui/Modal";
import { SummaryView } from "./components/SummaryModal";

const MOCK_TWEETS: Tweet[] = [
  {
    id: '1',
    author: { name: 'Guillermo Rauch', handle: 'rauchg', avatar: '' },
    content: 'The future of frontend is not just about speed, it’s about intelligence. Adapting to user intent in real-time is the next frontier for Vercel.',
    timestamp: '12m ago',
    velocity: '+140/hr',
    signal: 'High',
    contextBadge: 'Fast growth · Founder audience',
    isSaved: false
  },
  {
    id: '2',
    author: { name: 'Dan Abramov', handle: 'dan_abramov', avatar: '' },
    content: 'Just shipped a new React feature that simplifies server components even further. It’s fascinating how much boilerplate we can remove.',
    timestamp: '45m ago',
    velocity: '+85/hr',
    signal: 'High',
    contextBadge: 'High engineering signal',
    isSaved: true
  },
  {
    id: '3',
    author: { name: 'Pieter Levels', handle: 'levelsio', avatar: '' },
    content: 'Ship fast. Don’t overthink the stack. If it works for the user, it is the right stack. People obsess too much over tools.',
    timestamp: '1h ago',
    velocity: '+200/hr',
    signal: 'Medium',
    contextBadge: 'Indie Hacker trends',
    isSaved: false
  }
];

export function EngageScreen() {
  const [summaryTweetId, setSummaryTweetId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-2">
            <div>
                <h2 className="text-lg font-semibold text-[#EDEDED] flex items-center gap-2">
                    Engage Now
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                </h2>
                <p className="text-xs text-[#A1A1A1]">High-signal posts rising in your communities</p>
            </div>
            
        </div>

        {/* Feed */}
        <div className="flex flex-col gap-3">
            {MOCK_TWEETS.map(tweet => (
                <TweetCard 
                    key={tweet.id} 
                    tweet={tweet} 
                    onOpen={() => console.log('Open', tweet.id)}
                    onSave={() => console.log('Save', tweet.id)}
                    onSummarize={() => setSummaryTweetId(tweet.id)}
                />
            ))}
        </div>
        
        {/* Empty State / Bottom Message */}
        <div className="text-center pt-6 pb-2">
            <p className="text-xs text-[#666666]">You're all caught up on high-signal posts.</p>
        </div>

        {/* Summary Modal */}
        <Modal 
            isOpen={!!summaryTweetId} 
            onClose={() => setSummaryTweetId(null)}
            title="Conversation Summary"
        >
            {summaryTweetId && <SummaryView tweetId={summaryTweetId} />}
        </Modal>
    </div>
  );
}
