import { useState } from 'react';
import './App.css';
import { MainLayout } from './components/layout/MainLayout';
import { EngageScreen } from './features/engage/EngageScreen';
import { SearchScreen } from './features/search/SearchScreen';
import { SavedScreen } from './features/saved/SavedScreen';
import { SettingsScreen } from './features/settings/SettingsScreen';
import { TabId } from './components/layout/StickyNav';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('engage');

  const renderContent = () => {
    switch (activeTab) {
      case 'engage': return <EngageScreen />;
      case 'search': return <SearchScreen />;
      case 'saved': return <SavedScreen />;
      case 'settings': return <SettingsScreen />;
      default: return <EngageScreen />;
    }
  };

  return (
    <MainLayout activeTab={activeTab} onTabChange={setActiveTab}>
      <h1 className="text-2xl font-bold tracking-tight mb-2">SignalX</h1>
      <div className="animate-in fade-in zoom-in-95 duration-200">
        {renderContent()}
      </div>
    </MainLayout>
  );
}

export default App;
