import React, { useEffect } from 'react';

export default function DeviceDrawer({ isOpen, onClose, device }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="drawer-overlay" onClick={onClose} role="presentation">
      <div
        className="drawer-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-handle" aria-hidden="true"></div>

        <div className="drawer-header">
          <div>
            <h2 id="drawer-title" className="drawer-title">
              ORo Robot & Battery Health
            </h2>
            <p className="drawer-subtitle">Simple status check for your pet companion</p>
          </div>

          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close health panel"
            title="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="drawer-body">
          <div className="telemetry-grid">
            <div className="telemetry-cell">
              <span className="telemetry-label">Connection</span>
              <div className="telemetry-value-row">
                <span className="telemetry-dot online"></span>
                <span className="telemetry-value">Online & Ready</span>
              </div>
              <span className="telemetry-sub">Connected to home Wi-Fi</span>
            </div>

            <div className="telemetry-cell">
              <span className="telemetry-label">Battery Level</span>
              <div className="telemetry-value-row">
                <span className="telemetry-value mono-num">{device.battery}%</span>
              </div>
              <div className="battery-level-bar" aria-hidden="true">
                <div className="battery-level-fill" style={{ width: `${device.battery}%` }}></div>
              </div>
              <span className="telemetry-sub">Plenty of power for today</span>
            </div>

            <div className="telemetry-cell">
              <span className="telemetry-label">Last Checked In</span>
              <span className="telemetry-value mono-num">{device.lastSync}</span>
              <span className="telemetry-sub">Everything is up to date</span>
            </div>

            <div className="telemetry-cell">
              <span className="telemetry-label">Wi-Fi Signal</span>
              <span className="telemetry-value">Strong</span>
              <span className="telemetry-sub tag-mint">Smooth video streaming</span>
            </div>

            <div className="telemetry-cell">
              <span className="telemetry-label">Robot Software</span>
              <span className="telemetry-value mono-num">v{device.firmwareVersion}</span>
              <span className="telemetry-sub tag-mint">Up to date</span>
            </div>

            <div className="telemetry-cell">
              <span className="telemetry-label">Last Restarted</span>
              <span className="telemetry-value">{device.lastRestart}</span>
              <span className="telemetry-sub">Running smoothly</span>
            </div>

            <div className="telemetry-cell">
              <span className="telemetry-label">Pet Activity Today</span>
              <span className="telemetry-value mono-num">{device.totalEventsToday} moments</span>
              <span className="telemetry-sub">Stretching, play & walks</span>
            </div>

            <div className="telemetry-cell">
              <span className="telemetry-label">Notices to Review</span>
              <span className="telemetry-value mono-num">{device.importantCount} notice</span>
              <span className="telemetry-sub tag-mint">Wi-Fi recovered by itself</span>
            </div>
          </div>

          <div className="drawer-actions-section">
            <span className="drawer-section-heading">Helpful Controls</span>
            <div className="drawer-action-buttons">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => alert('Restarting ORo... It will be ready in 30 seconds.')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
                Restart ORo
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => alert('ORo is up to date with the latest features!')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2v10M18 8l-6 6-6-6M4 20h16" />
                </svg>
                Check for Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
