import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PilgrimagePlanner from './components/PilgrimagePlanner';
import AnimeRealLinkViewer from './components/AnimeRealLinkViewer';
import PilgrimageRouteGuide from './components/PilgrimageRouteGuide';
import NatsukageSpecialSection from './components/NatsukageSpecialSection';
import SceneViewer from './components/SceneViewer';
import SpotMapList from './components/SpotMapList';
import OtakuPassionEssay from './components/OtakuPassionEssay';
import AirDeepEncyclopedia from './components/AirDeepEncyclopedia';
import { Calendar, Sparkles, Camera, Map, Navigation, Flame, Feather, Layers, BookOpen, Compass } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('planner'); // デフォルトを巡礼プランナーに設定！

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
            onClick={() => setActiveTab('planner')}
            className={`modern-btn ${activeTab === 'planner' ? 'modern-btn-active' : ''}`}
            style={{ padding: '12px 22px', fontSize: '1.05rem', background: activeTab === 'planner' ? 'linear-gradient(180deg, #ea580c 0%, #9a3412 100%)' : 'linear-gradient(180deg, #0284c7 0%, #0369a1 100%)', borderColor: '#fbbf24' }}
          >
            <Compass size={20} color="#fbbf24" /> 【1〜15日対応】 聖地巡礼プランナー ＆ 複数土地ガイド
          </button>

          <button
            onClick={() => setActiveTab('link')}
            className={`modern-btn ${activeTab === 'link' ? 'modern-btn-active' : ''}`}
            style={{ padding: '12px 22px', fontSize: '1rem' }}
          >
            <Layers size={18} color="#fbbf24" /> 現実 ＆ アニメ 透過オーバーレイ
          </button>

          <button
            onClick={() => setActiveTab('route')}
            className={`modern-btn ${activeTab === 'route' ? 'modern-btn-active' : ''}`}
            style={{ padding: '12px 22px', fontSize: '1rem' }}
          >
            <Navigation size={18} color="#fbbf24" /> 西御坊発 聖地回収ルートナビ
          </button>

          <button
            onClick={() => setActiveTab('encyclopedia')}
            className={`modern-btn ${activeTab === 'encyclopedia' ? 'modern-btn-active' : ''}`}
            style={{ padding: '12px 22px', fontSize: '1rem' }}
          >
            <BookOpen size={18} color="#fbbf24" /> AIRトリビア ＆ 京アニロケハン秘話
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
            <Flame size={18} color="#fbbf24" /> AIR作品解析 ＆ 長文考察
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
          {activeTab === 'planner' && <PilgrimagePlanner />}
          {activeTab === 'link' && <AnimeRealLinkViewer />}
          {activeTab === 'route' && <PilgrimageRouteGuide />}
          {activeTab === 'encyclopedia' && <AirDeepEncyclopedia />}
          {activeTab === 'natsukage' && <NatsukageSpecialSection />}
          {activeTab === 'essay' && <OtakuPassionEssay />}
          {activeTab === 'scene' && <SceneViewer />}
          {activeTab === 'map' && <SpotMapList />}
        </main>

        {/* 静かで洗練された極小ミニマルフッター */}
        <footer style={{ textAlign: 'center', marginTop: '48px', paddingBottom: '32px', fontSize: '0.8rem', color: '#64748b' }}>
          <p>
            AIR Pilgrimage Portal & Location Cross-Fade System | © Key / VisualArt's
          </p>
        </footer>
      </div>
    </div>
  );
}
