# 🌱 KindSite — Make Every Site a Little Kinder

> Unified accessibility for PDFs, webpages, and videos — powered by AI, personalization, and voice continuity.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)](https://nextjs.org/)
[![Flask](https://img.shields.io/badge/Flask-Backend-blue?logo=flask)](https://flask.palletsprojects.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green?logo=supabase)](https://supabase.com/)
[![ElevenLabs](https://img.shields.io/badge/Voice-ElevenLabs-orange)](https://elevenlabs.io/)
[![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](LICENSE)

---

## 🧩 Overview

Universities already provide *accommodations* — but the support is fragmented across PDFs, websites, and videos.  
**KindSite** untangles that.

Students registered with Accessibility Services set simple preferences once — readability, motion, math, captions — and those settings follow them everywhere.

- 🧠 **Chatbot PDF Fixer** — upload a course PDF → KindSite reformats it with your accessibility profile.  
- 🌐 **Browser Extension** — automatically applies your preferences to live webpages:
  - Dyslexia-friendly fonts & calm spacing  
  - Reduced motion & visual clutter  
  - Clear, natural math narration  
  - One-click captions for videos  

---

## 🗣️ Voice Continuity

**What makes KindSite unique:** *familiarity.*

Using [ElevenLabs](https://elevenlabs.io/), instructors can safely clone their teaching voice.  
Then:

- Every paragraph, equation, and code block is read in that same voice.  
- Pronunciation stays consistent across classes and materials.  
- Students hear their own professor explain every concept — just like lecture.

> Voice continuity bridges digital content and classroom experience.

---

## ⚙️ Architecture

| Layer | Technologies | Purpose |
|-------|---------------|----------|
| **Frontend** | Next.js 14, React, Tailwind | Dashboard + extension UI |
| **Backend** | Flask, Supabase | API endpoints, preference storage |
| **Voice Engine** | ElevenLabs TTS + STT | Speech synthesis, live captions |
| **Accessibility Engine** | Custom DOM transformer | Font, motion, color, and layout adjustments |
| **Packaging** | Chrome Extension (MV3) | In-browser real-time adaptation |

---

## 🧠 How It Works

1. **Preferences Setup**  
   Students specify font type, size, motion sensitivity, and caption preferences in the KindSite dashboard.

2. **PDF Processing**  
   PDFs uploaded to the chatbot are processed with content-aware rendering:  
   LaTeX → semantic speech → ElevenLabs voice output.

3. **Live Web Adaptation**  
   The browser extension detects page structure and applies on-device transformations, ensuring privacy and speed.

4. **Voice Continuity**  
   Distinct pipelines for Narration / Math / Code maintain clear context while keeping the same instructor voice.

---

## 🚀 Quick Start

### Frontend
```bash
git clone https://github.com/aarushialreja/kindsite.git
cd kindsite/finalkindsite1/frontend
npm install
npm run dev
