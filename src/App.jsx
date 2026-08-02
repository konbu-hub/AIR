import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SacredSpotComparisonViewer from './components/SacredSpotComparisonViewer';
import AnimeRealLinkViewer from './components/AnimeRealLinkViewer';
import AirDeepEncyclopedia from './components/AirDeepEncyclopedia';
import SpotMapList from './components/SpotMapList';
import { Camera, Layers, BookOpen, MapPin } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('gallery');

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
        {/* nudot.com.tw スタイルのディープネイビー Header */}
        <Header />

        {/* 極上の最先端ナビゲーション */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px', justifyContent: 'center' }}>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`nudot-btn ${activeTab === 'gallery' ? 'nudot-btn-active' : ''}`}
            style={{ padding: '12px 26px', fontSize: '1rem' }}
          >
            <Camera size={20} /> 全国のAIR聖地 ＆ 作中対比 (Google Maps)
          </button>

          <button
            onClick={() => setActiveTab('link')}
            className={`nudot-btn ${activeTab === 'link' ? 'nudot-btn-active' : ''}`}
            style={{ padding: '12px 26px', fontSize: '1rem' }}
          >
            <Layers size={20} /> 現実 ＆ アニメ 透過オーバーレイ
          </button>

          <button
            onClick={() => setActiveTab('encyclopedia')}
            className={`nudot-btn ${activeTab === 'encyclopedia' ? 'nudot-btn-active' : ''}`}
            style={{ padding: '12px 26px', fontSize: '1rem' }}
          >
            <BookOpen size={20} /> AIR深遠トリビア ＆ ロケハン秘話
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`nudot-btn ${activeTab === 'map' ? 'nudot-btn-active' : ''}`}
            style={{ padding: '12px 26px', fontSize: '1rem' }}
          >
            <MapPin size={20} /> Google Maps チェックリスト
          </button>
        </div>

        {/* メインコンテンツ */}
        <main>
          {activeTab === 'gallery' && <SacredSpotComparisonViewer />}
          {activeTab === 'link' && <AnimeRealLinkViewer />}
          {activeTab === 'encyclopedia' && <AirDeepEncyclopedia />}
          {activeTab === 'map' && <SpotMapList />}
        </main>

        {/* nudot.com.tw スタイルの静かで洗練されたフッター */}
        <footer style={{ textAlign: 'center', marginTop: '56px', paddingBottom: '36px', fontSize: '0.8rem', color: '#64748b', letterSpacing: '1px' }}>
          <p>
            AIR PILGRIMAGE PORTAL & LOCATION CROSS-FADE SYSTEM | © Key / VisualArt's
          </p>
        </footer>
      </div>
    </div>
  );
}
