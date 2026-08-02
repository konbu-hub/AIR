import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PilgrimageRouteGuide from './components/PilgrimageRouteGuide';
import PlanSelector from './components/PlanSelector';
import NatsukageSpecialSection from './components/NatsukageSpecialSection';
import SceneViewer from './components/SceneViewer';
import SpotMapList from './components/SpotMapList';
import BBSCommentSection from './components/BBSCommentSection';
import { Calendar, Sparkles, Camera, Map, MessageSquare, Feather, Navigation } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('route'); // デフォルトを「厳密聖地回収ルート」に設定！

  const [feathers, setFeathers] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: Math.random() * 95,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 0.8 + Math.random() * 0.8
    }));
    setFeathers(items);
  }, []);

  return (
    <div>
      {/* 舞い散る白い羽の粒子エフェクト */}
      {feathers.map((f) => (
        <div
          key={f.id}
          className="feather-particle"
          style={{
            left: `${f.left}%`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            transform: `scale(${f.size})`
          }}
        >
          🪶
        </div>
      ))}

      <div className="retro-wrapper">
        {/* AIR世界観 ヒーロー ＆ トップバー Header */}
        <Header />

        {/* ナビゲーションメニュー */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px', justifyContent: 'center' }}>
          <button
            onClick={() => setActiveTab('route')}
            className={`retro-btn ${activeTab === 'route' ? 'retro-btn-active' : ''}`}
            style={{ padding: '12px 20px', fontSize: '1rem', background: activeTab === 'route' ? 'linear-gradient(180deg, #ea580c 0%, #9a3412 100%)' : 'linear-gradient(180deg, #0284c7 0%, #0369a1 100%)', borderColor: '#fbbf24' }}
          >
            <Navigation size={18} color="#fbbf24" /> 【厳密対比】 西御坊発 聖地回収ナビ ＆ アニメカット比較
          </button>

          <button
            onClick={() => setActiveTab('natsukage')}
            className={`retro-btn ${activeTab === 'natsukage' ? 'retro-btn-active' : ''}`}
            style={{ padding: '12px 20px', fontSize: '1rem' }}
          >
            <Sparkles size={18} color="#fbbf24" /> 【特別】 旋律『夏影』と夏の美学
          </button>

          <button
            onClick={() => setActiveTab('plan')}
            className={`retro-btn ${activeTab === 'plan' ? 'retro-btn-active' : ''}`}
            style={{ padding: '12px 20px', fontSize: '1rem' }}
          >
            <Calendar size={18} /> 【全国】 出発地 ＆ 日数シミュレーター (1〜15日)
          </button>

          <button
            onClick={() => setActiveTab('scene')}
            className={`retro-btn ${activeTab === 'scene' ? 'retro-btn-active' : ''}`}
            style={{ padding: '12px 20px', fontSize: '1rem' }}
          >
            <Camera size={18} /> 【比較】 アニメカット vs 現場写真一覧
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`retro-btn ${activeTab === 'map' ? 'retro-btn-active' : ''}`}
            style={{ padding: '12px 20px', fontSize: '1rem' }}
          >
            <Map size={18} /> Google Maps ナビ
          </button>

          <button
            onClick={() => setActiveTab('bbs')}
            className={`retro-btn ${activeTab === 'bbs' ? 'retro-btn-active' : ''}`}
            style={{ padding: '12px 20px', fontSize: '1rem' }}
          >
            <MessageSquare size={18} /> 巡礼ノート BBS
          </button>
        </div>

        {/* メインコンテンツ表示エリア */}
        <main>
          {activeTab === 'route' && <PilgrimageRouteGuide />}
          {activeTab === 'natsukage' && <NatsukageSpecialSection />}
          {activeTab === 'plan' && <PlanSelector />}
          {activeTab === 'scene' && <SceneViewer />}
          {activeTab === 'map' && <SpotMapList />}
          {activeTab === 'bbs' && <BBSCommentSection />}
        </main>

        {/* レトロファンサイトフッター */}
        <footer className="retro-box retro-box-gold" style={{ textAlign: 'center', marginTop: '36px', padding: '24px', fontSize: '0.9rem', color: '#94a3b8' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#fbbf24' }}>
            <Feather size={20} className="glow-text" />
            <span className="font-mincho" style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#fffdf8' }}>
              「人は過去の思い出だけで生きていくことはできない。でも、忘れてはいけない夏の記憶がある。」
            </span>
          </div>
          <p style={{ marginBottom: '8px', color: '#38bdf8' }}>
            AIR 聖地巡礼コンプリートガイド ＆ 西御坊〜美浜町 厳密実写対比ナビゲーション
          </p>
          <p className="font-dot" style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Presented for All AIR Fans | Dedicated to Misuzu Kamio & Yukito Kunisaki | Since 2000-2026
          </p>
        </footer>
      </div>
    </div>
  );
}
