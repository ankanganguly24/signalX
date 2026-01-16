import { StickyNav, TabId } from "./StickyNav";

interface MainLayoutProps {
  children: React.ReactNode;
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function MainLayout({ children, activeTab, onTabChange }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col text-[#EDEDED] font-sans antialiased w-[380px]">
      <StickyNav activeTab={activeTab} onTabChange={onTabChange} />
      <main className="flex-1 p-4 pb-20"> 
        {children}
      </main>
    </div>
  );
}
