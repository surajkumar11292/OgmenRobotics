# ORo Pet Companion — Home & Pet Monitoring Dashboard

A responsive, mobile-first web dashboard for the **ORo Pet Companion Robot**, designed to provide pet parents with instant, reassuring updates about their dog's well-being and daily routine while away from home.

Built with **React 18**, **Vite**, and **Vanilla CSS Design Tokens**.

---

## Overview

Traditional hardware monitoring screens often overwhelm pet owners with low-level engineering telemetry (`dBm` signal readings, firmware hashes, raw sensor pings). 

This dashboard prioritizes the core question pet parents care about:
> **"Is my dog safe and happy, and is there anything that requires my attention right now?"**

The interface presents:
- **Instant Verdict**: High-level status summary at the top with quick metric cards (pet moments recorded, pending alerts, robot online status & battery).
- **Narrative Activity Stream**: Groups micro-movements into meaningful behavioral clusters (room strolls, water breaks, nap sessions, treat tosses, sound checks).
- **Floating Pill Navigation**: Modern capsule header inspired by clean SaaS ergonomics, providing quick access to views and battery status.
- **Hardware Telemetry Drawer**: Accessible slide-over drawer detailing Wi-Fi connection, battery percentage, and maintenance tools in plain, human language.

---

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Custom Properties & Design Tokens)
- **Typography**: Fraunces (Headings), DM Sans (Body & UI)
- **Icons**: Handcrafted, accessible SVGs

---

## Project Structure

```text
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx      # Mobile navigation dock
│   │   ├── DeviceDrawer.jsx   # Hardware health & battery slideover
│   │   ├── EventCard.jsx      # Activity cluster card with expandable timeline
│   │   ├── EventFeed.jsx      # Filterable activity stream
│   │   ├── StatusBanner.jsx   # Primary verdict & metric tiles
│   │   └── TopBar.jsx         # Floating capsule navigation bar
│   ├── data/
│   │   └── events.js          # Pet activity clusters & device state
│   ├── App.jsx                # Main application shell
│   ├── index.css              # Global design system & responsive layout
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML shell
├── package.json               # Dependencies & scripts
└── vite.config.js             # Vite configuration
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/surajkumar11292/OgmenRobotics.git

# Navigate into the project directory
cd OgmenRobotics

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be running locally at `http://localhost:3000/`.

### Production Build

```bash
npm run build
```

Build outputs are generated in the `dist/` directory.

---

## Design System & Responsiveness

- **Mobile First**: Optimized for one-handed thumb reachability on mobile devices with bottom tab controls.
- **Adaptive Layout**: Gracefully expands into a centered desktop dashboard with top navigation.
- **Color Palette**:
  - Background: Warm sand (`#F0EDE4`)
  - Cards & Surfaces: Clean white (`#FFFFFF`) & ivory (`#FAFAF7`)
  - Primary Accent: Deep spruce green (`#004743`)
  - Secondary Accent: Warm ochre (`#B8860B`)
