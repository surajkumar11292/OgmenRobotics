import React, { useState } from 'react';

export default function EventCard({ cluster, defaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const getCategoryIcon = (type) => {
    switch (type) {
      case 'alert':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
            <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="2.5" />
          </svg>
        );
      case 'motion':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="9" cy="6" r="2" />
            <circle cx="15" cy="6" r="2" />
            <circle cx="5" cy="11" r="1.8" />
            <circle cx="19" cy="11" r="1.8" />
            <path d="M12 11c-3 0-5 2.5-5 5.5 0 2 2 3.5 5 3.5s5-1.5 5-3.5c0-3-2-5.5-5-5.5z" />
          </svg>
        );
      case 'treat':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2l2.4 5 5.6.8-4 4 1 5.6-5-2.7-5 2.7 1-5.6-4-4 5.6-.8z" />
          </svg>
        );
      case 'nap':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        );
      case 'sound':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        );
      case 'system':
      default:
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2v4" />
            <path d="M12 18v4" />
            <path d="m4.93 4.93 2.83 2.83" />
            <path d="m16.24 16.24 2.83 2.83" />
            <path d="M2 12h4" />
            <path d="M18 12h4" />
            <path d="m4.93 19.07 2.83-2.83" />
            <path d="m16.24 7.76 2.83-2.83" />
          </svg>
        );
    }
  };

  const getBadgeClass = (priority) => {
    if (priority === 'high') return 'badge-pill badge-pill-warn';
    if (priority === 'routine') return 'badge-pill badge-pill-routine';
    return 'badge-pill badge-pill-info';
  };

  return (
    <article className={`event-card event-card-${cluster.type}`}>
      <div className="event-card-top">
        <div className={`event-icon-circle event-icon-${cluster.type}`}>
          {getCategoryIcon(cluster.type)}
        </div>

        <div className="event-card-header-content">
          <div className="event-card-time-row">
            <span className="event-category">{cluster.category}</span>
            <span className="event-time mono-num">{cluster.timeRange}</span>
          </div>
          <h3 className="event-card-title">{cluster.title}</h3>
        </div>

        <span className={getBadgeClass(cluster.priority)}>
          {cluster.resolvedBadge}
        </span>
      </div>

      <p className="event-card-summary">
        {cluster.summary}
      </p>

      {cluster.events && cluster.events.length > 0 && (
        <div className="event-card-expansion-wrapper">
          <button
            type="button"
            className="event-expand-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            <span>
              {isExpanded
                ? 'Hide step-by-step timeline'
                : `See timeline (${cluster.events.length} moments)`}
            </span>
            <svg
              className={`toggle-chevron ${isExpanded ? 'rotated' : ''}`}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {isExpanded && (
            <div className="event-sublist-inset">
              {cluster.events.map((evt) => (
                <div key={evt.id} className="event-subitem">
                  <div className="event-subitem-time mono-num">{evt.time}</div>
                  <div className="event-subitem-content">
                    <strong className="event-subitem-title">{evt.title}</strong>
                    <span className="event-subitem-desc">{evt.description}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
