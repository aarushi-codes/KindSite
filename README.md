# KindSite



**🌱 KindSite — Make Every Site a Little Kinder
Inclusive web accessibility through AI, voice continuity, and on-device personalization.**

**🧩 The Problem**

Universities do provide accessibility accommodations—but they’re scattered across PDFs, websites, and videos. Students registered with Accessibility Services often juggle separate tools for text-to-speech, captions, math readers, and styling preferences.

KindSite unifies that support.

**💡 The Solution**

Students set their accessibility preferences once—readability, motion sensitivity, math narration, captions—and KindSite takes care of the rest.

- PDF Fixer (Chatbot) – Upload a course PDF → KindSite reformats and re-voices it to match your personal accessibility profile.
- Browser Extension – The same preferences automatically apply to live webpages:
- Dyslexia-friendly fonts and calmer spacing
- Reduced motion and visual clutter
- Clear, natural math narration
- One-click captions for videos

**🗣️ Voice Continuity**

What makes KindSite different: familiarity.
Using ElevenLabs, instructors can securely clone their teaching voice.

Then:
- Every paragraph, code block, and equation is read in that same voice.
- Math and code blocks route through dedicated voice pipelines (Narration / Math / Code).
- Students hear consistent pronunciation of every course term—just like in class.
- Hearing your own professor read the material turns every PDF and webpage into a continuation of lecture.

  
**⚙️ Under the Hood**

- Content-aware rendering — LaTeX → semantic speech conversion.
- Per-block voice routing — Distinct models for narration, math, and code.
- ElevenLabs APIs — TTS + STT for speech synthesis and live captions.
- On-device styling engine — Privacy-first adjustments to font, contrast, spacing, and animation.
- Supabase + Flask backend — Secure preference storage and PDF processing.
- Next.js + Chrome Extension frontend — Seamless sync between the web dashboard and live browsing.


**🎯 Impact**

KindSite reduces cognitive load, standardizes pronunciation, and scales accessibility support without increasing staff workload. Accessibility Offices can deliver consistent, personalized, and human-sounding support to every student—no extra tickets required.


**Tech Stack**

| Layer                | Tools                                 |
| -------------------- | ------------------------------------- |
| Frontend             | Next.js 14, Tailwind, React Hooks     |
| Backend              | Flask, Supabase, REST APIs            |
| Voice                | ElevenLabs TTS/STT                    |
| Accessibility Engine | Custom DOM mutation + CSS transformer |
| Packaging            | Chrome Extension (Manifest V3)        |
| Deployment           | Vercel (frontend) + Render (backend)  |



**Quick Start**

# Clone the repo
git clone https://github.com/aarushialreja/kindsite.git
cd kindsite

# Frontend setup
cd frontend
npm install
npm run dev

# Backend setup
cd ../server
pip install -r requirements.txt
python app.py

Then open the Chrome Extension panel → “Load unpacked” → select /extension.

**🧭 Roadmap**

- Voice continuity for group projects (multi-speaker coursepacks)
- LMS integration (Canvas / Quercus)
- Offline mode for PDFs
- Automated pronunciation correction
- AI-based caption cleanup

Accessibility shouldn’t feel like an add-on—it should feel like kindness built in. 🌱
