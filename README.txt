NaviGate — Interactive video edition

Independent version. The original navigate-720 repository is not modified.

Edit config.js:
- videos[].src: direct MP4 URL or relative file path for each of the six tutorials.
- cues[].time: stop time in seconds in the main film.
- cues[].videos: tutorial IDs offered at that stop.

Timing rationale (approximate boundaries from local automatic speech transcription, compared with video frames):
00:40.8 — choosing a personal learning path and content of interest (student-start).
00:49.1 — after the AI feedback and “Keep going” (student-progress).
01:03.5 — after Buddy practice and confidence to speak (student-help).
01:25.5 — after teacher progress tracking, support and where to focus next (three teacher tutorials).
The film does not explicitly demonstrate every tutorial feature: translation and teacher catalog topics remain supplementary explanations, not claims about what appears on screen.

Stops appear once per viewing. Seeking does not trigger a backlog of missed stops. Timeline dots reopen any stop. Replay resets the stops. Closing a tutorial resumes the original film at its saved position. Tutorial completion is saved locally; placeholders are never marked watched.

Local preview: node server.cjs -> http://127.0.0.1:7201
