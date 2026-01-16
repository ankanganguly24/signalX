import { useState } from "react";
import { Search as SearchIcon, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { TweetCard, Tweet } from "../engage/components/TweetCard";
import { cn } from "../../utils/cn";

const MOCK_SEARCH_RESULTS: Tweet[] = [
  {
    id: '101',
    author: { name: 'Suhail', handle: 'Suhail', avatar: '' },
    content: 'Building in public is the ultimate cheat code. You get feedback, accountability, and marketing all in one loop.',
    timestamp: '2h ago',
    velocity: '+95/hr',
    signal: 'High',
    contextBadge: 'Trending topic',
    isSaved: false
  },
  {
    id: '102',
    author: { name: 'Tibo', handle: 'tibo_maker', avatar: '' },
    content: 'Sold two small SaaS projects today. Micro-exits are underrated. You don’t need to be a unicorn to be successful.',
    timestamp: '3h ago',
    velocity: '+60/hr',
    signal: 'Medium',
    contextBadge: 'Success story',
    isSaved: false
  }
];

const TOPICS = [
    "Build in Public",
    "Indie Hackers",
    "Dev Twitter",
    "AI / SaaS",
    "Growth"
];

const FILTERS = [
    "Hide memes",
    "Hide engagement bait",
    "Prefer threads",
    "Prefer text-heavy"
];

export function SearchScreen() {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [showFilters, setShowFilters] = useState(false);
    const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

    const toggleFilter = (filter: string) => {
        const next = new Set(activeFilters);
        if (next.has(filter)) next.delete(filter);
        else next.add(filter);
        setActiveFilters(next);
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Search Input */}
            <div className="flex gap-2">
                <Input placeholder="Search topics, problems..." icon={SearchIcon} />
                <div className="flex gap-1">
                    <Button 
                        variant="secondary" 
                        size="icon" 
                        onClick={() => setShowFilters(!showFilters)}
                        className={cn(showFilters ? "bg-[#333333] text-[#EDEDED]" : "text-[#666666]")}
                    >
                        <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" size="icon" className="text-[#666666]" title="Sort by">
                        <ArrowUpDown className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Filter Chips (Topics) */}
            <div className="flex flex-wrap gap-2">
                {TOPICS.map(topic => (
                    <button
                        key={topic}
                        onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                        className={cn(
                            "px-3 py-1 text-xs rounded-full border transition-colors",
                            selectedTopic === topic
                                ? "bg-[#5E81AC]/20 border-[#5E81AC] text-[#5E81AC]"
                                : "bg-[#1A1A1A] border-[#333333] text-[#A1A1A1] hover:border-[#666666]"
                        )}
                    >
                        {topic}
                    </button>
                ))}
            </div>

            {/* Advanced Filters Toggle Section */}
            {showFilters && (
                <div className="p-3 rounded-lg bg-[#1A1A1A] border border-[#333333] space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="text-[10px] text-[#666666] uppercase tracking-wider font-semibold">Refine Feed</p>
                    <div className="flex flex-wrap gap-2">
                        {FILTERS.map(filter => (
                            <button
                                key={filter}
                                onClick={() => toggleFilter(filter)}
                                className={cn(
                                    "px-2 py-1 text-[11px] rounded transition-colors flex items-center gap-1",
                                    activeFilters.has(filter)
                                        ? "bg-[#333333] text-[#EDEDED]"
                                        : "text-[#666666] hover:bg-[#333333]/50"
                                )}
                            >
                                <div className={cn("w-2 h-2 rounded-full", activeFilters.has(filter) ? "bg-[#5E81AC]" : "bg-[#444444]")} />
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Results List */}
            <div className="space-y-3 pt-2">
                {MOCK_SEARCH_RESULTS.map(tweet => (
                    <TweetCard key={tweet.id} tweet={tweet} />
                ))}
            </div>
        </div>
    );
}
