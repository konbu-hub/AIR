import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PlanSelector from './components/PlanSelector';
import NatsukageSpecialSection from './components/NatsukageSpecialSection';
import SceneViewer from './components/SceneViewer';
import SpotMapList from './components/SpotMapList';
import BBSCommentSection from './components/BBSCommentSection';
import { Calendar, Sparkles, Camera, Map, MessageSquare, Feather } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('natsukage'); // デフォルトを「夏影」特集に設定してパッション全開！

  // 背景を舞い散る白い羽根の粒子エフェクト
  const [feathers, setFeathers] = useState([]);

  useEffect(() => {
    // 12個の羽パーティクルをランダムな位置・速度・サイズで自動生成
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
      {/* 舞い散る白い羽のパーティクルエフェクト */}
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
            onClick={() => setActiveTab('natsukage')}
            className={`retro-btn ${activeTab === 'natsukage' ? 'retro-btn-active' : ''}`}
            style={{ padding: '12px 20px', fontSize: '1rem', background: activeTab === 'natsukage' ? 'linear-gradient(180deg, #ea580c 0%, #9a3412 100%)' : 'linear-gradient(180deg, #9a3412 0%, #7c2d12 100%)', borderColor: '#fbbf24' }}
          >
            <Sparkles size={18} color="#fbbf24" /> 【特別】 旋律『夏影』と夏の美学
          </button>

          <button
            onClick={() => setActiveTab('plan')}
            className={`retro-btn ${activeTab === 'plan' ? 'retro-btn-active' : ''}`}
            style={{ padding: '12px 20px', fontSize: '1rem' }}
          >
            <Calendar size={18} /> 【1】 日数＆交通シミュレーター (1〜15日)
          </button>

          <button
            onClick={() => setActiveTab('scene')}
            className={`retro-btn ${activeTab === 'scene' ? 'retro-btn-active' : ''}`}
            style={{ padding: '12px 20px', fontSize: '1rem' }}
          >
            <Camera size={18} /> 【2】 シーン比較 ＆ 熱量長文考察
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`retro-btn ${activeTab === 'map' ? 'retro-btn-active' : ''}`}
            style={{ padding: '12px 20px', fontSize: '1rem' }}
          >
            <Map size={18} /> 【3】 聖地マップ ＆ カスタムナビ
          </button>

          <button
            onClick={() => setActiveTab('bbs')}
            className={`retro-btn ${activeTab === 'bbs' ? 'retro-btn-active' : ''}`}
            style={{ padding: '12px 20px', fontSize: '1rem' }}
          >
            <MessageSquare size={18} /> 【4】 巡礼ノート BBS
          </button>
        </div>

        {/* メインコンテンツ表示エリア */}
        <main>
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
            AIR 聖地巡礼コンプリートガイド ＆ 1000th Summer Flexible Planning System
          </p>
          <p className="font-dot" style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Presented for All AIR Fans | Dedicated to Misuzu Kamio & Yukito Kunisaki | Since 2000-2026
          </p>
        </footer>
      </div>
    </div>
  );
}
