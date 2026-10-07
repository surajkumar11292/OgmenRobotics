import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import StatusBanner from './components/StatusBanner';
import EventFeed from './components/EventFeed';
import DeviceDrawer from './components/DeviceDrawer';
import BottomNav from './components/BottomNav';
import { device, statusSummary, activityClusters, filterOptions } from './data/events';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const feedEl = document.querySelector('.event-feed-section');
      if (!feedEl) return;

      const feedTop = feedEl.getBoundingClientRect().top;
      if (feedTop <= 160) {
        setActiveTab('timeline');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    if (tab === 'timeline') {
      const el = document.querySelector('.event-feed-section');
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-shell">
      <TopBar
        device={device}
        activeTab={activeTab}
        onTabSelect={handleTabSelect}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      <main className="app-main container">
        <StatusBanner
          summary={statusSummary}
          onOpenDrawer={() => setIsDrawerOpen(true)}
        />

        <EventFeed
          clusters={activityClusters}
          filterOptions={filterOptions}
        />
      </main>

      <BottomNav
        activeTab={activeTab}
        onTabSelect={handleTabSelect}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      <DeviceDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        device={device}
      />
    </div>
  );
}
