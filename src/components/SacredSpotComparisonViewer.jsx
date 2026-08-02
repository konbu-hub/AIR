import React, { useState } from 'react';
import { MapPin, ExternalLink, Search, Camera, Filter, ArrowRight } from 'lucide-react';
import { PILGRIMAGE_SPOTS } from '../data/pilgrimageData';

export default function SacredSpotComparisonViewer() {
  const [selectedArea, setSelectedArea] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpotModal, setSelectedSpotModal] = useState(null);

  // フィルタリング処理
  const filteredSpots = PILGRIMAGE_SPOTS.filter(spot => {
    const matchesArea = selectedArea === 'ALL' || spot.area.includes(selectedArea);
    const matchesQuery = searchQuery === '' || 
      spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      spot.sceneName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesArea && matchesQuery;
  });

  const areas = [
    { id: 'ALL', name: '全国全聖地' },
    { id: '御坊', name: '和歌山・御坊' },
    { id: '美浜', name: '和歌山・美浜町' },
    { id: '由良', name: '和歌山・由良町' },
    { id: '余部', name: '兵庫・余部' },
    { id: '小田原', name: '神奈川・小田原国府津' },
    { id: '香川', name: '四国・香川琴平' },
  ];

  return (
    <div className="nudot-card animate-fade-in">
      <div className="nudot-section-title">
        <Camera size={26} color="#38bdf8" />
        <span>全国 AIR 聖地全スポット ＆ アニメ作中対比 ＆ Google Maps アサーション</span>
      </div>

      <p style={{ fontSize: '0.98rem', color: '#cbd5e1', marginBottom: '24px', lineHeight: '1.7' }}>
        作中アニメやゲームで描かれた名シーンと、実際のロケーション写真を厳密に対比。
        各スポットの【Google Maps で開く】ボタンから、現場へピンポイントで直接アサーション＆アクセスできます。
      </p>

      {/* 検索バー ＆ エリアフィルター */}
      <div style={{ background: 'rgba(12, 28, 64, 0.6)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(56, 189, 248, 0.25)', marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
            <Search size={18} color="#38bdf8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="聖地名、シーン、キーワードで検索 (例: バス停, 水路橋, 余部, 国府津)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                borderRadius: '30px',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                background: 'rgba(5, 12, 30, 0.8)',
                color: '#ffffff',
                outline: 'none',
                fontSize: '0.92rem'
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', letterSpacing: '0.5px' }}>
            <Filter size={14} /> エリア絞り込み:
          </span>
          {areas.map((a) => (
            <button
              key={a.id}
              onClick={() => setSelectedArea(a.id)}
              className={`nudot-btn ${selectedArea === a.id ? 'nudot-btn-active' : ''}`}
              style={{ padding: '6px 16px', fontSize: '0.85rem' }}
            >
              {a.name}
            </button>
          ))}
        </div>
      </div>

      {/* 聖地カード一覧 (nudot.com.tw スタイル) */}
      <div className="grid-2col">
        {filteredSpots.map((spot) => {
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' ' + spot.location)}`;
          return (
            <div
              key={spot.id}
              style={{
                background: 'rgba(10, 22, 52, 0.85)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              {/* アニメ vs 実写 比較画像 */}
              <div style={{ position: 'relative', height: '240px', display: 'flex', background: '#000' }}>
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={spot.animeCompareImg} 
                    alt="アニメ作中画面" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.85)', color: '#fbbf24', fontSize: '0.78rem', padding: '3px 10px', borderRadius: '6px', border: '1px solid #fbbf24' }}>
                    作中アニメカット
                  </span>
                </div>
                <div style={{ width: '2px', background: '#fbbf24', zIndex: 2 }}></div>
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={spot.imageUrl} 
                    alt="現地リアル写真" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.85)', color: '#38bdf8', fontSize: '0.78rem', padding: '3px 10px', borderRadius: '6px', border: '1px solid #38bdf8' }}>
                    現地の撮影アングル
                  </span>
                </div>
              </div>

              {/* カード詳細テキスト */}
              <div style={{ padding: '22px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ background: 'rgba(2, 132, 199, 0.25)', color: '#38bdf8', fontSize: '0.8rem', padding: '3px 12px', borderRadius: '20px', border: '1px solid rgba(56, 189, 248, 0.3)', fontWeight: 'bold' }}>
                    {spot.area}
                  </span>
                  <span style={{ color: '#fbbf24', fontSize: '0.82rem', fontWeight: 'bold' }}>
                    {spot.episodeTime}
                  </span>
                </div>

                <h3 className="font-mincho" style={{ color: '#ffffff', fontSize: '1.45rem', marginBottom: '8px' }}>
                  {spot.name}
                </h3>

                <div style={{ fontSize: '0.88rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
                  <MapPin size={16} color="#fbbf24" /> {spot.location}
                </div>

                {/* どんなアニメ・ゲームシーンだったか */}
                <div style={{ background: 'rgba(2, 132, 199, 0.15)', borderLeft: '4px solid #38bdf8', padding: '10px 14px', borderRadius: '0 8px 8px 0', fontSize: '0.88rem', color: '#f8fafc', marginBottom: '12px', lineHeight: '1.6' }}>
                  <strong style={{ color: '#38bdf8' }}>作中シーン:</strong> {spot.sceneName}
                </div>

                {/* 現実はどんな感じか */}
                <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '18px', lineHeight: '1.6' }}>
                  <strong style={{ color: '#fbbf24' }}>構造の対比:</strong> {spot.sceneContext}
                </div>
              </div>

              {/* アサーション (Google Maps ナビボタン) */}
              <div style={{ padding: '0 22px 22px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={() => setSelectedSpotModal(spot)}
                  style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  詳細検証を読む <ArrowRight size={14} />
                </button>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nudot-btn nudot-btn-gold"
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                >
                  <MapPin size={16} /> Google Maps で開く <ExternalLink size={14} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* 詳細検証モーダル */}
      {selectedSpotModal && (
        <div className="modal-overlay" onClick={() => setSelectedSpotModal(null)}>
          <div className="modal-content-nudot animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div style={{ borderBottom: '1px solid rgba(56, 189, 248, 0.3)', paddingBottom: '16px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  【{selectedSpotModal.area}】 {selectedSpotModal.episodeTime}
                </span>
                <h2 className="font-mincho" style={{ color: '#fbbf24', fontSize: '2rem', marginTop: '4px' }}>
                  {selectedSpotModal.name}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedSpotModal(null)}
                className="nudot-btn"
                style={{ padding: '6px 14px', fontSize: '0.85rem' }}
              >
                閉じる
              </button>
            </div>

            {/* 比較画像拡大 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div>
                <img src={selectedSpotModal.animeCompareImg} alt="作中カット" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px', border: '1px solid #fbbf24' }} />
                <div style={{ textAlign: 'center', color: '#fbbf24', fontSize: '0.88rem', marginTop: '6px', fontWeight: 'bold' }}>
                  アニメ作中カット ({selectedSpotModal.episodeTime})
                </div>
              </div>
              <div>
                <img src={selectedSpotModal.imageUrl} alt="現場写真" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px', border: '1px solid #38bdf8' }} />
                <div style={{ textAlign: 'center', color: '#38bdf8', fontSize: '0.88rem', marginTop: '6px', fontWeight: 'bold' }}>
                  現場のアングル
                </div>
              </div>
            </div>

            {/* 詳細テキスト */}
            <div style={{ background: 'rgba(5, 12, 30, 0.8)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(56, 189, 248, 0.25)', lineHeight: '1.8', marginBottom: '24px' }}>
              <h4 style={{ color: '#38bdf8', marginBottom: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                ◆ どんなシーンで、現実はどんな感じか
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#f8fafc', marginBottom: '12px' }}>
                <strong>【作中背景】:</strong> {selectedSpotModal.sceneName}
              </p>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '12px' }}>
                <strong>【現実の構造】:</strong> {selectedSpotModal.details}
              </p>
            </div>

            {/* Google Maps ボタン */}
            <div style={{ textAlign: 'center' }}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedSpotModal.name + ' ' + selectedSpotModal.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="nudot-btn nudot-btn-gold"
                style={{ padding: '12px 28px', fontSize: '1rem' }}
              >
                <MapPin size={18} /> この場所を Google Maps で確認・ナビ開始 <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
