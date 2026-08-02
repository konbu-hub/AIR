import React, { useState } from 'react';
import { Navigation, Footprints, Eye, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { PILGRIMAGE_SPOTS } from '../data/pilgrimageData';

export default function PilgrimageRouteGuide() {
  const [selectedPointIndex, setSelectedPointIndex] = useState(0);
  const currentSpot = PILGRIMAGE_SPOTS[selectedPointIndex];

  return (
    <div className="retro-box retro-box-gold animate-fade-in">
      <div className="retro-title-bar retro-title-bar-orange">
        <Navigation size={22} />
        <span>【オタク感情直撃】 西御坊発 聖地回収ルート ＆ 名シーン精密再絵画比較</span>
      </div>

      {/* 「わかる！！！」オタク感情バナー */}
      <div style={{ background: 'rgba(234, 88, 12, 0.25)', border: '2px solid #ea580c', padding: '14px 18px', borderRadius: '4px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Sparkles color="#fbbf24" size={28} className="glow-text" />
        <div>
          <div className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.25rem', fontWeight: 'bold' }}>
            「うわぁぁあ！このアニメのあのカットだ！！わかる！！！」
          </div>
          <div style={{ fontSize: '0.88rem', color: '#fed7aa', marginTop: '2px' }}>
            似ているだけの適当な写真じゃない。アニメの対応カット・登場人物・小道具・画角を精密に再現した実写対比モジュールです。
          </div>
        </div>
      </div>

      {/* 回収ルートステップナビ */}
      <div style={{ background: 'rgba(6, 20, 46, 0.95)', border: '2px solid #38bdf8', padding: '16px', borderRadius: '4px', marginBottom: '20px' }}>
        <div className="font-dot" style={{ color: '#fbbf24', fontSize: '1.05rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Footprints color="#f97316" /> 西御坊駅発 聖地回収ステップ (全5ポイント / 総距離 約3.5km)
        </div>

        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
          {PILGRIMAGE_SPOTS.slice(0, 5).map((spot, idx) => (
            <button
              key={spot.id}
              onClick={() => setSelectedPointIndex(idx)}
              className={`retro-btn ${selectedPointIndex === idx ? 'retro-btn-active' : ''}`}
              style={{ padding: '8px 14px', fontSize: '0.88rem', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Pt.{idx + 1}: {spot.name.split('・')[0].split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* 選択中の聖地・「わかる！！！」オタク感情対比カード */}
      <div style={{ background: 'rgba(3, 16, 36, 0.95)', border: '2px solid #fbbf24', borderRadius: '6px', overflow: 'hidden', padding: '20px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '14px', borderBottom: '1px dashed #1d5f8a', paddingBottom: '10px' }}>
          <div>
            <span className="font-dot" style={{ background: '#ea580c', color: '#fff', padding: '3px 10px', borderRadius: '2px', fontSize: '0.85rem', marginRight: '10px' }}>
              回収Pt. {selectedPointIndex + 1} / 5
            </span>
            <span className="font-dot" style={{ color: '#38bdf8', fontSize: '0.95rem' }}>
              アニメ対応話数・カット: <strong style={{ color: '#fbbf24' }}>{currentSpot.episodeTime}</strong>
            </span>
          </div>
          <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
            📍 {currentSpot.location}
          </div>
        </div>

        <h3 className="font-mincho glow-text" style={{ color: '#fbbf24', fontSize: '1.7rem', marginBottom: '12px' }}>
          {currentSpot.name}
        </h3>

        {/* オタク共感キャプションバナー */}
        <div style={{ background: 'rgba(251, 191, 36, 0.15)', borderLeft: '4px solid #fbbf24', padding: '12px 16px', marginBottom: '16px', color: '#fffdf8', fontFamily: 'var(--font-mincho)', fontSize: '1.05rem', lineHeight: '1.7' }}>
          <Heart color="#ea580c" size={18} style={{ display: 'inline', marginRight: '6px' }} />
          <strong>オタクの感情共感メモ:</strong> {currentSpot.otakuCaption}
        </div>

        {/* 現場写真 ＋ アニメ作中画面 PiP (Picture-in-Picture) インセットオーバーレイ */}
        <div style={{ position: 'relative', width: '100%', borderRadius: '4px', overflow: 'hidden', border: '2px solid #38bdf8', marginBottom: '16px' }}>
          {/* メイン: 現地のリアル現場写真 */}
          <img 
            src={currentSpot.imageUrl} 
            alt="現場写真" 
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />

          <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.85)', color: '#38bdf8', padding: '4px 12px', fontSize: '0.85rem', fontFamily: 'var(--font-dot)', border: '1px solid #38bdf8' }}>
            【リアル現場写真】
          </div>

          {/* 右下インセット小窓: 再絵画されたアニメ作中画面 (YouTube検証スタイル) */}
          <div style={{ 
            position: 'absolute', 
            bottom: '16px', 
            right: '16px', 
            width: '340px', 
            height: '200px', 
            border: '3px solid #fbbf24', 
            borderRadius: '4px', 
            boxShadow: '0 0 25px rgba(0,0,0,0.95)', 
            overflow: 'hidden',
            background: '#000'
          }}>
            <img 
              src={currentSpot.animeCompareImg} 
              alt="アニメ作中画面再絵画" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,0.9)', color: '#fbbf24', padding: '3px 6px', fontSize: '0.8rem', textAlign: 'center', fontFamily: 'var(--font-dot)' }}>
              ▲ 精密再絵画カット ({currentSpot.episodeTime})
            </div>
          </div>
        </div>

        {/* 厳密な現場検証 ＆ レイアウト解説 */}
        <div className="retro-box-light" style={{ padding: '18px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
          <h4 className="font-dot" style={{ color: '#1e293b', borderBottom: '2px solid #0b2545', paddingBottom: '6px', marginBottom: '12px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Eye size={20} color="#ea580c" /> アニメ画角・小道具・風景の厳密一致検証
          </h4>
          <div style={{ fontSize: '0.95rem' }}>
            {currentSpot.details}
          </div>
        </div>
      </div>
    </div>
  );
}
