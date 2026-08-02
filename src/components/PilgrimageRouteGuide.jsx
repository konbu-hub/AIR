import React, { useState } from 'react';
import { Navigation, Footprints, Eye, Sparkles, MapPin } from 'lucide-react';
import { PILGRIMAGE_SPOTS } from '../data/pilgrimageData';

export default function PilgrimageRouteGuide() {
  const [selectedPointIndex, setSelectedPointIndex] = useState(0);
  const currentSpot = PILGRIMAGE_SPOTS[selectedPointIndex];

  return (
    <div className="modern-card modern-card-gold animate-fade-in">
      <div className="modern-section-title" style={{ color: '#ea580c' }}>
        <Navigation size={24} />
        <span>西御坊発 聖地回収ルート ＆ アニメカット実写対比ナビ</span>
      </div>

      <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '20px' }}>
        紀州鉄道「西御坊駅」から西川沿なに南下し、美浜町・煙樹ヶ浜へと向かう聖地回収ルートを案内。
        アニメの対応カットと現地のリアル構図を精密に手元で対比・確認できます。
      </p>

      {/* 回収ルートステップナビ */}
      <div style={{ background: 'rgba(2, 132, 199, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '16px', borderRadius: '10px', marginBottom: '24px' }}>
        <div style={{ color: '#fbbf24', fontSize: '1.05rem', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Footprints color="#f97316" size={20} /> 西御坊駅発 聖地回収ステップ (全5ポイント / 総距離 約3.5km)
        </div>

        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '6px' }}>
          {PILGRIMAGE_SPOTS.slice(0, 5).map((spot, idx) => (
            <button
              key={spot.id}
              onClick={() => setSelectedPointIndex(idx)}
              className={`modern-btn ${selectedPointIndex === idx ? 'modern-btn-active' : ''}`}
              style={{ padding: '8px 16px', fontSize: '0.88rem', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Pt.{idx + 1}: {spot.name.split('・')[0].split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* 選択中の聖地・対比カード */}
      <div className="modern-card" style={{ background: 'rgba(8, 18, 37, 0.9)', border: '1px solid #fbbf24', padding: '24px', marginBottom: '0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
          <div>
            <span style={{ background: '#ea580c', color: '#fff', padding: '4px 12px', borderRadius: '14px', fontSize: '0.85rem', fontWeight: '600', marginRight: '12px' }}>
              回収Pt. {selectedPointIndex + 1} / 5
            </span>
            <span style={{ color: '#38bdf8', fontSize: '0.95rem' }}>
              アニメ対応カット: <strong style={{ color: '#fbbf24' }}>{currentSpot.episodeTime}</strong>
            </span>
          </div>
          <div style={{ fontSize: '0.9rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={16} color="#fbbf24" /> {currentSpot.location}
          </div>
        </div>

        <h3 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.8rem', marginBottom: '14px' }}>
          {currentSpot.name}
        </h3>

        {/* シーン文脈バナー */}
        <div style={{ background: 'rgba(251, 191, 36, 0.12)', borderLeft: '4px solid #fbbf24', padding: '14px 18px', borderRadius: '0 8px 8px 0', marginBottom: '20px', color: '#ffffff', fontFamily: 'var(--font-mincho)', fontSize: '1.05rem', lineHeight: '1.7' }}>
          <Sparkles color="#ea580c" size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
          <strong>【情景と文脈】:</strong> {currentSpot.sceneContext}
        </div>

        {/* 現場写真 ＋ アニメ作中画面 PiP インセットオーバーレイ */}
        <div style={{ position: 'relative', width: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--accent-cyan)', marginBottom: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.5)' }}>
          <img 
            src={currentSpot.imageUrl} 
            alt="現場写真" 
            style={{ width: '100%', height: '420px', objectFit: 'cover' }}
          />

          <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(0,0,0,0.85)', color: '#38bdf8', padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', border: '1px solid #38bdf8', backdropFilter: 'blur(4px)' }}>
            リアル現場撮影アングル
          </div>

          <div style={{ 
            position: 'absolute', 
            bottom: '20px', 
            right: '20px', 
            width: '340px', 
            height: '200px', 
            border: '2px solid #fbbf24', 
            borderRadius: '8px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.9)', 
            overflow: 'hidden',
            background: '#000'
          }}>
            <img 
              src={currentSpot.animeCompareImg} 
              alt="アニメ作中カット" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,0.85)', color: '#fbbf24', padding: '4px 8px', fontSize: '0.8rem', textAlign: 'center' }}>
              アニメ作中カット ({currentSpot.episodeTime})
            </div>
          </div>
        </div>

        {/* 現場検証解説 */}
        <div className="modern-card-light" style={{ padding: '20px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
          <h4 style={{ color: '#0f172a', borderBottom: '2px solid #0284c7', paddingBottom: '6px', marginBottom: '14px', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700' }}>
            <Eye size={20} color="#ea580c" /> アニメ画角・景色の厳密対比検証
          </h4>
          <div style={{ fontSize: '0.98rem' }}>
            {currentSpot.details}
          </div>
        </div>
      </div>
    </div>
  );
}
