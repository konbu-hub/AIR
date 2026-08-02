import React, { useState, useEffect } from 'react';
import WeatherWidget from './WeatherWidget';

export default function Header() {
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = ['/images/hero_sky.png', '/images/sunset_beach.png'];

  // 自動で青空 ↔ 夕空が優しくクロスフェード遷移（無駄なボタン選択なし）
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="animate-fade-in" style={{ marginBottom: '24px' }}>
      <div className="hero-banner" style={{ position: 'relative' }}>
        <img 
          src={bgImages[bgIndex]} 
          alt="AIR の景色" 
          className="hero-bg-img"
          style={{ transition: 'opacity 1.5s ease-in-out' }}
        />

        <div className="hero-overlay">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
            <div>
              <div style={{ background: 'rgba(2, 132, 199, 0.7)', color: '#fff', padding: '4px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '10px', display: 'inline-block', backdropFilter: 'blur(4px)' }}>
                AIR 聖地巡礼コンプリートナビゲーター
              </div>
              <h1 className="font-mincho" style={{ fontSize: '3.2rem', color: '#ffffff', letterSpacing: '8px', margin: '0 0 6px 0', textShadow: '0 4px 25px rgba(0,0,0,0.7)' }}>
                AIR - 1000th Summer -
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* 時間表示を削除した無駄のないリアルタイムコンディション */}
      <WeatherWidget />
    </header>
  );
}
