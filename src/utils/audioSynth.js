// Web Audio API によるノスタルジック 8-bit / チップチューン風 メロディプレイヤー (夏影 & 鳥の詩モチーフ)

let audioCtx = null;
let isPlaying = false;
let currentTrack = null;
let noteTimeout = null;

// 音符の周波数 (Hz)
const NOTES = {
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00, B5: 987.77,
  C6: 1046.50, REST: 0
};

// 『夏影 -Natsukage-』風ノスタルジック旋律（美浜町の青空と海を想わせるノスタルジー）
const NATSUKAGE_MELODY = [
  { note: 'E5', duration: 400 },
  { note: 'F5', duration: 400 },
  { note: 'G5', duration: 800 },
  { note: 'C6', duration: 800 },
  { note: 'B5', duration: 400 },
  { note: 'A5', duration: 400 },
  { note: 'G5', duration: 800 },
  { note: 'E5', duration: 400 },
  { note: 'F5', duration: 400 },
  { note: 'G5', duration: 800 },
  { note: 'A5', duration: 400 },
  { note: 'G5', duration: 400 },
  { note: 'E5', duration: 800 },
  { note: 'D5', duration: 800 },
  { note: 'C5', duration: 1200 },
  { note: 'REST', duration: 400 },
];

// 『鳥の詩 -Tori no Uta-』風サビ旋律（国歌と呼ばれる神曲）
const TORI_NO_UTA_MELODY = [
  { note: 'G4', duration: 300 },
  { note: 'C5', duration: 300 },
  { note: 'D5', duration: 300 },
  { note: 'E5', duration: 600 },
  { note: 'D5', duration: 300 },
  { note: 'C5', duration: 600 },
  { note: 'D5', duration: 300 },
  { note: 'E5', duration: 900 },
  { note: 'G5', duration: 600 },
  { note: 'E5', duration: 600 },
  { note: 'D5', duration: 600 },
  { note: 'C5', duration: 1200 },
  { note: 'REST', duration: 400 },
];

export function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

export function playMelody(trackName = 'natsukage', onEndCallback = null) {
  stopMelody();
  initAudio();

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  isPlaying = true;
  currentTrack = trackName;
  const melody = trackName === 'natsukage' ? NATSUKAGE_MELODY : TORI_NO_UTA_MELODY;
  let index = 0;

  function playNextNote() {
    if (!isPlaying) return;

    const item = melody[index];
    const freq = NOTES[item.note] || 0;

    if (freq > 0) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      // 三角波で温かみのあるファミコン/MIDI風のリード音響を作る
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // アタック・リリース envelope
      gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (item.duration / 1000) - 0.05);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + (item.duration / 1000));
    }

    index = (index + 1) % melody.length;
    noteTimeout = setTimeout(playNextNote, item.duration);
  }

  playNextNote();
}

export function stopMelody() {
  isPlaying = false;
  currentTrack = null;
  if (noteTimeout) {
    clearTimeout(noteTimeout);
    noteTimeout = null;
  }
}

export function getAudioState() {
  return { isPlaying, currentTrack };
}
