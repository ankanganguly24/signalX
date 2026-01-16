import { Tweet, TweetCard } from "../engage/components/TweetCard";
import { Bookmark } from "lucide-react";

// Mock reuse (in real app this comes from store)
const MOCK_SAVED: Tweet[] = [
    {
        id: '2',
        author: { name: 'Dan Abramov', handle: 'dan_abramov', avatar: '' },
        content: 'Just shipped a new React feature that simplifies server components even further. It’s fascinating how much boilerplate we can remove.',
        timestamp: '45m ago',
        velocity: '+85/hr',
        signal: 'High',
        contextBadge: 'High engineering signal',
        isSaved: true
    }
];

export function SavedScreen() {
    const hasItems = MOCK_SAVED.length > 0;

    return (
        <div className="h-full flex flex-col">
            <h2 className="text-lg font-semibold text-[#EDEDED] mb-4">Saved for Later</h2>
            
            {hasItems ? (
                <div className="flex flex-col gap-3">
                    {MOCK_SAVED.map(tweet => (
                        <TweetCard key={tweet.id} tweet={tweet} />
                    ))}
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50 mt-10">
                    <div className="h-12 w-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-3">
                        <Bookmark className="h-6 w-6 text-[#666666]" />
                    </div>
                    <p className="text-sm text-[#EDEDED]">Nothing saved yet.</p>
                    <p className="text-xs text-[#666666] mt-1">Save tweets you want to engage with later.</p>
                </div>
            )}
        </div>
    );
}
