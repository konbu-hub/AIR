import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import WeatherWidget from './WeatherWidget';

export default function Header() {
  const [timeOfDay, setTimeOfDay] = useState('day'); // 'day' (青空) | 'sunset' (夕暮れ/夏影タイム)

  return (
    <header className="animate-fade-in" style={{ marginBottom: '24px' }}>
      {/* AIR世界観 ヒーロービジュアル（青空・夕空切り替え可能な美しき空間演出） */}
      <div className="hero-banner" style={{ position: 'relative' }}>
        <img 
          src={timeOfDay === 'day' ? "/images/hero_sky.png" : "/images/sunset_beach.png"} 
          alt="AIR 夏の景色" 
          className="hero-bg-img"
          style={{ transition: 'opacity 1s ease-in-out' }}
        />

        <div className="hero-overlay">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(2, 132, 199, 0.65)', color: '#fff', padding: '4px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '12px', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Sparkles size={14} color="#fbbf24" /> 聖地巡礼ポータル
              </div>
              <h1 className="font-mincho" style={{ fontSize: '3.2rem', color: '#ffffff', letterSpacing: '8px', margin: '0 0 6px 0', textShadow: '0 4px 25px rgba(0,0,0,0.7)' }}>
                AIR - 1000th Summer -
              </h1>
            </div>

            {/* 昼 / 夕暮れ (夏影タイム) 切り替えスイッチ */}
            <div style={{ display: 'flex', gap: '8px', background: 'rgba(0,0,0,0.6)', padding: '6px', borderRadius: '24px', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <button
                onClick={() => setTimeOfDay('day')}
                style={{
                  background: timeOfDay === 'day' ? '#0284c7' : 'transparent',
                  color: '#fff',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: '16px',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
              >
                ☀️ 澄み渡る真夏の青空
              </button>
              <button
                onClick={() => setTimeOfDay('sunset')}
                style={{
                  background: timeOfDay === 'sunset' ? '#ea580c' : 'transparent',
                  color: '#fff',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: '16px',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
              >
                🌅 『夏影』の茜空 (黄昏時)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vercel Live Serverless Weather Widget */}
      <WeatherWidget />
    </header>
  );
}
