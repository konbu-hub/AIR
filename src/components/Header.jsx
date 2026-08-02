import React from 'react';
import { Sparkles, Sun } from 'lucide-react';
import WeatherWidget from './WeatherWidget';

export default function Header() {
  return (
    <header className="animate-fade-in" style={{ marginBottom: '28px' }}>
      {/* 真夏の明るく透き通るヘッダービジュアル */}
      <div className="hero-banner-bright">
        <img 
          src="/images/hero_sky.png" 
          alt="AIR 澄み渡る真夏の青空と雲" 
          className="hero-bg-img-bright"
        />

        <div className="hero-overlay-bright">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
            <div>
              <div style={{ background: '#0284c7', color: '#ffffff', padding: '6px 16px', borderRadius: '20px', fontSize: '0.88rem', fontWeight: 'bold', marginBottom: '10px', display: 'inline-flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)' }}>
                <Sun size={16} color="#fbbf24" /> AIR 聖地ロケーション ＆ 作中対比ポータル
              </div>
              <h1 className="font-mincho" style={{ fontSize: '3.2rem', color: '#0f172a', letterSpacing: '8px', margin: '0 0 6px 0', textShadow: '0 2px 10px rgba(255,255,255,0.9)' }}>
                AIR - 1000th Summer -
              </h1>
              <p className="font-mincho" style={{ color: '#0369a1', fontSize: '1.2rem', textShadow: '0 1px 4px rgba(255,255,255,0.8)' }}>
                全国のAIR聖地ロケーション ＆ アニメ・ゲーム作中画面と現場対比アサーション
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* リアルタイム天候情報 */}
      <WeatherWidget />
    </header>
  );
}
