import React, { useState } from 'react';
import { Camera, MapPin, X, BookOpen, Heart } from 'lucide-react';
import { PILGRIMAGE_SPOTS } from '../data/pilgrimageData';

export default function SceneViewer() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [filterArea, setFilterArea] = useState('ALL');

  const filteredSpots = filterArea === 'ALL' 
    ? PILGRIMAGE_SPOTS 
    : PILGRIMAGE_SPOTS.filter(s => s.area.includes(filterArea));

  return (
    <div className="modern-card animate-fade-in">
      <div className="modern-section-title">
        <Camera size={24} />
        <span>アニメ名シーン再現カット ＆ 実写対比ギャラリー</span>
      </div>

      <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '20px' }}>
        作中アニメの画角・小道具（どろり濃いジュース、カラスのそら、西川の線路橋、夕焼けの防波堤等）を精密に再現したイラストと現場写真を比較。
      </p>

      {/* エリアフィルター */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
        <button 
          onClick={() => setFilterArea('ALL')}
          className={`modern-btn ${filterArea === 'ALL' ? 'modern-btn-active' : ''}`}
        >
          全主要カット ({PILGRIMAGE_SPOTS.length})
        </button>
        <button 
          onClick={() => setFilterArea('御坊')}
          className={`modern-btn ${filterArea === '御坊' ? 'modern-btn-active' : ''}`}
        >
          和歌山・御坊〜美浜ルート
        </button>
        <button 
          onClick={() => setFilterArea('由良')}
          className={`modern-btn ${filterArea === '由良' ? 'modern-btn-active' : ''}`}
        >
          和歌山・由良エリア
        </button>
      </div>

      {/* 聖地スポットカードグリッド */}
      <div className="grid-2col">
        {filteredSpots.map((spot) => (
          <div
            key={spot.id}
            onClick={() => setSelectedSpot(spot)}
            style={{
              background: 'rgba(8, 18, 37, 0.85)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '12px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s'
            }}
            className="spot-card"
          >
            {/* 比較画像プレビュー */}
            <div style={{ position: 'relative', height: '220px', display: 'flex' }}>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={spot.animeCompareImg} 
                  alt="アニメ名シーン再絵画" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.85)', color: '#fbbf24', fontSize: '0.78rem', padding: '3px 8px', borderRadius: '4px' }}>
                  アニメカット
                </span>
              </div>
              <div style={{ width: '2px', background: '#fbbf24', zIndex: 2 }}></div>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={spot.imageUrl} 
                  alt="現場リアル写真" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.85)', color: '#38bdf8', fontSize: '0.78rem', padding: '3px 8px', borderRadius: '4px' }}>
                  現場写真
                </span>
              </div>
            </div>

            {/* スポット基本情報 */}
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={16} color="#fbbf24" />
                  <span style={{ color: '#fbbf24', fontSize: '0.85rem' }}>{spot.location}</span>
                </div>
                <span style={{ color: '#ea580c', fontSize: '0.8rem', background: 'rgba(234,88,12,0.2)', padding: '2px 8px', borderRadius: '12px' }}>
                  {spot.episodeTime}
                </span>
              </div>

              <h3 className="font-mincho" style={{ color: '#7dd3fc', fontSize: '1.3rem', marginBottom: '8px' }}>
                {spot.name}
              </h3>
              
              <div style={{ background: 'rgba(251, 191, 36, 0.1)', padding: '8px 12px', borderRadius: '6px', borderLeft: '3px solid #fbbf24', fontSize: '0.85rem', color: '#fffdf8', marginBottom: '12px' }}>
                {spot.otakuCaption}
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className="modern-btn" style={{ padding: '6px 12px', fontSize: '0.82rem' }}>
                  <BookOpen size={14} /> 詳細対比検証を閲覧
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 詳細長文考察モーダル */}
      {selectedSpot && (
        <div className="modal-overlay" onClick={() => setSelectedSpot(null)}>
          <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedSpot(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#fbbf24', cursor: 'pointer' }}
            >
              <X size={28} />
            </button>

            <div style={{ borderBottom: '1px solid var(--glass-border-gold)', paddingBottom: '16px', marginBottom: '20px' }}>
              <span style={{ color: '#38bdf8', fontSize: '0.9rem' }}>
                【{selectedSpot.area}】 {selectedSpot.location} ({selectedSpot.episodeTime})
              </span>
              <h2 className="font-mincho" style={{ color: '#fbbf24', fontSize: '2rem', marginTop: '4px' }}>
                {selectedSpot.name}
              </h2>
            </div>

            {/* 比較画像拡大 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div>
                <img src={selectedSpot.animeCompareImg} alt="名シーン再絵画" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #fbbf24' }} />
                <div style={{ textAlign: 'center', color: '#fbbf24', fontSize: '0.88rem', marginTop: '8px' }}>
                  アニメ名シーンカット ({selectedSpot.episodeTime})
                </div>
              </div>
              <div>
                <img src={selectedSpot.imageUrl} alt="現場写真" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #38bdf8' }} />
                <div style={{ textAlign: 'center', color: '#38bdf8', fontSize: '0.88rem', marginTop: '8px' }}>
                  現場のリアル撮影構図
                </div>
              </div>
            </div>

            {/* キャプション ＆ 名言 */}
            <div style={{ background: 'rgba(234, 88, 12, 0.15)', border: '1px solid #ea580c', padding: '16px', marginBottom: '20px', borderRadius: '8px' }}>
              <div style={{ color: '#fbbf24', fontFamily: 'var(--font-mincho)', fontSize: '1.2rem', marginBottom: '6px', fontWeight: 'bold' }}>
                {selectedSpot.otakuCaption}
              </div>
              <div style={{ color: '#fffdf8', fontStyle: 'italic', fontSize: '0.98rem' }}>
                作中名言: {selectedSpot.famousQuote}
              </div>
            </div>

            {/* 考察本文 */}
            <div className="modern-card-light" style={{ padding: '20px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
              <h4 style={{ color: '#0f172a', borderBottom: '2px solid #0284c7', paddingBottom: '6px', marginBottom: '14px', fontSize: '1.15rem' }}>
                AIR 聖地とアニメ作中画角の厳密対比検証
              </h4>
              <div style={{ fontSize: '0.98rem' }}>
                {selectedSpot.details}
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button onClick={() => setSelectedSpot(null)} className="modern-btn">
                閉じる (CLOSE)
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .spot-card:hover {
          transform: translateY(-4px);
          border-color: #fbbf24 !important;
          box-shadow: 0 12px 25px rgba(251, 191, 36, 0.25);
        }
      `}</style>
    </div>
  );
}
