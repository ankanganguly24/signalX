import { ExternalLink, Bookmark, Sparkles, Clock, TrendingUp, Zap } from "lucide-react";
import { Card } from "../../../components/ui/Card";
import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import { ProgressBar } from "../../../components/ui/ProgressBar";
import { cn } from "../../../utils/cn";

export interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  timestamp: string; // e.g., "2m ago"
  velocity: string; // e.g., "+40/hr"
  signal: 'High' | 'Medium' | 'Low';
  contextBadge?: string; // e.g., "Fast growth · Founder audience"
  isSaved?: boolean;
}

interface TweetCardProps {
  tweet: Tweet;
  onOpen?: () => void;
  onSave?: () => void;
  onSummarize?: () => void;
}

export function TweetCard({ tweet, onOpen, onSave, onSummarize }: TweetCardProps) {
  return (
    <Card className="flex flex-col gap-3 transition-colors hover:border-[#5E81AC]/30 group">
      {/* Header: Author + Meta */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex-shrink-0" /> {/* Placeholder for Avatar */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#EDEDED]">{tweet.author.name}</span>
            <span className="text-xs text-[#666666]">@{tweet.author.handle}</span>
          </div>
        </div>
        <div className="flex gap-2">
            
        </div>
      </div>

      {/* Content */}
      <p className="text-sm text-[#CCCCCC] leading-relaxed line-clamp-3">
        {tweet.content}
      </p>

      {/* Metadata Row */}
      <div className="flex items-center gap-3 text-xs text-[#666666] mt-1">
        <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{tweet.timestamp}</span>
        </div>
        <div className="flex items-center gap-2 text-[#5E81AC] flex-1 max-w-[120px]">
            <TrendingUp className="h-3 w-3" />
            <div className="flex flex-col w-full">
                <span className="text-[10px] leading-none mb-0.5">{tweet.velocity}</span>
                <ProgressBar value={parseInt(tweet.velocity.replace(/\+/g, '')) || 50} max={200} className="h-1" colorClass="bg-[#5E81AC]" />
            </div>
        </div>
        <Badge variant={tweet.signal === 'High' ? 'success' : 'default'} className="ml-auto">
            {tweet.signal} Signal
        </Badge>
      </div>

      {/* Context Badge */}
      {tweet.contextBadge && (
        <div className="flex items-center gap-1.5 px-2 py-1 bg-[#1A1A1A] border border-[#333333] rounded-md w-fit mt-1">
            <Zap className="h-3 w-3 text-yellow-500 fill-yellow-500/20" />
            <span className="text-[10px] font-medium text-[#A1A1A1]">{tweet.contextBadge}</span>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-2 border-t border-[#333333] mt-1 group-hover:border-[#333333]/80 transition-colors">
        <Button variant="ghost" size="sm" onClick={onOpen} className="text-[#A1A1A1] hover:text-[#EDEDED] -ml-2">
            <ExternalLink className="h-4 w-4 mr-1.5" />
            Open
        </Button>
        
        <div className="flex gap-1">
            <Button variant="ghost" size="icon" onClick={onSave} className={cn("text-[#A1A1A1] hover:text-[#5E81AC]", tweet.isSaved && "text-[#5E81AC] fill-current")}>
                <Bookmark className={cn("h-4 w-4", tweet.isSaved && "fill-current")} />
            </Button>
            <Button variant="ghost" size="sm" onClick={onSummarize} className="text-[#A1A1A1] hover:text-[#88C0D0]">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                <span className="text-xs">Summarize</span>
            </Button>
        </div>
      </div>
    </Card>
  );
}
