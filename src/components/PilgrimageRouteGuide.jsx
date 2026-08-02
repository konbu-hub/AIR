import React, { useState } from 'react';
import { MapPin, Navigation, Footprints, Clock, CheckCircle2, ChevronRight, Eye, Camera } from 'lucide-react';
import { PILGRIMAGE_SPOTS } from '../data/pilgrimageData';

export default function PilgrimageRouteGuide() {
  const [selectedPointIndex, setSelectedPointIndex] = useState(0);
  const currentSpot = PILGRIMAGE_SPOTS[selectedPointIndex];

  return (
    <div className="retro-box retro-box-gold animate-fade-in">
      <div className="retro-title-bar retro-title-bar-orange">
        <Navigation size={22} />
        <span>【厳密実写対比】 御坊〜美浜町 徒歩・レンタカー 聖地巡礼回収ルートマップ</span>
      </div>

      <p style={{ fontSize: '0.92rem', color: '#cbd5e1', marginBottom: '16px' }}>
        紀州鉄道「西御坊駅」から西川沿いに南下し、美浜町・煙樹ヶ浜へと向かう**実際の聖地回収ルート**を完全ナビゲート。
        YouTubeや現地取材で確認された「アニメの対応カット」と「実際の現場アングル」を厳密に比較できます。
      </p>

      {/* ルート進行ナビゲーションステップ */}
      <div style={{ background: 'rgba(6, 20, 46, 0.95)', border: '2px solid #38bdf8', padding: '16px', borderRadius: '4px', marginBottom: '20px' }}>
        <div className="font-dot" style={{ color: '#fbbf24', fontSize: '1.05rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Footprints color="#f97316" /> 【徒歩・自転車推奨】 西御坊駅発 聖地回収ステップ (全5ポイント / 総距離 約3.5km)
        </div>

        {/* 順番ステップボタン */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
          {PILGRIMAGE_SPOTS.slice(0, 5).map((spot, idx) => (
            <button
              key={spot.id}
              onClick={() => setSelectedPointIndex(idx)}
              className={`retro-btn ${selectedPointIndex === idx ? 'retro-btn-active' : ''}`}
              style={{ padding: '8px 12px', fontSize: '0.85rem', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Pt.{idx + 1}: {spot.name.split('・')[0].split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* 選択された回収ポイントの「現場写真 vs アニメ画面 PiP 比較ビューア」 (スクショ2再現) */}
      <div style={{ background: 'rgba(3, 16, 36, 0.95)', border: '2px solid #fbbf24', borderRadius: '6px', overflow: 'hidden', padding: '20px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '14px', borderBottom: '1px dashed #1d5f8a', paddingBottom: '10px' }}>
          <div>
            <span className="font-dot" style={{ background: '#ea580c', color: '#fff', padding: '2px 8px', borderRadius: '2px', fontSize: '0.8rem', marginRight: '8px' }}>
              回収ポイント {selectedPointIndex + 1} / 5
            </span>
            <span className="font-dot" style={{ color: '#38bdf8', fontSize: '0.9rem' }}>
              アニメ対応タイムスタンプ: <strong style={{ color: '#fbbf24' }}>{currentSpot.episodeTime}</strong>
            </span>
          </div>
          <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            📍 {currentSpot.location}
          </div>
        </div>

        <h3 className="font-mincho glow-text" style={{ color: '#fbbf24', fontSize: '1.6rem', marginBottom: '12px' }}>
          {currentSpot.name}
        </h3>

        {/* 現場写真 ＋ アニメ画面 PiP (Picture-in-Picture) インセットオーバーレイ */}
        <div style={{ position: 'relative', width: '100%', minHeight: '360px', borderRadius: '4px', overflow: 'hidden', border: '2px solid #38bdf8', marginBottom: '16px' }}>
          {/* メイン: 現地のリアル現場写真 */}
          <img 
            src={currentSpot.imageUrl} 
            alt="現場写真" 
            style={{ width: '100%', height: '380px', objectFit: 'cover' }}
          />

          <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.8)', color: '#38bdf8', padding: '4px 10px', fontSize: '0.85rem', fontFamily: 'var(--font-dot)', border: '1px solid #38bdf8' }}>
            【リアル現場撮影構図】
          </div>

          {/* 右下インセット小窓: アニメ作中画面比較 (YouTube検証スタイル) */}
          <div style={{ 
            position: 'absolute', 
            bottom: '16px', 
            right: '16px', 
            width: '320px', 
            height: '190px', 
            border: '3px solid #ffffff', 
            borderRadius: '4px', 
            boxShadow: '0 0 20px rgba(0,0,0,0.9)', 
            overflow: 'hidden',
            background: '#000'
          }}>
            <img 
              src={currentSpot.animeCompareImg} 
              alt="アニメ作中画面" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,0.85)', color: '#fbbf24', padding: '2px 6px', fontSize: '0.75rem', textAlign: 'center', fontFamily: 'var(--font-dot)' }}>
              ▲ アニメ作中カット ({currentSpot.episodeTime})
            </div>
          </div>
        </div>

        {/* 厳密な現場検証 ＆ レイアウト解説 */}
        <div className="retro-box-light" style={{ padding: '16px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
          <h4 className="font-dot" style={{ color: '#1e293b', borderBottom: '2px solid #0b2545', paddingBottom: '4px', marginBottom: '10px', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Eye size={18} color="#ea580c" /> アニメ画角と実際の現場の完全対比検証
          </h4>
          <div style={{ fontSize: '0.92rem' }}>
            {currentSpot.details}
          </div>
        </div>
      </div>
    </div>
  );
}
