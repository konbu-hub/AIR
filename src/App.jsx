import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AnimeRealLinkViewer from './components/AnimeRealLinkViewer';
import PilgrimageRouteGuide from './components/PilgrimageRouteGuide';
import PlanSelector from './components/PlanSelector';
import NatsukageSpecialSection from './components/NatsukageSpecialSection';
import SceneViewer from './components/SceneViewer';
import SpotMapList from './components/SpotMapList';
import OtakuPassionEssay from './components/OtakuPassionEssay';
import { Calendar, Sparkles, Camera, Map, Navigation, Flame, Feather, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('link'); // デフォルトを「あーあったわ！現実＆アニメ100%リンク」に設定！

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
      {/* 舞い散る美しい白い羽の粒子エフェクト */}
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

      <div className="main-container">
        {/* AIR世界観 ヒーロー ＆ トップバー Header */}
        <Header />

        {/* ナビゲーションメニュー */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px', justifyContent: 'center' }}>
          <button
            onClick={() => setActiveTab('link')}
            className={`modern-btn ${activeTab === 'link' ? 'modern-btn-active' : ''}`}
            style={{ padding: '12px 22px', fontSize: '1.05rem', background: activeTab === 'link' ? 'linear-gradient(180deg, #ea580c 0%, #9a3412 100%)' : 'linear-gradient(180deg, #9a3412 0%, #7c2d12 100%)', borderColor: '#fbbf24' }}
          >
            <Layers size={20} color="#fbbf24" /> 【あーーあったわ！！】 現実 ＆ アニメ 100% 透過リンク
          </button>

          <button
            onClick={() => setActiveTab('route')}
            className={`modern-btn ${activeTab === 'route' ? 'modern-btn-active' : ''}`}
            style={{ padding: '12px 22px', fontSize: '1rem' }}
          >
            <Navigation size={18} color="#fbbf24" /> 西御坊発 聖地回収ナビ ＆ カット対比
          </button>

          <button
            onClick={() => setActiveTab('natsukage')}
            className={`modern-btn ${activeTab === 'natsukage' ? 'modern-btn-active' : ''}`}
            style={{ padding: '12px 22px', fontSize: '1rem' }}
          >
            <Sparkles size={18} color="#fbbf24" /> 旋律『夏影』と夏の美学
          </button>

          <button
            onClick={() => setActiveTab('essay')}
            className={`modern-btn ${activeTab === 'essay' ? 'modern-btn-active' : ''}`}
            style={{ padding: '12px 22px', fontSize: '1rem' }}
          >
            <Flame size={18} color="#fbbf24" /> 当時オタクの熱狂長文考察
          </button>

          <button
            onClick={() => setActiveTab('plan')}
            className={`modern-btn ${activeTab === 'plan' ? 'modern-btn-active' : ''}`}
            style={{ padding: '12px 22px', fontSize: '1rem' }}
          >
            <Calendar size={18} /> 出発地 ＆ 日数アクセスシミュレーター
          </button>

          <button
            onClick={() => setActiveTab('scene')}
            className={`modern-btn ${activeTab === 'scene' ? 'modern-btn-active' : ''}`}
            style={{ padding: '12px 22px', fontSize: '1rem' }}
          >
            <Camera size={18} /> アニメ名シーン対比ギャラリー
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`modern-btn ${activeTab === 'map' ? 'modern-btn-active' : ''}`}
            style={{ padding: '12px 22px', fontSize: '1rem' }}
          >
            <Map size={18} /> Google Maps ナビ
          </button>
        </div>

        {/* メインコンテンツ表示エリア */}
        <main>
          {activeTab === 'link' && <AnimeRealLinkViewer />}
          {activeTab === 'route' && <PilgrimageRouteGuide />}
          {activeTab === 'natsukage' && <NatsukageSpecialSection />}
          {activeTab === 'essay' && <OtakuPassionEssay />}
          {activeTab === 'plan' && <PlanSelector />}
          {activeTab === 'scene' && <SceneViewer />}
          {activeTab === 'map' && <SpotMapList />}
        </main>

        {/* フッター */}
        <footer className="modern-card modern-card-gold" style={{ textAlign: 'center', marginTop: '40px', padding: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#fbbf24' }}>
            <Feather size={20} className="glow-text" />
            <span className="font-mincho" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffffff' }}>
              「人は過去の思い出だけで生きていくことはできない。でも、忘れてはいけない夏の記憶がある。」
            </span>
          </div>
          <p style={{ marginBottom: '8px', color: '#38bdf8', fontSize: '0.95rem' }}>
            AIR 聖地巡礼コンプリートガイド ＆ 現実 ＆ アニメ 100% 透過リンクアーキテクチャ
          </p>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Presented for All AIR Fans | Dedicated to Misuzu Kamio & Yukito Kunisaki | Key / VisualArt's
          </p>
        </footer>
      </div>
    </div>
  );
}
