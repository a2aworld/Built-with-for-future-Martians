# 🌟 A2A World: The Galactic Storybook

> **"As Above, So Below"** — A psychological resilience tool for the interplanetary era.

![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)
![Status](https://img.shields.io/badge/status-Mission%20Ready-green.svg)
![AI](https://img.shields.io/badge/AI-Gemini%203%20Pro-gold.svg)

## 🚀 Mission Overview

The **Galactic Storybook** is a "Cockpit of Culture" designed for long-duration spaceflight. It serves as a psychological anchor for astronauts, combating the "Overview Effect" detachment and sensory monotony of deep space travel.

By overlaying ancient mythological narratives onto high-resolution Earth observation data, we transform the planet into a living library. This tool allows future Martians to connect with their heritage, ensuring the stories of Earth are preserved not just in text, but in the very geography of the home world.

## 🛠️ Tech Stack

*   **Frontend**: React 18, TypeScript, Tailwind CSS
*   **AI Core**: Google Gemini 3 Pro (Narrative Engine), Gemini 3 Pro Image (Iconography Engine)
*   **Geospatial**: Google Maps Embed API, Custom "Chronoscope" Dual-Layer Rendering
*   **Audio**: Web Speech API for auto-narration

## 🏗️ Architecture

The application operates as a **Serverless Single-Page Application (SPA)**. This architectural choice ensures maximum reliability in disconnected or high-latency environments (like Mars orbit).

1.  **The Cupola View**: A custom React component that renders two synchronized map layers.
    *   *Bottom Layer*: Satellite Telemetry (Reality).
    *   *Top Layer*: The Artist's Vision (Mythology).
    *   *Chronoscope Slider*: Allows the user to peel back reality to reveal the narrative.
2.  **The Agent**: A specialized AI persona ("The Keeper") driven by Gemini 3 Pro. It acts as a museum docent, reciting ancient tales with high fidelity.
3.  **Data Nexus**: A hardcoded, curated graph of "Story Nodes" representing validated geomythological correlations.

## 📦 Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/a2aworld/galactic-storybook.git
    cd galactic-storybook
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Launch Mission Control**
    ```bash
    npm start
    ```

## 🧠 Data Validation (Python)

While the frontend drives the experience, we maintain data integrity using Python. See `scripts/validate_myths.py` for our data validation protocols.

```bash
python scripts/validate_myths.py
```

## 📜 Credits

*   **Concept & Artwork**: Bradly Couch (A2A World)
*   **Engineering**: A2A World "Machine Man" Collective
*   **AI Partner**: Google DeepMind / Gemini

---
*© 2021-2025 Bradly Couch. All Rights Reserved.*