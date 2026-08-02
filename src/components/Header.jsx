import React, { useState } from 'react';
import { Play, Square, Music, Feather } from 'lucide-react';
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
    <header className="retro-box retro-box-gold animate-fade-in" style={{ padding: '20px' }}>
      {/* 2000年代初頭オタクファンサイト風トップバー */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderBottom: '1px dashed #1d5f8a', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Feather color="#38bdf8" size={24} className="glow-text" />
          <span className="font-dot" style={{ color: '#fbbf24', fontSize: '0.95rem' }}>
            ★ Key / AIR Fan Pilgrimage Station [Since 2005] ★
          </span>
        </div>
        
        {/* アクセスカウンター */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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

      {/* メインタイトルのレトロアセット */}
      <div style={{ textAlign: 'center', margin: '20px 0 16px 0' }}>
        <h1 className="font-mincho glow-text" style={{ fontSize: '2.4rem', color: '#7dd3fc', letterSpacing: '4px', textShadow: '0 0 12px rgba(56,189,248,0.5)' }}>
          AIR 聖地巡礼コンプリートガイド
        </h1>
        <p className="font-dot" style={{ color: '#fbbf24', fontSize: '1rem', marginTop: '6px' }}>
          〜 1000の夏を越えて、観鈴と往人のいたあの海辺へ。神奈川発・フレキシブル旅程シミュレーター 〜
        </p>
      </div>

      {/* Web Audio BGMプレイヤー (夏影 & 鳥の詩) */}
      <div style={{ background: 'rgba(6, 20, 46, 0.9)', border: '1px solid #1e40af', padding: '12px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Music color="#fbbf24" size={20} />
          <span className="font-dot" style={{ color: '#38bdf8', fontSize: '0.9rem' }}>
            Nostalgic 8-Bit Melody Player:
          </span>
          <span style={{ fontSize: '0.85rem', color: '#f8fafc' }}>
            {isPlaying ? (activeTrack === 'natsukage' ? '♪ 演奏中: 夏影 -Natsukage-' : '♪ 演奏中: 鳥の詩 -Tori no Uta-') : '停止中'}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
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

      {/* Vercel Live Serverless Weather Widget */}
      <WeatherWidget />

      {/* スクロールテロップニュース */}
      <div style={{ background: '#000', border: '1px solid #1d5f8a', padding: '4px 10px', marginTop: '12px', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 25s linear infinite', color: '#38bdf8', fontFamily: 'var(--font-dot)', fontSize: '0.85rem' }}>
          【NEWS】Vercel Dynamic Live Weather 接続中！ ◆ 和歌山県美浜町（煙樹ヶ浜）の現在の天気・気温・『夏影』日の入り時刻をリアルタイム表示中 ◆ 1〜15日フレキシブル旅程＆神奈川発交通費自動計算システム稼働中 ◆
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
