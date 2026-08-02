// AIR 観鈴のテーマ『夏影 -Natsukage-』完全再現 ピアノ＆アルペジオ Web Audio オーディオエンジン

let audioCtx = null;
let isPlaying = false;
let noteTimeout = null;

// ヘ長調 (F Major) の正確な音階周波数 (Hz)
const FREQ = {
  // ベース / 伴奏音域 (オクターブ 3 & 4)
  F3: 174.61, G3: 196.00, A3: 220.00, Bb3: 233.08, C4: 261.63, D4: 293.66, E4: 329.63,
  F4: 349.23, G4: 392.00, A4: 440.00, Bb4: 466.16, C5: 523.25, D5: 587.33, E5: 659.25,
  // 主旋律音域 (オクターブ 5 & 6)
  F5: 698.46, G5: 783.99, A5: 880.00, Bb5: 932.33, C6: 1046.50, D6: 1174.66, E6: 1318.51, F6: 1396.91,
  REST: 0
};

// 16分音符を基準としたテンポ計算 (BPM = 100)
// 1拍 (4分音符) = 600ms, 8分音符 = 300ms, 16分音符 = 150ms
const T16 = 145;
const T8 = T16 * 2;   // 290ms
const T8D = T16 * 3;  // 435ms
const T4 = T16 * 4;   // 580ms
const T4D = T16 * 6;  // 870ms
const T2 = T16 * 8;   // 1160ms
const T1 = T16 * 16;  // 2320ms

// 『夏影 -Natsukage-』原曲F Major旋律（メロディ ＋ ベース伴奏コードデータ）
const NATSUKAGE_SCORE = [
  // Intro / Theme Part 1:
  // [F5 - G5 - A5〜〜 D6〜〜〜]  (コード: Bb -> C -> Am -> Dm)
  { note: 'F5', bass: 'Bb3', dur: T8 },
  { note: 'G5', bass: 'D4', dur: T8 },
  { note: 'A5', bass: 'F4', dur: T8D },
  { note: 'D6', bass: 'F4', dur: T2 },

  // [C6 - Bb5 - A5〜〜 F5〜〜〜]
  { note: 'C6', bass: 'C4', dur: T8 },
  { note: 'Bb5', bass: 'E4', dur: T8 },
  { note: 'A5', bass: 'G4', dur: T8D },
  { note: 'F5', bass: 'C5', dur: T2 },

  // [F5 - G5 - A5〜〜 Bb5 - A5〜 F5〜〜 E5〜〜]
  { note: 'F5', bass: 'A3', dur: T8 },
  { note: 'G5', bass: 'C4', dur: T8 },
  { note: 'A5', bass: 'E4', dur: T4 },
  { note: 'Bb5', bass: 'G4', dur: T8 },
  { note: 'A5', bass: 'E4', dur: T8 },
  { note: 'F5', bass: 'C4', dur: T4D },
  { note: 'E5', bass: 'A3', dur: T2 },

  // [D5〜〜〜〜]
  { note: 'D5', bass: 'D3', dur: T2 + T4 },
  { note: 'REST', bass: 'REST', dur: T4 },

  // Theme Part 2 (クライマックス):
  // [F5 - G5 - A5〜〜 D6〜〜〜]
  { note: 'F5', bass: 'Bb3', dur: T8 },
  { note: 'G5', bass: 'D4', dur: T8 },
  { note: 'A5', bass: 'F4', dur: T8D },
  { note: 'D6', bass: 'F4', dur: T2 },

  // [C6 - D6 - C6〜〜 A5〜〜〜]
  { note: 'C6', bass: 'C4', dur: T8 },
  { note: 'D6', bass: 'E4', dur: T8 },
  { note: 'C6', bass: 'G4', dur: T8D },
  { note: 'A5', bass: 'C5', dur: T2 },

  // [Bb5 - C6 - D6〜〜 E6 - D6〜 A5〜〜]
  { note: 'Bb5', bass: 'Bb3', dur: T8 },
  { note: 'C6', bass: 'D4', dur: T8 },
  { note: 'D6', bass: 'F4', dur: T4 },
  { note: 'E6', bass: 'A4', dur: T8 },
  { note: 'D6', bass: 'F4', dur: T8 },
  { note: 'A5', bass: 'D4', dur: T4D },

  // [F5〜〜〜〜] (澄み切った夏の終わり)
  { note: 'F5', bass: 'F3', dur: T1 },
  { note: 'REST', bass: 'REST', dur: T2 }
];

export function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

// ピアノの打弦・残響を模した音響合成関数
function playPianoNote(freq, time, durationSec, volume = 0.15) {
  if (!freq || freq <= 0) return;

  // 主基音 (Sine + Triangle)
  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  // フィルターでグランドピアノ特有の温かみを与える
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(freq > 800 ? 2400 : 1600, time);

  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(freq, time);

  // 倍音成分でピアノの打鍵感を作る
  osc2.type = 'triangle';
  osc2.frequency.setValueAtTime(freq * 2, time);

  // ピアノのエンベロープ (急速なアタック ＋ 自然な長い減衰 Decay)
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(volume, time + 0.012); // アタック 12ms
  gain.gain.exponentialRampToValueAtTime(volume * 0.4, time + 0.1); // 初期減衰
  gain.gain.exponentialRampToValueAtTime(0.0001, time + durationSec + 0.4); // 余韻

  osc1.connect(filter);
  osc2.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  osc1.start(time);
  osc2.start(time);
  osc1.stop(time + durationSec + 0.5);
  osc2.stop(time + durationSec + 0.5);
}

export function playNatsukage() {
  stopNatsukage();
  initAudio();

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  isPlaying = true;
  let index = 0;

  function scheduleNextStep() {
    if (!isPlaying) return;

    const item = NATSUKAGE_SCORE[index];
    const melodyFreq = FREQ[item.note] || 0;
    const bassFreq = FREQ[item.bass] || 0;
    const durationSec = item.dur / 1000;
    const now = audioCtx.currentTime;

    // 主旋律メロディの打鍵
    if (melodyFreq > 0) {
      playPianoNote(melodyFreq, now, durationSec, 0.18);
    }

    // アルペジオ・ベース低音の打鍵 (伴奏)
    if (bassFreq > 0) {
      playPianoNote(bassFreq, now, durationSec * 1.5, 0.10);
    }

    index = (index + 1) % NATSUKAGE_SCORE.length;
    noteTimeout = setTimeout(scheduleNextStep, item.dur);
  }

  scheduleNextStep();
}

export function stopNatsukage() {
  isPlaying = false;
  if (noteTimeout) {
    clearTimeout(noteTimeout);
    noteTimeout = null;
  }
}

export function isNatsukagePlaying() {
  return isPlaying;
}
