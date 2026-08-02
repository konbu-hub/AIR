import React, { useState } from 'react';
import { Camera, Eye, MapPin, Feather, X, BookOpen, Volume2 } from 'lucide-react';
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
        <span>【STEP 2】 アニメカット ＆ 現場シーン マッピング ＋ 長文考察データベース</span>
      </div>

      <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '16px' }}>
        アニメ版（京都アニメーション制作）および原作PCゲーム『AIR』の作中シーンと、和歌山県美浜町・由良町・兵庫余部等の現場写真を完全マッピング。
        クリックすると「どういう感情で観鈴と往人がこの場所にいたのか」を深掘りした熱量長文解説を閲覧できます。
      </p>

      {/* エリアフィルター */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <button 
          onClick={() => setFilterArea('ALL')}
          className={`retro-btn ${filterArea === 'ALL' ? 'retro-btn-active' : ''}`}
        >
          全エリア表示 ({PILGRIMAGE_SPOTS.length})
        </button>
        <button 
          onClick={() => setFilterArea('美浜')}
          className={`retro-btn ${filterArea === '美浜' ? 'retro-btn-active' : ''}`}
        >
          和歌山・美浜エリア
        </button>
        <button 
          onClick={() => setFilterArea('由良')}
          className={`retro-btn ${filterArea === '由良' ? 'retro-btn-active' : ''}`}
        >
          和歌山・由良エリア
        </button>
        <button 
          onClick={() => setFilterArea('兵庫')}
          className={`retro-btn ${filterArea === '兵庫' ? 'retro-btn-active' : ''}`}
        >
          兵庫・但馬エリア
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
            <div style={{ position: 'relative', height: '200px', display: 'flex' }}>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={spot.animeCompareImg} 
                  alt="アニメ/原作カットイメージ" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '6px', left: '6px', background: 'rgba(0,0,0,0.75)', color: '#fbbf24', fontSize: '0.75rem', padding: '2px 6px', fontFamily: 'var(--font-dot)' }}>
                  【作中シーン】
                </span>
              </div>
              <div style={{ width: '2px', background: '#fbbf24', zIndex: 2 }}></div>
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={spot.imageUrl} 
                  alt="現場リアル写真" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '6px', right: '6px', background: 'rgba(0,0,0,0.75)', color: '#38bdf8', fontSize: '0.75rem', padding: '2px 6px', fontFamily: 'var(--font-dot)' }}>
                  【現場ロケーション】
                </span>
              </div>
            </div>

            {/* スポット基本情報 */}
            <div style={{ padding: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <MapPin size={16} color="#fbbf24" />
                <span className="font-dot" style={{ color: '#fbbf24', fontSize: '0.8rem' }}>{spot.location}</span>
              </div>
              <h3 className="font-mincho" style={{ color: '#7dd3fc', fontSize: '1.2rem', marginBottom: '6px' }}>
                {spot.name}
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '10px' }}>
                {spot.sceneName}
              </p>
              
              <div style={{ background: 'rgba(19, 57, 102, 0.6)', padding: '6px 10px', borderLeft: '3px solid #f97316', fontSize: '0.8rem', color: '#f8fafc', fontStyle: 'italic' }}>
                {spot.famousQuote}
              </div>

              <div style={{ marginTop: '10px', textAlign: 'right' }}>
                <span className="retro-btn" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>
                  <BookOpen size={14} /> 深い長文考察を読む
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
                【{selectedSpot.area}】 {selectedSpot.location}
              </span>
              <h2 className="font-mincho glow-text" style={{ color: '#fbbf24', fontSize: '1.8rem', marginTop: '4px' }}>
                {selectedSpot.name}
              </h2>
            </div>

            {/* 比較画像拡大 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <div>
                <img src={selectedSpot.animeCompareImg} alt="作中カット" style={{ width: '100%', height: '220px', objectFit: 'cover', border: '1px solid #fbbf24' }} />
                <div className="font-dot" style={{ textAlign: 'center', color: '#fbbf24', fontSize: '0.85rem', marginTop: '4px' }}>
                  ▲ 作中カットイメージ ({selectedSpot.sceneName})
                </div>
              </div>
              <div>
                <img src={selectedSpot.imageUrl} alt="現場写真" style={{ width: '100%', height: '220px', objectFit: 'cover', border: '1px solid #38bdf8' }} />
                <div className="font-dot" style={{ textAlign: 'center', color: '#38bdf8', fontSize: '0.85rem', marginTop: '4px' }}>
                  ▲ 現地の実際の撮影スポット
                </div>
              </div>
            </div>

            {/* 名言＆BGM */}
            <div style={{ background: 'rgba(6, 20, 46, 0.9)', border: '1px solid #1e40af', padding: '12px', marginBottom: '20px' }}>
              <div style={{ color: '#fbbf24', fontFamily: 'var(--font-mincho)', fontSize: '1.1rem', marginBottom: '6px' }}>
                {selectedSpot.famousQuote}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#38bdf8' }}>
                <Volume2 size={16} /> 劇中使用曲・モチーフ音響: <strong>{selectedSpot.bgmName}</strong>
              </div>
            </div>

            {/* 熱量長文考察本文 */}
            <div className="retro-box-light" style={{ padding: '16px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
              <h4 className="font-dot" style={{ color: '#1e293b', borderBottom: '2px solid #0b2545', paddingBottom: '4px', marginBottom: '12px', fontSize: '1.1rem' }}>
                ◆ AIR オタクによる聖地構造 ＆ シーン長文考察
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

      <style>{`
        .spot-card:hover {
          transform: translateY(-3px);
          border-color: #fbbf24 !important;
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.3);
        }
      `}</style>
    </div>
  );
}
