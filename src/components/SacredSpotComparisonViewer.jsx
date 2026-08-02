import React, { useState } from 'react';
import { MapPin, ExternalLink, Search, Camera, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';
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
    <div className="bright-card animate-fade-in" style={{ padding: '28px' }}>
      <div className="bright-section-title">
        <Camera size={24} color="#0284c7" />
        <span>全国 AIR 聖地全スポット ＆ アニメ・ゲームシーン実写対比ギャラリー</span>
      </div>

      <p style={{ fontSize: '0.98rem', color: '#475569', marginBottom: '20px', lineHeight: '1.7' }}>
        作中アニメやゲームで描かれた名シーンと、実際のロケーション写真を厳密に対比。
        各スポットの【Google Maps で開く】ボタンから、現地へのアクセスをピンポイントで確認できます。
      </p>

      {/* 検索バー ＆ エリアフィルター */}
      <div style={{ background: '#f0f9ff', padding: '18px', borderRadius: '14px', border: '1px solid #bae6fd', marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '14px' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
            <Search size={18} color="#0284c7" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="聖地名、シーン、キーワードで絞り込み (例: バス停, 水路橋, 余部)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px 10px 38px',
                borderRadius: '20px',
                border: '1px solid #38bdf8',
                outline: 'none',
                fontSize: '0.92rem',
                boxShadow: '0 2px 6px rgba(2, 132, 199, 0.08)'
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Filter size={14} /> エリア絞り込み:
          </span>
          {areas.map((a) => (
            <button
              key={a.id}
              onClick={() => setSelectedArea(a.id)}
              className={`bright-btn ${selectedArea === a.id ? 'bright-btn-active' : ''}`}
              style={{ padding: '6px 14px', fontSize: '0.85rem' }}
            >
              {a.name}
            </button>
          ))}
        </div>
      </div>

      {/* 聖地カード一覧 */}
      <div className="grid-2col">
        {filteredSpots.map((spot) => {
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' ' + spot.location)}`;
          return (
            <div
              key={spot.id}
              style={{
                background: '#ffffff',
                border: '1px solid #bae6fd',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(2, 132, 199, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              {/* アニメ vs 実写 比較画像 */}
              <div style={{ position: 'relative', height: '230px', display: 'flex', background: '#0f172a' }}>
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={spot.animeCompareImg} 
                    alt="アニメ作中画面" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(2, 132, 199, 0.9)', color: '#ffffff', fontSize: '0.78rem', padding: '3px 10px', borderRadius: '12px', fontWeight: 'bold' }}>
                    作中アニメ・ゲームシーン
                  </span>
                </div>
                <div style={{ width: '2px', background: '#ffffff', zIndex: 2 }}></div>
                <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={spot.imageUrl} 
                    alt="現地リアル写真" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(15, 23, 42, 0.85)', color: '#38bdf8', fontSize: '0.78rem', padding: '3px 10px', borderRadius: '12px', fontWeight: 'bold' }}>
                    現地のリアル撮影アングル
                  </span>
                </div>
              </div>

              {/* カード詳細テキスト */}
              <div style={{ padding: '20px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ background: '#e0f2fe', color: '#0284c7', fontSize: '0.8rem', padding: '3px 10px', borderRadius: '12px', fontWeight: 'bold' }}>
                    {spot.area}
                  </span>
                  <span style={{ color: '#ea580c', fontSize: '0.82rem', fontWeight: 'bold' }}>
                    {spot.episodeTime}
                  </span>
                </div>

                <h3 className="font-mincho" style={{ color: '#0f172a', fontSize: '1.4rem', marginBottom: '8px' }}>
                  {spot.name}
                </h3>

                <div style={{ fontSize: '0.88rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                  <MapPin size={16} color="#0284c7" /> {spot.location}
                </div>

                {/* どんなアニメ・ゲームシーンだったか */}
                <div style={{ background: '#f8fafc', borderLeft: '4px solid #0284c7', padding: '10px 14px', borderRadius: '0 8px 8px 0', fontSize: '0.88rem', color: '#334155', marginBottom: '10px', lineHeight: '1.6' }}>
                  <strong style={{ color: '#0284c7' }}>作中シーン:</strong> {spot.sceneName}
                </div>

                {/* 現実はどんな感じか */}
                <div style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '16px', lineHeight: '1.6' }}>
                  <strong style={{ color: '#ea580c' }}>現地の構造対比:</strong> {spot.sceneContext}
                </div>
              </div>

              {/* アサーション (Google Maps ナビボタン) */}
              <div style={{ padding: '0 20px 20px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={() => setSelectedSpotModal(spot)}
                  style={{ background: 'none', border: 'none', color: '#0284c7', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  詳細比較解説を読む <ArrowRight size={14} />
                </button>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bright-btn bright-btn-orange"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
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
          <div className="modal-content-bright animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div style={{ borderBottom: '2px solid #e0f2fe', paddingBottom: '16px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ color: '#0284c7', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  【{selectedSpotModal.area}】 {selectedSpotModal.episodeTime}
                </span>
                <h2 className="font-mincho" style={{ color: '#0f172a', fontSize: '1.8rem', marginTop: '4px' }}>
                  {selectedSpotModal.name}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedSpotModal(null)}
                className="bright-btn"
                style={{ padding: '6px 12px', fontSize: '0.85rem' }}
              >
                閉じる
              </button>
            </div>

            {/* 比較画像拡大 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <img src={selectedSpotModal.animeCompareImg} alt="作中カット" style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px', border: '2px solid #0284c7' }} />
                <div style={{ textAlign: 'center', color: '#0284c7', fontSize: '0.88rem', marginTop: '6px', fontWeight: 'bold' }}>
                  アニメ・ゲーム作中カット ({selectedSpotModal.episodeTime})
                </div>
              </div>
              <div>
                <img src={selectedSpotModal.imageUrl} alt="現場写真" style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px', border: '2px solid #ea580c' }} />
                <div style={{ textAlign: 'center', color: '#ea580c', fontSize: '0.88rem', marginTop: '6px', fontWeight: 'bold' }}>
                  現地の実際の撮影アングル
                </div>
              </div>
            </div>

            {/* 詳細テキスト */}
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', lineHeight: '1.8', marginBottom: '20px' }}>
              <h4 style={{ color: '#0284c7', marginBottom: '10px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                ◆ どんなシーンで、現実はどんな感じか
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#334155', marginBottom: '12px' }}>
                <strong>【作中背景】:</strong> {selectedSpotModal.sceneName}
              </p>
              <p style={{ fontSize: '0.95rem', color: '#334155', marginBottom: '12px' }}>
                <strong>【現実の構造】:</strong> {selectedSpotModal.details}
              </p>
            </div>

            {/* Google Maps ボタン */}
            <div style={{ textAlign: 'center' }}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedSpotModal.name + ' ' + selectedSpotModal.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bright-btn bright-btn-orange"
                style={{ padding: '12px 24px', fontSize: '1rem' }}
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
