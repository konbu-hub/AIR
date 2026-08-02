import React from 'react';
import { Feather, Sun, Sparkles } from 'lucide-react';
import WeatherWidget from './WeatherWidget';

export default function Header() {
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

      {/* 『夏影』世界観モジュール (BGM再生機能は削除し、夏影の情景美を全面押し) */}
      <div className="retro-box retro-box-gold" style={{ padding: '16px', marginBottom: '16px', background: 'linear-gradient(135deg, rgba(12, 38, 71, 0.9) 0%, rgba(3, 16, 36, 0.95) 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Sun color="#fbbf24" size={28} className="glow-text" />
          <div>
            <div className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
              観鈴のテーマ 『夏影 -Natsukage-』 〜 永遠とノスタルジーが宿る夏の影 〜
            </div>
            <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginTop: '4px', lineHeight: '1.6' }}>
              アスファルトの向こうで揺れる陽炎、冷えた缶ジュース、17時過ぎのヒグラシの声、そして茜色に染まる煙樹ヶ浜。
              あの旋律が心の中で鳴り響くとき、私たちはいつでも観鈴と往人のいた「あの夏」に立ち返ることができる。
            </div>
          </div>
        </div>
      </div>

      {/* Vercel Live Serverless Weather Widget */}
      <WeatherWidget />

      {/* スクロールニューステロップ */}
      <div style={{ background: '#000', border: '1px solid #38bdf8', padding: '6px 12px', margin: '16px 0', overflow: 'hidden', whiteSpace: 'nowrap', borderRadius: '4px' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 25s linear infinite', color: '#fbbf24', fontFamily: 'var(--font-dot)', fontSize: '0.9rem' }}>
          【NEWS】西御坊発 聖地回収ルート ＆ 現場実写対比データ実装完了！ ◆ 『夏影』の情景が宿る和歌山県美浜町・煙樹ヶ浜・西川線路橋へ ◆ 舞い散る羽とともにあの夏へ ◆
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
