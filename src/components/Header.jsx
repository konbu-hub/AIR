import React from 'react';
import { Feather, Sun, Sparkles } from 'lucide-react';
import WeatherWidget from './WeatherWidget';

export default function Header() {
  return (
    <header className="animate-fade-in">
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
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(234, 88, 12, 0.85)', color: '#fff', padding: '4px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '12px', backdropFilter: 'blur(4px)' }}>
                <Sparkles size={14} /> 聖地巡礼コンプリートポータル
              </div>
              <h1 className="font-mincho" style={{ fontSize: '3rem', color: '#ffffff', letterSpacing: '6px', margin: '0 0 8px 0', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
                AIR - 1000th Summer -
              </h1>
              <p className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.25rem', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
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

      {/* 『夏影』世界観モジュール */}
      <div className="modern-card modern-card-gold" style={{ padding: '20px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Sun color="#fbbf24" size={32} />
          <div>
            <div className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.25rem', fontWeight: 'bold' }}>
              観鈴のテーマ 『夏影 -Natsukage-』 〜 永遠とノスタルジーが宿る夏の影 〜
            </div>
            <div style={{ fontSize: '0.92rem', color: '#cbd5e1', marginTop: '4px', lineHeight: '1.7' }}>
              アスファルトの向こうで揺れる陽炎、冷えた缶ジュース、17時過ぎのヒグラシの声、そして茜色に染まる煙樹ヶ浜。
              あの旋律が心の中で鳴り響くとき、私たちはいつでも観鈴と往人のいた「あの夏」に立ち返ることができる。
            </div>
          </div>
        </div>
      </div>

      {/* Vercel Live Serverless Weather Widget */}
      <WeatherWidget />
    </header>
  );
}
