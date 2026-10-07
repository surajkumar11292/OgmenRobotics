import React from 'react';

export default function StatusBanner({ summary, onOpenDrawer }) {
  return (
    <section className="status-banner" aria-label="Pet and home overview">
      <div className="status-banner-header">
        <div className="status-pill status-pill-warn">
          <span className="status-badge-dot" aria-hidden="true"></span>
          <span>{summary.headline}</span>
        </div>
        <span className="status-away-time mono-num">{summary.awayDuration}</span>
      </div>

      <h1 className="status-banner-title">
        {summary.title}
      </h1>

      <p className="status-banner-desc">
        {summary.detail}
      </p>

      <div className="status-metrics-grid" role="group" aria-label="Quick pet checkup">
        <div className="metric-tile">
          <span className="metric-label">Pet moments</span>
          <span className="metric-value">
            {summary.quickStats ? summary.quickStats[0].value : '22 recorded'}
          </span>
        </div>

        <div className="metric-tile">
          <span className="metric-label">Action needed</span>
          <span className="metric-value metric-value-good">0 (All good)</span>
        </div>

        <button
          type="button"
          className="metric-tile metric-tile-interactive"
          onClick={onOpenDrawer}
          title="Check ORo battery and health"
          aria-label="Check ORo battery and health"
        >
          <span className="metric-label">Robot health</span>
          <span className="metric-value metric-link">
            <span className="status-dot-inline" aria-hidden="true"></span>
            Online · 64%
          </span>
        </button>
      </div>
    </section>
  );
}
