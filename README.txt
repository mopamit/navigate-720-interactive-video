NaviGate — Interactive video edition

Independent version. The original navigate-720 repository is not modified.

Edit config.js:
- videos[].src: direct MP4 URL or relative file path for each of the six tutorials.
- cues[].time: stop time in seconds in the main film.
- cues[].videos: tutorial IDs offered at that stop.

Timing rationale (six stops, one tutorial each; 12–16 seconds between stops):
00:16.8 — different learner levels in one class: teacher recommendations and personalization.
00:31.6 — challenge, support and a voice for everyone in one lesson: teacher content and learning goals.
00:43.6 — personal path, interests and AI feedback: student entry, path and tasks.
00:59.5 — Buddy dialogue after the student's answer: student translation and AI help.
01:12.5 — useful phrases and natural fluency: student skills, feedback and progress.
01:25.5 — teacher dashboard, tracking and where to focus: teacher performance analysis.
Boundaries are approximate and based on local automatic transcription and video-frame review. Earlier teacher topics are contextual invitations, not literal screen demonstrations.
The film does not explicitly demonstrate every tutorial feature: translation and teacher catalog topics remain supplementary explanations, not claims about what appears on screen.

Stops appear once per viewing. Seeking does not trigger a backlog of missed stops. Timeline dots reopen any stop. Replay resets the stops. Closing a tutorial resumes the original film at its saved position. Tutorial completion is saved locally; placeholders are never marked watched.

Local preview: node server.cjs -> http://127.0.0.1:7201

