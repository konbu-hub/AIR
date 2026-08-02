import React, { useState } from 'react';
import { Map, CheckSquare, Square, ExternalLink } from 'lucide-react';
import { PILGRIMAGE_SPOTS } from '../data/pilgrimageData';

export default function SpotMapList() {
  const [checkedSpotIds, setCheckedSpotIds] = useState(
    PILGRIMAGE_SPOTS.map(s => s.id)
  );

  const toggleCheck = (id) => {
    if (checkedSpotIds.includes(id)) {
      setCheckedSpotIds(checkedSpotIds.filter(item => item !== id));
    } else {
      setCheckedSpotIds([...checkedSpotIds, id]);
    }
  };

  return (
    <div className="modern-card animate-fade-in">
      <div className="modern-section-title">
        <Map size={24} />
        <span>全聖地スポット チェックリスト ＆ Google Maps ナビゲーション</span>
      </div>

      <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '20px' }}>
        巡礼したいスポットを選択して、あなただけの「カスタムAIR聖地チェックリスト」を作成できます。
        各スポットの Google Maps リンクをクリックすると現地のナビゲーションを直接起動できます。
      </p>

      {/* スポットカードリスト */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {PILGRIMAGE_SPOTS.map((spot) => {
          const isChecked = checkedSpotIds.includes(spot.id);
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' ' + spot.location)}`;
          return (
            <div 
              key={spot.id}
              style={{ 
                background: isChecked ? 'rgba(2, 132, 199, 0.2)' : 'rgba(8, 18, 37, 0.85)',
                border: isChecked ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '280px' }}>
                <div style={{ cursor: 'pointer' }} onClick={() => toggleCheck(spot.id)}>
                  {isChecked ? <CheckSquare color="#fbbf24" size={24} /> : <Square color="#64748b" size={24} />}
                </div>
                <div>
                  <div style={{ color: isChecked ? '#fbbf24' : '#94a3b8', fontWeight: 'bold', fontSize: '1.1rem', fontFamily: 'var(--font-mincho)' }}>
                    {spot.name}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '2px' }}>
                    📍 {spot.location}
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.88rem', color: '#38bdf8', flex: 1, minWidth: '220px' }}>
                {spot.sceneName}
              </div>

              <div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-btn"
                  style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                >
                  MAP ナビ <ExternalLink size={14} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* サマリー */}
      <div style={{ background: 'rgba(2, 132, 199, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '16px 20px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ color: '#fbbf24', fontSize: '1.05rem' }}>
          選択中スポット: <strong style={{ fontSize: '1.3rem', color: '#38bdf8' }}>{checkedSpotIds.length}</strong> / {PILGRIMAGE_SPOTS.length} 箇所
        </span>
        <span style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>
          {checkedSpotIds.length >= 6 
            ? '全主要スポット網羅！3〜4日間の滞在旅程を推奨します。' 
            : '美浜町に絞った2〜3日間のコンパクト巡礼に最適です。'}
        </span>
      </div>
    </div>
  );
}
