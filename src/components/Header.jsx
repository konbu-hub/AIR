import React, { useState } from 'react';
import { Play, Square, Music, Feather } from 'lucide-react';
import { playNatsukage, stopNatsukage, isNatsukagePlaying } from '../utils/audioSynth';
import WeatherWidget from './WeatherWidget';

export default function Header() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleNatsukage = () => {
    if (isPlaying) {
      stopNatsukage();
      setIsPlaying(false);
    } else {
      playNatsukage();
      setIsPlaying(true);
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

      {/* 『夏影 -Natsukage-』専用 BGM プレイヤー */}
      <div className="retro-box retro-box-gold" style={{ padding: '16px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Music color="#fbbf24" size={24} className="glow-text" />
            <div>
              <div className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.1rem', fontWeight: 'bold' }}>
                観鈴のテーマ 『夏影 -Natsukage-』 (BGM Player)
              </div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '2px' }}>
                {isPlaying ? '♪ 演奏中: 正確なピッチとエンベロープで奏でられる『夏影』の旋律' : 'クリックすると『夏影』の旋律が流れます'}
              </div>
            </div>
          </div>

          <button
            onClick={handleToggleNatsukage}
            className={`retro-btn ${isPlaying ? 'retro-btn-active' : ''}`}
            style={{ padding: '10px 20px', fontSize: '1rem' }}
          >
            {isPlaying ? <Square size={16} /> : <Play size={16} />}
            {isPlaying ? '夏影を停止する' : '『夏影』を再生'}
          </button>
        </div>
      </div>

      {/* Vercel Live Serverless Weather Widget */}
      <WeatherWidget />

      {/* スクロールニューステロップ */}
      <div style={{ background: '#000', border: '1px solid #38bdf8', padding: '6px 12px', margin: '16px 0', overflow: 'hidden', whiteSpace: 'nowrap', borderRadius: '4px' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 25s linear infinite', color: '#fbbf24', fontFamily: 'var(--font-dot)', fontSize: '0.9rem' }}>
          【NEWS】観鈴のテーマ『夏影 -Natsukage-』専用メロディプレイヤーチューニング完了！ ◆ 煙樹ヶ浜の夕焼けと波音、ヒグラシの声とともに聴く奇跡の旋律 ◆
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
