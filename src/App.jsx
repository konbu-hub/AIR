import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SacredSpotComparisonViewer from './components/SacredSpotComparisonViewer';
import AnimeRealLinkViewer from './components/AnimeRealLinkViewer';
import AirDeepEncyclopedia from './components/AirDeepEncyclopedia';
import SpotMapList from './components/SpotMapList';
import { Camera, Layers, BookOpen, MapPin, Feather } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('gallery'); // デフォルトを「聖地全対比 ＆ Google Maps アサーション」に一元化！

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
        {/* AIR 澄み渡る真夏の青空 Header */}
        <Header />

        {/* 洗練された極上ナビゲーション */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px', justifyContent: 'center' }}>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`bright-btn ${activeTab === 'gallery' ? 'bright-btn-active' : ''}`}
            style={{ padding: '12px 24px', fontSize: '1.05rem' }}
          >
            <Camera size={20} /> 全国 AIR 聖地一覧 ＆ 作中対比 (Google Maps)
          </button>

          <button
            onClick={() => setActiveTab('link')}
            className={`bright-btn ${activeTab === 'link' ? 'bright-btn-active' : ''}`}
            style={{ padding: '12px 24px', fontSize: '1.05rem' }}
          >
            <Layers size={20} /> 現実 ＆ アニメ 透過オーバーレイ
          </button>

          <button
            onClick={() => setActiveTab('encyclopedia')}
            className={`bright-btn ${activeTab === 'encyclopedia' ? 'bright-btn-active' : ''}`}
            style={{ padding: '12px 24px', fontSize: '1.05rem' }}
          >
            <BookOpen size={20} /> AIR深遠トリビア ＆ ロケハン秘話
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`bright-btn ${activeTab === 'map' ? 'bright-btn-active' : ''}`}
            style={{ padding: '12px 24px', fontSize: '1.05rem' }}
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
