import React from 'react';

export default function TopBar({ device, activeTab, onTabSelect, onOpenDrawer }) {
  return (
    <header className="top-bar-wrapper" aria-label="Main navigation">
      <div className="top-bar-pill">
        <div
          className="top-bar-brand"
          onClick={() => onTabSelect('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onTabSelect('home')}
          title="ORo Pet Companion Home"
        >
          <div className="oro-avatar" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="3" />
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v4" />
              <line x1="8" y1="16" x2="8.01" y2="16" strokeWidth="2.5" />
              <line x1="16" y1="16" x2="16.01" y2="16" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="brand-text-col">
            <span className="brand-title">ORo</span>
            <span className="brand-subtitle">Companion</span>
          </div>
        </div>

        <nav className="pill-nav-links" aria-label="Page navigation">
          <button
            type="button"
            className={`pill-nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => onTabSelect('home')}
          >
            Overview
          </button>
          <button
            type="button"
            className={`pill-nav-link ${activeTab === 'timeline' ? 'active' : ''}`}
            onClick={() => onTabSelect('timeline')}
          >
            Pet Activity
          </button>
          <button
            type="button"
            className="pill-nav-link"
            onClick={onOpenDrawer}
          >
            Robot Health
          </button>
        </nav>

        <div className="top-bar-action">
          <button
            type="button"
            className="top-pill-btn"
            onClick={onOpenDrawer}
            aria-label={`Robot online, battery ${device.battery}%. Open health panel.`}
            title="Check robot health and battery"
          >
            <span className="pill-status-dot" aria-hidden="true"></span>
            <span className="pill-status-text">Online</span>
            <span className="pill-status-sep" aria-hidden="true">·</span>
            <span className="pill-battery-num">{device.battery}%</span>
          </button>
        </div>
      </div>
    </header>
  );
}
