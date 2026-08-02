import React, { useState } from 'react';
import { Camera, MapPin, X, BookOpen, Volume2, Heart, Sparkles } from 'lucide-react';
import { PILGRIMAGE_SPOTS } from '../data/pilgrimageData';

export default function SceneViewer() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [filterArea, setFilterArea] = useState('ALL');

  const filteredSpots = filterArea === 'ALL' 
    ? PILGRIMAGE_SPOTS 
    : PILGRIMAGE_SPOTS.filter(s => s.area.includes(filterArea));

  return (
    <div className="retro-box animate-fade-in">
      <div className="retro-title-bar retro-title-bar-orange">
        <Camera size={20} />
        <span>【厳密アニメ名シーン再絵画】 カット対比 ＆ 「わかる！！！」考察データベース</span>
      </div>

      <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '16px' }}>
        作中アニメの画角・小道具（どろり濃いジュース、カラスのそら、西川の線路橋、夕焼けの防波堤等）を精密に再絵画したイラストと、現場写真を比較。
        オタクが「うわぁあ！このカットだ！」と直感的に理解できる名シーンデータベースです。
      </p>

      {/* エリアフィルター */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <button 
          onClick={() => setFilterArea('ALL')}
          className={`retro-btn ${filterArea === 'ALL' ? 'retro-btn-active' : ''}`}
        >
          全主要カット ({PILGRIMAGE_SPOTS.length})
        </button>
        <button 
          onClick={() => setFilterArea('御坊')}
          className={`retro-btn ${filterArea === '御坊' ? 'retro-btn-active' : ''}`}
        >
          和歌山・御坊〜美浜ルート
        </button>
        <button 
          onClick={() => setFilterArea('由良')}
          className={`retro-btn ${filterArea === '由良' ? 'retro-btn-active' : ''}`}
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
              background: 'rgba(6, 20, 46, 0.95)',
              border: '1px solid #1d5f8a',
              borderRadius: '4px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s, border-color 0.2s'
            }}
            className="spot-card"
          >
            {/* 比較画像プレビュー */}
            <div style={{ position: 'relative', height: '210px', display: 'flex' }}>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={spot.animeCompareImg} 
                  alt="アニメ名シーン再絵画" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '6px', left: '6px', background: 'rgba(0,0,0,0.85)', color: '#fbbf24', fontSize: '0.75rem', padding: '2px 6px', fontFamily: 'var(--font-dot)', border: '1px solid #fbbf24' }}>
                  【名シーン再絵画】
                </span>
              </div>
              <div style={{ width: '2px', background: '#fbbf24', zIndex: 2 }}></div>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={spot.imageUrl} 
                  alt="現場リアル写真" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '6px', right: '6px', background: 'rgba(0,0,0,0.85)', color: '#38bdf8', fontSize: '0.75rem', padding: '2px 6px', fontFamily: 'var(--font-dot)', border: '1px solid #38bdf8' }}>
                  【現場ロケーション】
                </span>
              </div>
            </div>

            {/* スポット基本情報 */}
            <div style={{ padding: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={16} color="#fbbf24" />
                  <span className="font-dot" style={{ color: '#fbbf24', fontSize: '0.82rem' }}>{spot.location}</span>
                </div>
                <span className="font-dot" style={{ color: '#ea580c', fontSize: '0.78rem', background: 'rgba(234,88,12,0.2)', padding: '1px 6px', border: '1px solid #ea580c' }}>
                  {spot.episodeTime}
                </span>
              </div>

              <h3 className="font-mincho" style={{ color: '#7dd3fc', fontSize: '1.25rem', marginBottom: '6px' }}>
                {spot.name}
              </h3>
              
              <div style={{ background: 'rgba(251, 191, 36, 0.12)', padding: '6px 10px', borderLeft: '3px solid #fbbf24', fontSize: '0.82rem', color: '#fffdf8', marginBottom: '10px' }}>
                <strong>オタクの感情:</strong> {spot.otakuCaption}
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className="retro-btn" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>
                  <BookOpen size={14} /> 「わかる！！！」詳細検証を読む
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
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#fbbf24', cursor: 'pointer' }}
            >
              <X size={28} />
            </button>

            <div style={{ borderBottom: '2px solid #fbbf24', paddingBottom: '12px', marginBottom: '16px' }}>
              <span className="font-dot" style={{ color: '#38bdf8', fontSize: '0.9rem' }}>
                【{selectedSpot.area}】 {selectedSpot.location} ({selectedSpot.episodeTime})
              </span>
              <h2 className="font-mincho glow-text" style={{ color: '#fbbf24', fontSize: '1.8rem', marginTop: '4px' }}>
                {selectedSpot.name}
              </h2>
            </div>

            {/* 比較画像拡大 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <div>
                <img src={selectedSpot.animeCompareImg} alt="名シーン再絵画" style={{ width: '100%', height: '240px', objectFit: 'cover', border: '2px solid #fbbf24' }} />
                <div className="font-dot" style={{ textAlign: 'center', color: '#fbbf24', fontSize: '0.85rem', marginTop: '6px' }}>
                  ▲ 厳密アニメ名シーン再絵画 ({selectedSpot.episodeTime})
                </div>
              </div>
              <div>
                <img src={selectedSpot.imageUrl} alt="現場写真" style={{ width: '100%', height: '240px', objectFit: 'cover', border: '2px solid #38bdf8' }} />
                <div className="font-dot" style={{ textAlign: 'center', color: '#38bdf8', fontSize: '0.85rem', marginTop: '6px' }}>
                  ▲ 現地の実際の撮影スポット構図
                </div>
              </div>
            </div>

            {/* オタク共感キャプション ＆ 名言 */}
            <div style={{ background: 'rgba(234, 88, 12, 0.2)', border: '1px solid #ea580c', padding: '14px', marginBottom: '20px', borderRadius: '4px' }}>
              <div style={{ color: '#fbbf24', fontFamily: 'var(--font-mincho)', fontSize: '1.15rem', marginBottom: '6px', fontWeight: 'bold' }}>
                {selectedSpot.otakuCaption}
              </div>
              <div style={{ color: '#fffdf8', fontStyle: 'italic', fontSize: '0.95rem' }}>
                作中名言: {selectedSpot.famousQuote}
              </div>
            </div>

            {/* 熱量長文考察本文 */}
            <div className="retro-box-light" style={{ padding: '18px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
              <h4 className="font-dot" style={{ color: '#1e293b', borderBottom: '2px solid #0b2545', paddingBottom: '4px', marginBottom: '12px', fontSize: '1.1rem' }}>
                ◆ AIR 聖地とアニメ作中画角の厳密対比検証
              </h4>
              <div style={{ fontSize: '0.95rem' }}>
                {selectedSpot.details}
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={() => setSelectedSpot(null)} className="retro-btn">
                閉じる (BACK TO DATABASE)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
