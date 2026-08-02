import React, { useState } from 'react';
import { Play, Square, Music, Feather, Sparkles, Heart } from 'lucide-react';
import { playMelody, stopMelody } from '../utils/audioSynth';
import WeatherWidget from './WeatherWidget';

export default function Header() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState('natsukage');

  const handleToggleBgm = (track) => {
    if (isPlaying && activeTrack === track) {
      stopMelody();
      setIsPlaying(false);
    } else {
      playMelody(track);
      setIsPlaying(true);
      setActiveTrack(track);
    }
  };

  return (
    <header className="animate-fade-in">
      {/* 2000年代ファンサイト風トップバー */}
      <div className="retro-box" style={{ padding: '12px 20px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Feather color="#38bdf8" size={22} className="glow-text" />
          <span className="font-dot" style={{ color: '#fbbf24', fontSize: '0.95rem' }}>
            ★ Key / AIR Fan Pilgrimage Station [ 1000th Summer ] ★
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="font-dot" style={{ fontSize: '0.8rem', color: '#94a3b8' }}>ACCESS COUNTER:</span>
          <div className="counter-box">
            <span className="counter-digit">0</span>
            <span className="counter-digit">0</span>
            <span className="counter-digit">7</span>
            <span className="counter-digit">3</span>
            <span className="counter-digit">4</span>
            <span className="counter-digit">1</span>
          </div>
          <span className="font-dot" style={{ fontSize: '0.75rem', color: '#38bdf8' }}>[キリ番GET]</span>
        </div>
      </div>

      {/* AIR世界観 ヒーロービジュアル（青空・雲・舞い散る羽根） */}
      <div className="hero-banner">
        <img 
          src="/images/hero_sky.png" 
          alt="AIR 青空と舞い散る羽のビジュアル" 
          className="hero-bg-img"
        />

        <div className="hero-overlay">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
            <div>
              <span className="font-dot" style={{ background: 'rgba(234, 88, 12, 0.9)', color: '#fff', padding: '4px 12px', borderRadius: '2px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                オタクによる、オタクのための聖地巡礼ステーション
              </span>
              <h1 className="font-mincho glow-text" style={{ fontSize: '2.8rem', color: '#fffdf8', letterSpacing: '6px', margin: '10px 0 6px 0', textShadow: '0 0 20px rgba(56,189,248,0.8)' }}>
                AIR - 1000th Summer -
              </h1>
              <p className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.2rem', textShadow: '1px 1px 4px #000' }}>
                「人は過去の思い出だけで生きていくことはできない。でも、忘れてはいけない夏の記憶がある。」
              </p>
            </div>

            {/* 縦書きの感情名言語録 */}
            <div className="vertical-quote">
              「…ガオ。ガオって言った」「もう、ゴールしていいよね」
            </div>
          </div>
        </div>
      </div>

      {/* Web Audio BGMプレイヤー (夏影 & 鳥の詩) */}
      <div className="retro-box retro-box-gold" style={{ padding: '14px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Music color="#fbbf24" size={22} className="glow-text" />
            <div>
              <span className="font-dot" style={{ color: '#38bdf8', fontSize: '1rem', fontWeight: 'bold' }}>
                Nostalgic 8-Bit Melody Player:
              </span>
              <span style={{ fontSize: '0.88rem', color: '#f8fafc', marginLeft: '8px' }}>
                {isPlaying ? (activeTrack === 'natsukage' ? '♪ 演奏中: 夏影 -Natsukage-' : '♪ 演奏中: 鳥の詩 -Tori no Uta-') : '再生ボタンを押すと8bit旋律が流れます'}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => handleToggleBgm('natsukage')}
              className={`retro-btn ${isPlaying && activeTrack === 'natsukage' ? 'retro-btn-active' : ''}`}
              title="観鈴のテーマ『夏影』風8bitメロディ"
            >
              {isPlaying && activeTrack === 'natsukage' ? <Square size={14} /> : <Play size={14} />}
              夏影 -Natsukage-
            </button>
            <button
              onClick={() => handleToggleBgm('torinouata')}
              className={`retro-btn ${isPlaying && activeTrack === 'torinouata' ? 'retro-btn-active' : ''}`}
              title="国歌『鳥の詩』風8bitメロディ"
            >
              {isPlaying && activeTrack === 'torinouata' ? <Square size={14} /> : <Play size={14} />}
              鳥の詩 -Tori no Uta-
            </button>
          </div>
        </div>
      </div>

      {/* Vercel Live Serverless Weather Widget */}
      <WeatherWidget />

      {/* スクロールニューステロップ */}
      <div style={{ background: '#000', border: '1px solid #38bdf8', padding: '6px 12px', margin: '16px 0', overflow: 'hidden', whiteSpace: 'nowrap', borderRadius: '4px' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 25s linear infinite', color: '#fbbf24', fontFamily: 'var(--font-dot)', fontSize: '0.9rem' }}>
          【NEWS】AIR 25th Anniversary 聖地巡礼コンプリートデータ公開！ ◆ 和歌山県美浜町（煙樹ヶ浜・浜の瀬バス停・逢宕神社）＆ 由良町白崎海岸 ＆ 兵庫県香美町余部鉄橋 ◆ 舞い散る羽とともにあの夏へ ◆
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </header>
  );
}
