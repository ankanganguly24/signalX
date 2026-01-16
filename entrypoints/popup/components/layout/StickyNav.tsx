import { Activity, Search, Bookmark, Settings, Zap } from "lucide-react";
import { cn } from "../../utils/cn";

export type TabId = 'engage' | 'search' | 'saved' | 'settings';

interface StickyNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function StickyNav({ activeTab, onTabChange }: StickyNavProps) {
  const tabs: { id: TabId; icon: typeof Activity; label: string }[] = [
    { id: 'engage', icon: Zap, label: 'Engage' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'saved', icon: Bookmark, label: 'Saved' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#111111]/80 backdrop-blur-md border-b border-[#333333]">
      <div className="flex flex-col">
        {/* Header Row */}
        <div className="flex items-center h-14 px-4">
            <div className="flex items-center gap-2 text-[#EDEDED]">
                <div className="h-6 w-6 rounded-full bg-[#5E81AC] flex items-center justify-center">
                    <Zap className="h-3.5 w-3.5 text-white fill-white" />
                </div>
                <span className="font-semibold text-[15px] tracking-tight">SignalX</span>
            </div>
        </div>
        
        {/* Tab Row */}
        <div className="flex px-2 space-x-1 pb-2">
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={cn(
                            "flex-1 flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 group relative",
                            isActive 
                                ? "text-[#5E81AC]" 
                                : "text-[#666666] hover:text-[#A1A1A1] hover:bg-[#1A1A1A]"
                        )}
                    >
                        <Icon className={cn("h-5 w-5 mb-1 transition-colors", isActive ? "text-[#5E81AC]" : "text-current")} />
                        <span className={cn("text-[10px] font-medium leading-none", isActive ? "text-[#5E81AC]" : "text-[#666666]")}>
                            {tab.label}
                        </span>
                        {isActive && (
                            <span className="absolute bottom-[-9px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#5E81AC]" />
                        )}
                    </button>
                )
            })}
        </div>
      </div>
    </nav>
  );
}
