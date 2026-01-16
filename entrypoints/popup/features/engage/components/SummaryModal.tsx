import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import { Sparkles, MessageSquare, ThumbsUp, AlertCircle, Copy, Zap, BarChart3, BookOpen, User } from "lucide-react";
import { TweetCard } from "./TweetCard";
import { cn } from "../../../utils/cn";

interface SummaryViewProps {
  tweetId: string;
}

export function SummaryView({ tweetId }: SummaryViewProps) {
  // Mock Data mimicking the "James Clearway" context
  const mockContextTweet = {
      id: tweetId,
      author: { name: 'James Clearway', handle: 'jamesclear', avatar: '' },
      content: 'Scaling SaaS is less about adding features and more about unexpected operational drag. The unit economics change when you move from 10 to 100 people.',
      timestamp: '2h ago',
      velocity: '+204/hr',
      signal: 'High',
      contextBadge: 'SaaS Scaling',
      isSaved: false
  } as const;

  return (
    <div className="space-y-5 -m-4 sm:m-0">
        {/* Header Section */}
        <div className="flex items-center justify-between pb-4 border-b border-[#333333]">
            <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-[#5E81AC] to-[#88C0D0] flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Zap className="h-4 w-4 text-white fill-white" />
                </div>
                <span className="font-bold text-lg text-white tracking-tight">SignalX</span>
            </div>
            
            <div className="hidden sm:flex items-center gap-1 bg-[#1A1A1A] rounded-full p-1 border border-[#333333]">
                <NavPill active icon={Zap} label="Pulse" />
                <NavPill icon={BarChart3} label="Insights" />
                <NavPill icon={BookOpen} label="Library" />
            </div>

            <div className="flex items-center gap-3">
                <Button size="sm" className="hidden sm:flex h-7 text-xs bg-[#5E81AC] hover:bg-[#4C6B91]">Upgrade</Button>
                <div className="h-8 w-8 rounded-full bg-[#333333] border border-[#444444] flex items-center justify-center">
                    <User className="h-4 w-4 text-[#A1A1A1]" />
                </div>
            </div>
        </div>

        {/* Thread Context Card */}
        <div>
             <h4 className="text-[10px] uppercase text-[#666666] font-bold tracking-wider mb-2">Target Context</h4>
             <TweetCard tweet={mockContextTweet} />
        </div>

        {/* Conversation Summary (Side-by-Side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Sentiment & Themes */}
            <div className="p-3 rounded-xl bg-[#1A1A1A] border border-[#333333] space-y-3">
                <div className="flex items-center gap-2 text-[#5E81AC]">
                     <BarChart3 className="h-4 w-4" />
                     <h4 className="text-xs font-bold uppercase tracking-wider">Themes</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    <ThemeChip label="Operational Transition" />
                    <ThemeChip label="Unit Economics" />
                    <ThemeChip label="Hiring Friction" />
                </div>
            </div>

            {/* Gap Analysis */}
            <div className="p-3 rounded-xl bg-[#1A1A1A] border border-yellow-500/20 space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/5 rounded-full blur-xl -mr-4 -mt-4"></div>
                <div className="flex items-center gap-2 text-yellow-500">
                     <AlertCircle className="h-4 w-4" />
                     <h4 className="text-xs font-bold uppercase tracking-wider">Missing Perspectives</h4>
                </div>
                <ul className="space-y-2">
                    <GapItem text="Impact of AI Agents on headcount" />
                    <GapItem text="Global Compliance overhead" />
                </ul>
            </div>
        </div>

        {/* Reply Ideas */}
        <div className="space-y-3 pt-2">
            <h4 className="text-[10px] uppercase text-[#666666] font-bold tracking-wider">Strategic Reply Angles</h4>
            <div className="grid grid-cols-1 gap-2">
                <ReplyCard 
                    title="Add Experience" 
                    badge="High Probability"
                    badgeColor="text-green-400 bg-green-400/10 border-green-400/20"
                    description="Validate the '10 to 100' friction point with a specific anecdote about middleware bloat."
                />
                <ReplyCard 
                    title="Ask a Question" 
                    badge="Thought Leader"
                    badgeColor="text-blue-400 bg-blue-400/10 border-blue-400/20"
                    description=" pivoted to: 'Do you think AI reduces this drag, or just shifts it from HR to Ops?'"
                />
                <ReplyCard 
                    title="The Contrarian" 
                    badge="Viral Potential"
                    badgeColor="text-purple-400 bg-purple-400/10 border-purple-400/20"
                    description="Argue that operational drag is actually a sign of poor automation, not just scale."
                />
            </div>
        </div>
    </div>
  );
}

function NavPill({ icon: Icon, label, active }: { icon: any, label: string, active?: boolean }) {
    return (
        <button className={cn(
            "flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium transition-colors",
            active ? "bg-[#333333] text-white shadow-sm" : "text-[#A1A1A1] hover:text-[#EDEDED]"
        )}>
            <Icon className="h-3 w-3" />
            {label}
        </button>
    );
}

function ThemeChip({ label }: { label: string }) {
    return (
        <span className="px-2 py-1 rounded-md bg-[#5E81AC]/10 border border-[#5E81AC]/20 text-[#5E81AC] text-[10px] font-medium">
            {label}
        </span>
    );
}

function GapItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-2 text-xs text-[#EDEDED]/80">
            <div className="h-1 w-1 rounded-full bg-yellow-500 mt-1.5 shrink-0" />
            {text}
        </li>
    );
}

function ReplyCard({ title, badge, badgeColor, description }: { title: string, badge: string, badgeColor: string, description: string }) {
    return (
        <div className="group p-3 rounded-xl bg-[#1A1A1A] border border-[#333333] hover:border-[#5E81AC]/50 transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#EDEDED]">{title}</span>
                    <span className={cn("px-1.5 py-0.5 rounded text-[9px] border", badgeColor)}>{badge}</span>
                </div>
                <Button size="sm" variant="ghost" className="h-6 text-[10px] text-[#5E81AC] hover:text-[#88C0D0] hover:bg-[#5E81AC]/10 -mr-2">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Draft Response
                </Button>
            </div>
            <p className="text-xs text-[#A1A1A1] leading-relaxed group-hover:text-[#CCCCCC] transition-colors">
                {description}
            </p>
        </div>
    );
}
