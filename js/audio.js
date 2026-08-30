/**
 * Meelad Fest Goliyangadi - Advanced Stage Web Audio Sound Engine
 * Synthesizes pure procedural broadcast-grade audio effects using Web Audio API.
 * 100% offline, zero external sound file dependencies!
 */

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
    this.volume = 0.85;
    this.isEqualizerActive = false;
    this.onAudioActivity = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  triggerActivity() {
    if (this.onAudioActivity) {
      this.onAudioActivity();
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
  }

  // 1. Clock Tick & Heartbeat Sound (Every second in countdown)
  playTick(isUrgent = false) {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    this.triggerActivity();

    const ctx = this.audioCtx;

    if (isUrgent) {
      // Dramatic Heartbeat double-thump for urgent countdown
      const thump1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      thump1.type = 'sine';
      thump1.frequency.setValueAtTime(90, ctx.currentTime);
      thump1.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.09);

      gain1.gain.setValueAtTime(this.volume * 0.45, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);

      thump1.connect(gain1);
      gain1.connect(ctx.destination);
      thump1.start();
      thump1.stop(ctx.currentTime + 0.1);

      // Second beat 100ms later
      setTimeout(() => {
        if (!this.audioCtx || this.isMuted) return;
        const thump2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        thump2.type = 'sine';
        thump2.frequency.setValueAtTime(75, ctx.currentTime);
        thump2.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.08);

        gain2.gain.setValueAtTime(this.volume * 0.3, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

        thump2.connect(gain2);
        gain2.connect(ctx.destination);
        thump2.start();
        thump2.stop(ctx.currentTime + 0.09);
      }, 110);

    } else {
      // Crisp subtle stage countdown tick
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(650, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(this.volume * 0.16, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    }
  }

  // 2. Correct Answer Golden Chime & Triumphant Harmony
  playCorrect() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    this.triggerActivity();

    const ctx = this.audioCtx;
    // Major chord triumphant sparkle: C5, E5, G5, C6, E6
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];

    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.07);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + index * 0.07);
      gain.gain.linearRampToValueAtTime(this.volume * 0.35, ctx.currentTime + index * 0.07 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + index * 0.07 + 0.85);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + index * 0.07);
      osc.stop(ctx.currentTime + index * 0.07 + 0.9);
    });
  }

  // 3. Wrong Answer Dramatic Stinger
  playWrong() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    this.triggerActivity();

    const ctx = this.audioCtx;
    const freqs = [185.00, 174.61, 130.81]; // F#3, F3, C3 (dissonant decline)

    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);

      gain.gain.setValueAtTime(this.volume * 0.32, ctx.currentTime + i * 0.12);
      gain.gain.linearRampToValueAtTime(this.volume * 0.32, ctx.currentTime + i * 0.12 + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.12 + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.46);
    });
  }

  // 4. Lifeline Sound (Magical Celestial Harp)
  playLifeline() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    this.triggerActivity();

    const ctx = this.audioCtx;
    const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51, 1760.00];

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.05);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + i * 0.05);
      gain.gain.linearRampToValueAtTime(this.volume * 0.25, ctx.currentTime + i * 0.05 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.05 + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + i * 0.05);
      osc.stop(ctx.currentTime + i * 0.05 + 0.5);
    });
  }

  // 5. Option Select / Lock-In Click
  playSelect() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    this.triggerActivity();

    const ctx = this.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(450, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(950, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(this.volume * 0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.07);
  }

  // 6. Option Hover Micro-Tick
  playHover() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.02);

    gain.gain.setValueAtTime(this.volume * 0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.025);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.03);
  }

  // 7. Buzzer trigger
  playBuzzer() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    this.triggerActivity();

    const ctx = this.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(this.volume * 0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.36);
  }

  // 8. Grand Victory Fanfare
  playFanfare() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    this.triggerActivity();

    const ctx = this.audioCtx;
    const chordSeq = [
      { freqs: [523.25, 659.25, 783.99], time: 0, dur: 0.22 },
      { freqs: [523.25, 659.25, 783.99], time: 0.24, dur: 0.22 },
      { freqs: [523.25, 659.25, 783.99], time: 0.48, dur: 0.22 },
      { freqs: [659.25, 783.99, 1046.50], time: 0.72, dur: 0.85 }
    ];

    chordSeq.forEach(chord => {
      chord.freqs.forEach(f => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime + chord.time);

        gain.gain.setValueAtTime(0.001, ctx.currentTime + chord.time);
        gain.gain.linearRampToValueAtTime(this.volume * 0.3, ctx.currentTime + chord.time + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + chord.time + chord.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + chord.time);
        osc.stop(ctx.currentTime + chord.time + chord.dur + 0.05);
      });
    });
  }

  // 9. Realistic Crowd Applause & Cheering Generator
  playApplause() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    this.triggerActivity();

    const ctx = this.audioCtx;
    const bufferSize = ctx.sampleRate * 2.5; // 2.5 seconds of applause
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Pink-noise like burst for natural clapping
      data[i] = (Math.random() * 2 - 1) * (Math.sin(i / 1500) > 0.6 ? 1.2 : 0.4);
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1100, ctx.currentTime);
    filter.Q.setValueAtTime(2.5, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(this.volume * 0.4, ctx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.4);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
    noise.stop(ctx.currentTime + 2.5);
  }

  // 10. Dramatic Suspense Drum Roll
  playDrumRoll() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    this.triggerActivity();

    const ctx = this.audioCtx;
    const numHits = 24;
    const duration = 1.6;

    for (let i = 0; i < numHits; i++) {
      const hitTime = ctx.currentTime + (i / numHits) * duration;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140 + Math.random() * 25, hitTime);
      osc.frequency.exponentialRampToValueAtTime(50, hitTime + 0.06);

      const hitVolume = (i / numHits) * this.volume * 0.35 + 0.05;
      gain.gain.setValueAtTime(hitVolume, hitTime);
      gain.gain.exponentialRampToValueAtTime(0.001, hitTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(hitTime);
      osc.stop(hitTime + 0.07);
    }
  }
}

// Global instance
window.soundEngine = new SoundEngine();
