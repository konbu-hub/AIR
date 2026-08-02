import React, { useState } from 'react';
import { Calendar, MapPin, Navigation, Clock, CheckCircle2, DollarSign, Compass } from 'lucide-react';
import { generateFlexiblePlan, ORIGIN_LOCATIONS, TRANSPORT_MODES } from '../data/planData';

export default function PilgrimagePlanner() {
  const [days, setDays] = useState(3);
  const [originKey, setOriginKey] = useState('kanagawa');
  const [transportMode, setTransportMode] = useState('shinkansen');

  const plan = generateFlexiblePlan(days, originKey, transportMode);
  const presetDays = [1, 2, 3, 4, 5, 7, 10, 15];

  // 聖地は複数ある（4大エリア定義）
  const SACRED_AREAS = [
    {
      id: 'gobo',
      name: '和歌山県御坊市 (西御坊駅・西川水路橋)',
      scene: 'アニメ第1話 08:24 / 人形使い往人が西川の水路橋を渡り、カラスのそらが見つめる始まりのシーン',
      bestTiming: '☀️ 午前〜正午 (陽光が刺す明るい時間帯)',
      keySpots: ['西御坊駅', '西川沿いの水路線路橋', '紀州鉄道キハ車両'],
      recDays: '1日〜'
    },
    {
      id: 'mihama',
      name: '和歌山県美浜町 (浜の瀬・吉原・煙樹ヶ浜・逢宕神社)',
      scene: 'アニメ第1話観鈴のジュース / 第1話通学路散歩 / AIR編ラスト「もう、ゴールしていいよね」/ 第5話夏祭り',
      bestTiming: '🌅 17:30〜18:48 (煙樹ヶ浜の茜色夕空・夏影タイム) ＆ 夜 (逢宕神社の石段)',
      keySpots: ['浜の瀬バス停', '武田商店横自販機', '吉原の道と柵', '煙樹ヶ浜の防波堤', '逢宕神社の53段の石段'],
      recDays: '1日〜'
    },
    {
      id: 'yura',
      name: '和歌山県由良町 (白崎海岸 / 白崎海洋公園)',
      scene: 'SUMMER編 アイキャッチ / 白い石灰岩の崖と羽を広げる神奈備命(神奈)の1000年神話',
      bestTiming: '☀️ 晴天の昼間 (白い崖と真っ青な海・青空のコントラスト)',
      keySpots: ['白崎海岸の白い石灰岩', '白崎海洋公園展望台'],
      recDays: '2日〜'
    },
    {
      id: 'amarube',
      name: '兵庫県香美町 (JR山陰本線 余部鉄橋)',
      scene: 'OP『鳥の詩』 / 往人が人形を抱えて旅する赤いトレッスル鉄橋と空',
      bestTiming: '🌤️ 昼間〜夕刻 (空の駅展望台からの広大な風景)',
      keySpots: ['余部鉄橋 空の駅', '余部海岸'],
      recDays: '4日〜 (広域巡礼ルート)'
    }
  ];

  return (
    <div className="modern-card modern-card-gold animate-fade-in">
      <div className="modern-section-title" style={{ color: '#ea580c' }}>
        <Navigation size={24} color="#fbbf24" />
        <span>【全国対応】 休みの期間 (1〜15日) から導く 複数エリア聖地巡礼プランナー</span>
      </div>

      {/* 1. 出発地 ＆ 日数選択 */}
      <div style={{ background: 'rgba(2, 132, 199, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '20px', borderRadius: '12px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <MapPin color="#fbbf24" size={20} />
          <label className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.15rem', fontWeight: 'bold' }}>
            1. あなたの出発地を選択:
          </label>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          {Object.values(ORIGIN_LOCATIONS).map((loc) => (
            <button
              key={loc.id}
              onClick={() => setOriginKey(loc.id)}
              className={`modern-btn ${originKey === loc.id ? 'modern-btn-active' : ''}`}
              style={{ padding: '8px 16px', fontSize: '0.9rem' }}
            >
              {loc.name}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
          <label className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.15rem', fontWeight: 'bold' }}>
            2. 今回確保できる休みの期間: <span style={{ color: '#38bdf8', fontSize: '1.6rem' }}>{days} 日間</span>
          </label>
          <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>スライダーで1日〜15日まで柔軟に指定</span>
        </div>

        <input
          type="range"
          min="1"
          max="15"
          value={days}
          onChange={(e) => setDays(parseInt(e.target.value))}
          className="modern-range"
          style={{ marginBottom: '16px' }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: '#38bdf8' }}>日数プリセット:</span>
          {presetDays.map((d) => (
            <button
              key={d}
              onClick={() => setDays(d)}
              className={`modern-btn ${days === d ? 'modern-btn-active' : ''}`}
              style={{ padding: '6px 12px', fontSize: '0.85rem' }}
            >
              {d}日コース
            </button>
          ))}
        </div>
      </div>

      {/* 2. 複数の聖地エリアと訪れるべきシーン・ベストタイミング一覧 */}
      <div style={{ marginBottom: '28px' }}>
        <h3 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.35rem', marginBottom: '14px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>
          ◆ AIRの聖地は複数存在する（全4大土地エリア ＆ 訪問ベストタイミング）
        </h3>

        <div className="grid-2col">
          {SACRED_AREAS.map((area) => (
            <div
              key={area.id}
              style={{
                background: 'rgba(8, 18, 37, 0.9)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '10px',
                padding: '18px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="font-mincho" style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  {area.name}
                </span>
                <span style={{ background: '#0284c7', color: '#fff', fontSize: '0.78rem', padding: '2px 8px', borderRadius: '10px' }}>
                  推奨巡礼: {area.recDays}
                </span>
              </div>

              <div style={{ fontSize: '0.88rem', color: '#e2e8f0', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>対応シーン:</strong> {area.scene}
              </div>

              <div style={{ background: 'rgba(234, 88, 12, 0.15)', borderLeft: '3px solid #ea580c', padding: '8px 12px', borderRadius: '0 6px 6px 0', fontSize: '0.85rem', color: '#fffdf8', marginBottom: '10px' }}>
                <strong>ベスト訪問タイミング:</strong> {area.bestTiming}
              </div>

              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                主要スポット: {area.keySpots.join(' / ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 選択日数に応じた『最適ツアータイムスケジュール ＆ 費用算出』 */}
      <div className="modern-card modern-card-gold" style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(12, 38, 71, 0.95) 0%, rgba(2, 132, 199, 0.4) 100%)', marginBottom: '0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
          <h3 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.5rem' }}>
            【{plan.origin.name}発】{days}日間の巡礼おすすめモデルコース
          </h3>
          <span style={{ background: '#ea580c', color: '#fff', padding: '4px 14px', borderRadius: '16px', fontSize: '0.88rem', fontWeight: 'bold' }}>
            概算費用目安: 約 {plan.estTotalCost.toLocaleString()} 円
          </span>
        </div>

        <p style={{ fontSize: '0.95rem', color: '#f8fafc', marginBottom: '20px', lineHeight: '1.7' }}>
          {plan.conceptText}
        </p>

        {/* 日別タイムスケジュール */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {plan.itinerary.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(8, 18, 37, 0.88)',
                borderLeft: '4px solid #38bdf8',
                borderRadius: '8px',
                padding: '16px 20px'
              }}
            >
              <div style={{ color: '#38bdf8', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '8px', fontFamily: 'var(--font-mincho)' }}>
                {item.title}
              </div>
              <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {item.events.map((evt, eIdx) => (
                  <li key={eIdx}>{evt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
