import React, { useState } from 'react';
import EventCard from './EventCard';

export default function EventFeed({ clusters, filterOptions }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredClusters = clusters.filter((c) => {
    if (activeFilter === 'attention') return c.priority === 'high';
    if (activeFilter === 'routine') return c.priority === 'routine' || c.priority === 'info';
    return true;
  });

  const getCount = (id) => {
    if (id === 'all') return clusters.length;
    if (id === 'attention') return clusters.filter((c) => c.priority === 'high').length;
    if (id === 'routine') return clusters.filter((c) => c.priority === 'routine' || c.priority === 'info').length;
    return 0;
  };

  return (
    <section className="event-feed-section" aria-label="Pet activity timeline">
      <div className="event-feed-header">
        <h2 className="event-feed-title">What happened while you were away</h2>
        
        <div className="filter-pill-group" role="tablist" aria-label="Filter pet moments">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === opt.id}
              className={`filter-pill ${activeFilter === opt.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(opt.id)}
            >
              <span>{opt.label}</span>
              <span className="filter-count mono-num">{getCount(opt.id)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="event-feed-list">
        {filteredClusters.length > 0 ? (
          filteredClusters.map((cluster) => (
            <EventCard
              key={cluster.id}
              cluster={cluster}
            />
          ))
        ) : (
          <div className="empty-feed-card">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="empty-feed-title">Nothing needs your attention right now</p>
            <span className="empty-feed-sub">Your pet is happy and ORo is watching peacefully.</span>
          </div>
        )}
      </div>
    </section>
  );
}
