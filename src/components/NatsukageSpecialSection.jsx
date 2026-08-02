import React, { useState } from 'react';
import { Sun, Sunset, Moon, Sparkles, Feather } from 'lucide-react';

export default function NatsukageSpecialSection() {
  const [hour, setHour] = useState(17.5); // 15:00 〜 19:30

  // 時間経過に応じたグラデーション・光の背景定義
  const getGradientByHour = (h) => {
    if (h < 16.5) {
      return {
        bg: 'linear-gradient(180deg, #0284c7 0%, #38bdf8 60%, #e0f2fe 100%)',
        textColor: '#0c4a6e',
        timeLabel: '15:00 - カンカンと照りつける眩しすぎる強光波',
        desc: '武田商店横の自販機に陽炎が揺れ、遠くでヒグラシが鳴き始める真夏の午後。',
        img: '/images/misuzu_sea.png'
      };
    } else if (h < 18.0) {
      return {
        bg: 'linear-gradient(180deg, #0369a1 0%, #f97316 65%, #fef08a 100%)',
        textColor: '#7c2d12',
        timeLabel: '17:30 - 『夏影』黄金色の斜光と長い影',
        desc: '防波堤に影が長く伸び、潮風が心地よい冷たさを帯びていく黄昏の始まり。',
        img: '/images/scene_yoshihara_walk_link.png'
      };
    } else if (h < 19.0) {
      return {
        bg: 'linear-gradient(180deg, #431407 0%, #c2410c 45%, #ea580c 70%, #fbbf24 100%)',
        textColor: '#fffdf8',
        timeLabel: '18:45 - 煙樹ヶ浜の茜色と紫紺のグラデーション (日没)',
        desc: '紀伊水道の水平線に夕陽が沈み、空と海が深い茜色に包まれる、最も美しい夏影の時間。',
        img: '/images/sunset_beach.png'
      };
    } else {
      return {
        bg: 'linear-gradient(180deg, #030712 0%, #0c2647 60%, #1e1b4b 100%)',
        textColor: '#e0e7ff',
        timeLabel: '19:30 - 逢宕神社を照らす星空と静寂',
        desc: '静まり返る波音の中、頭上に満天の星と一番星が輝く夜の始まり。',
        img: '/images/atago_shrine_real.png'
      };
    }
  };

  const currentTheme = getGradientByHour(hour);

  return (
    <div className="modern-card modern-card-gold animate-fade-in">
      <div className="modern-section-title" style={{ color: '#fbbf24' }}>
        <Sparkles size={24} color="#fbbf24" />
        <span>【光と影の移ろい】 夏影 -Natsukage- 時間軸グラデーション</span>
      </div>

      <div 
        style={{ 
          background: currentTheme.bg, 
          borderRadius: '14px', 
          padding: '28px', 
          color: '#ffffff',
          transition: 'background 0.8s ease-in-out',
          boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
          <div>
            <span style={{ background: 'rgba(0,0,0,0.6)', color: '#fbbf24', padding: '4px 14px', borderRadius: '20px', fontSize: '0.88rem', fontWeight: 'bold', backdropFilter: 'blur(4px)' }}>
              時刻: {Math.floor(hour)}:{(hour % 1 * 60).toString().padStart(2, '0')}
            </span>
            <h3 className="font-mincho" style={{ fontSize: '1.6rem', marginTop: '6px', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              {currentTheme.timeLabel}
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {hour < 17 ? <Sun size={28} color="#fef08a" /> : hour < 19 ? <Sunset size={28} color="#fbbf24" /> : <Moon size={28} color="#e0e7ff" />}
          </div>
        </div>

        {/* 景色のビジュアル表示 */}
        <div style={{ position: 'relative', height: '320px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.3)', marginBottom: '20px' }}>
          <img 
            src={currentTheme.img} 
            alt="夏影の情景" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.6s ease' }}
          />
          <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)', padding: '16px 20px', color: '#fff' }}>
            <p className="font-mincho" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              {currentTheme.desc}
            </p>
          </div>
        </div>

        {/* 時間調整スライダー */}
        <div style={{ background: 'rgba(0,0,0,0.5)', padding: '16px 20px', borderRadius: '10px', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#fbbf24', marginBottom: '6px', fontWeight: 'bold' }}>
            <span>15:00 (真昼)</span>
            <span>17:30 (黄昏の始まり)</span>
            <span>18:45 (日没・夏影)</span>
            <span>19:30 (夜)</span>
          </div>
          <input
            type="range"
            min="15"
            max="19.5"
            step="0.1"
            value={hour}
            onChange={(e) => setHour(parseFloat(e.target.value))}
            className="modern-range"
          />
        </div>
      </div>
    </div>
  );
}
