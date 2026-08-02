import React from 'react';
import { Sparkles, Sun } from 'lucide-react';
import WeatherWidget from './WeatherWidget';

export default function Header() {
  return (
    <header className="animate-fade-in" style={{ marginBottom: '32px' }}>
      {/* nudot.com.tw クラスの最先端ラグジュアリーディープネイビーヒーロー */}
      <div className="hero-banner-nudot">
        <img 
          src="/images/hero_sky.png" 
          alt="AIR どこまでも広がる澄み切った青空" 
          className="hero-bg-img-nudot"
        />

        <div className="hero-overlay-nudot">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
            <div>
              <div style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '6px 18px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(56, 189, 248, 0.3)', backdropFilter: 'blur(8px)', letterSpacing: '1.5px' }}>
                <Sun size={15} color="#fbbf24" /> AIR PILGRIMAGE ARCHIVE & CROSS-FADE SYSTEM
              </div>
              <h1 className="font-mincho" style={{ fontSize: '3.6rem', color: '#ffffff', letterSpacing: '10px', margin: '0 0 8px 0', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
                AIR - 1000th Summer -
              </h1>
              <p className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.25rem', letterSpacing: '1px', textShadow: '0 4px 15px rgba(0,0,0,0.8)' }}>
                当時の熱狂的な聖地情報 ✕ 最先端テクノロジー・レイアウトアサーション
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* リアルタイムコンディション */}
      <WeatherWidget />
    </header>
  );
}
