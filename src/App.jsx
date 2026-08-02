import React, { useState } from 'react';
import Header from './components/Header';
import PlanSelector from './components/PlanSelector';
import NatsukageSpecialSection from './components/NatsukageSpecialSection';
import SceneViewer from './components/SceneViewer';
import SpotMapList from './components/SpotMapList';
import BBSCommentSection from './components/BBSCommentSection';
import { Calendar, Sparkles, Camera, Map, MessageSquare, Feather } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('plan');

  return (
    <div className="retro-wrapper">
      {/* 2000年代オタクファンサイト風ヘッダー */}
      <Header />

      {/* ナビゲーションメニュー */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px', justifyContent: 'center' }}>
        <button
          onClick={() => setActiveTab('plan')}
          className={`retro-btn ${activeTab === 'plan' ? 'retro-btn-active' : ''}`}
          style={{ padding: '10px 16px', fontSize: '0.95rem' }}
        >
          <Calendar size={16} /> 【1】 日数＆交通シミュレーター (1〜15日)
        </button>

        <button
          onClick={() => setActiveTab('natsukage')}
          className={`retro-btn ${activeTab === 'natsukage' ? 'retro-btn-active' : ''}`}
          style={{ padding: '10px 16px', fontSize: '0.95rem', background: activeTab === 'natsukage' ? 'linear-gradient(180deg, #ea580c 0%, #9a3412 100%)' : 'linear-gradient(180deg, #9a3412 0%, #7c2d12 100%)', borderColor: '#fbbf24' }}
        >
          <Sparkles size={16} color="#fbbf24" /> 【特別】 旋律『夏影』と夏の美学
        </button>

        <button
          onClick={() => setActiveTab('scene')}
          className={`retro-btn ${activeTab === 'scene' ? 'retro-btn-active' : ''}`}
          style={{ padding: '10px 16px', fontSize: '0.95rem' }}
        >
          <Camera size={16} /> 【2】 シーン比較 ＆ 熱量長文考察
        </button>

        <button
          onClick={() => setActiveTab('map')}
          className={`retro-btn ${activeTab === 'map' ? 'retro-btn-active' : ''}`}
          style={{ padding: '10px 16px', fontSize: '0.95rem' }}
        >
          <Map size={16} /> 【3】 聖地マップ ＆ カスタムナビ
        </button>

        <button
          onClick={() => setActiveTab('bbs')}
          className={`retro-btn ${activeTab === 'bbs' ? 'retro-btn-active' : ''}`}
          style={{ padding: '10px 16px', fontSize: '0.95rem' }}
        >
          <MessageSquare size={16} /> 【4】 巡礼ノート BBS
        </button>
      </div>

      {/* メインコンテンツ表示エリア */}
      <main>
        {activeTab === 'plan' && <PlanSelector />}
        {activeTab === 'natsukage' && <NatsukageSpecialSection />}
        {activeTab === 'scene' && <SceneViewer />}
        {activeTab === 'map' && <SpotMapList />}
        {activeTab === 'bbs' && <BBSCommentSection />}
      </main>

      {/* レトロファンサイトフッター */}
      <footer className="retro-box" style={{ textAlign: 'center', marginTop: '30px', padding: '20px', fontSize: '0.85rem', color: '#94a3b8' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', marginBottom: '8px', color: '#fbbf24' }}>
          <Feather size={16} />
          <span className="font-mincho" style={{ fontSize: '1rem', fontWeight: 'bold' }}>
            「人は過去の思い出だけで生きていくことはできない。でも、忘れてはいけない夏の記憶がある。」
          </span>
        </div>
        <p style={{ marginBottom: '6px' }}>
          AIR 聖地巡礼コンプリートガイド ＆ 1000th Summer Flexible Planning System
        </p>
        <p className="font-dot" style={{ fontSize: '0.75rem', color: '#64748b' }}>
          Presented for All AIR Fans | Dedicated to Misuzu Kamio & Yukito Kunisaki | Since 2000-2026
        </p>
      </footer>
    </div>
  );
}
