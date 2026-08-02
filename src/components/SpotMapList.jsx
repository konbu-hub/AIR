import React, { useState } from 'react';
import { Map, Navigation, CheckSquare, Square, ExternalLink } from 'lucide-react';
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
    <div className="retro-box animate-fade-in">
      <div className="retro-title-bar">
        <Map size={20} />
        <span>【STEP 3】 インタラクティブ聖地マップ ＆ カスタムチェックリスト</span>
      </div>

      <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '16px' }}>
        巡礼したいスポットを選択して、あなただけの「カスタムAIR聖地チェックリスト」を作成できます。
        各スポットの Google Maps リンクをクリックすると現地へのマップナビを直接起動できます。
      </p>

      {/* スポット選択チェックリスト */}
      <div className="classic-table" style={{ marginBottom: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#133966', color: '#7dd3fc', textTransform: 'uppercase' }}>
              <th style={{ padding: '10px', textAlign: 'center', width: '50px' }}>訪問</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>聖地スポット名</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>所在地・エリア</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>作中重要シーン</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>ナビ</th>
            </tr>
          </thead>
          <tbody>
            {PILGRIMAGE_SPOTS.map((spot) => {
              const isChecked = checkedSpotIds.includes(spot.id);
              const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' ' + spot.location)}`;
              return (
                <tr 
                  key={spot.id}
                  style={{ 
                    background: isChecked ? 'rgba(30, 88, 153, 0.3)' : 'rgba(6, 20, 46, 0.9)',
                    borderBottom: '1px solid #1d5f8a'
                  }}
                >
                  <td style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => toggleCheck(spot.id)}>
                    {isChecked ? <CheckSquare color="#fbbf24" size={20} /> : <Square color="#64748b" size={20} />}
                  </td>
                  <td style={{ color: isChecked ? '#fbbf24' : '#94a3b8', fontWeight: 'bold' }}>
                    {spot.name}
                  </td>
                  <td style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                    {spot.location}
                  </td>
                  <td style={{ fontSize: '0.85rem', color: '#7dd3fc' }}>
                    {spot.sceneName}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-btn"
                      style={{ padding: '2px 6px', fontSize: '0.75rem' }}
                    >
                      MAP <ExternalLink size={12} />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* サマリーカウンター */}
      <div style={{ background: 'rgba(6, 20, 46, 0.9)', border: '1px dashed #fbbf24', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <span className="font-dot" style={{ color: '#fbbf24' }}>
          選択中スポット: <strong style={{ fontSize: '1.2rem', color: '#38bdf8' }}>{checkedSpotIds.length}</strong> / {PILGRIMAGE_SPOTS.length} 箇所
        </span>
        <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
          {checkedSpotIds.length >= 6 
            ? '全主要スポット網羅！最低3〜4日間の旅程を強く推奨します。' 
            : '和歌山美浜町に絞った2〜3日間のコンパクト巡礼に最適です。'}
        </span>
      </div>
    </div>
  );
}
