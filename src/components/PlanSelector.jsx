import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle2, Navigation } from 'lucide-react';
import { generateFlexiblePlan, ORIGIN_LOCATIONS, TRANSPORT_MODES } from '../data/planData';

export default function PlanSelector({ onSelectDays }) {
  const [days, setDays] = useState(3);
  const [originKey, setOriginKey] = useState('kanagawa');
  const [transportMode, setTransportMode] = useState('shinkansen');

  const plan = generateFlexiblePlan(days, originKey, transportMode);
  const presetDays = [1, 2, 3, 4, 5, 7, 10, 15];

  const handleSliderChange = (e) => {
    const val = parseInt(e.target.value);
    setDays(val);
    if (onSelectDays) onSelectDays(val);
  };

  const handlePresetClick = (d) => {
    setDays(d);
    if (onSelectDays) onSelectDays(d);
  };

  return (
    <div className="modern-card animate-fade-in">
      <div className="modern-section-title">
        <Calendar size={24} />
        <span>全国対応 聖地巡礼 出発地 ＆ 日数アクセスシミュレーター</span>
      </div>

      {/* 全国対応 出発地選択 */}
      <div style={{ background: 'rgba(2, 132, 199, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '20px', borderRadius: '12px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <MapPin color="#fbbf24" size={20} />
          <label className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.15rem', fontWeight: 'bold' }}>
            あなたの出発地（お住まいの地域）を選択:
          </label>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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

        {/* 選択中のアクセス情報 */}
        <div style={{ background: 'rgba(8, 18, 37, 0.85)', padding: '14px', borderRadius: '8px', marginTop: '16px', borderLeft: '4px solid #fbbf24', fontSize: '0.92rem' }}>
          <div style={{ color: '#fbbf24', fontWeight: 'bold', marginBottom: '4px' }}>
            【{plan.origin.name} からの最適アクセスルート】
          </div>
          <div style={{ color: '#f8fafc', marginBottom: '4px' }}>
            🚄 メインルート: <strong>{plan.origin.shinkansenRoute}</strong>
          </div>
          <div style={{ color: '#38bdf8', fontSize: '0.85rem' }}>
            ✈️ 飛行機/車代替ルート: {plan.origin.flightRoute} (所要時間: 片道約{plan.origin.oneWayHours}時間)
          </div>
        </div>
      </div>

      {/* 日数選択インターフェース */}
      <div style={{ background: 'rgba(8, 18, 37, 0.85)', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
          <label className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.15rem' }}>
            聖地巡礼の滞在日数: <span style={{ color: '#38bdf8', fontSize: '1.6rem', fontWeight: 'bold' }}>{days} 日間</span>
          </label>
          <span style={{ fontSize: '0.88rem', color: '#94a3b8' }}>1日〜15日までスライダーで調整可能</span>
        </div>

        <input
          type="range"
          min="1"
          max="15"
          value={days}
          onChange={handleSliderChange}
          className="modern-range"
          style={{ marginBottom: '20px' }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.88rem', color: '#38bdf8' }}>クイックプリセット:</span>
          {presetDays.map((d) => (
            <button
              key={d}
              onClick={() => handlePresetClick(d)}
              className={`modern-btn ${days === d ? 'modern-btn-active' : ''}`}
              style={{ padding: '6px 12px', fontSize: '0.85rem' }}
            >
              {d}日コース
            </button>
          ))}
        </div>
      </div>

      {/* 交通スタイル */}
      <div style={{ marginBottom: '24px' }}>
        <h4 className="font-mincho" style={{ color: '#38bdf8', marginBottom: '12px', fontSize: '1.1rem' }}>
          {plan.origin.name} 出発のおすすめ移動スタイル:
        </h4>
        <div className="grid-3col">
          {Object.values(TRANSPORT_MODES).map((mode) => (
            <div
              key={mode.id}
              onClick={() => setTransportMode(mode.id)}
              style={{
                background: transportMode === mode.id ? 'rgba(2, 132, 199, 0.3)' : 'rgba(8, 18, 37, 0.85)',
                border: transportMode === mode.id ? '1px solid #fbbf24' : '1px solid rgba(56, 189, 248, 0.2)',
                padding: '16px',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.25s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: transportMode === mode.id ? '#fbbf24' : '#fff', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  {mode.name}
                </span>
                {transportMode === mode.id && <CheckCircle2 color="#fbbf24" size={20} />}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '10px' }}>{mode.desc}</p>
              <div style={{ fontSize: '0.8rem', color: '#38bdf8' }}>
                対象: {mode.recommendedFor}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 費用計算カード */}
      <div className="modern-card modern-card-gold" style={{ padding: '24px', marginBottom: '24px', background: 'linear-gradient(135deg, rgba(12, 38, 71, 0.95) 0%, rgba(2, 132, 199, 0.4) 100%)' }}>
        <h3 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.5rem', marginBottom: '8px' }}>
          {plan.planTitle}
        </h3>
        <p style={{ fontSize: '0.95rem', color: '#f8fafc', marginBottom: '18px' }}>
          {plan.conceptText}
        </p>

        {/* 費用内訳 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px' }}>
          <div style={{ background: 'rgba(8, 18, 37, 0.8)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>往復交通費概算</div>
            <div style={{ fontSize: '1.15rem', color: '#fbbf24', fontWeight: 'bold', marginTop: '2px' }}>約 {plan.roundTripTransport.toLocaleString()} 円</div>
          </div>
          <div style={{ background: 'rgba(8, 18, 37, 0.8)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>現地移動 (レンタカー代)</div>
            <div style={{ fontSize: '1.15rem', color: '#fbbf24', fontWeight: 'bold', marginTop: '2px' }}>約 {plan.totalCarRent.toLocaleString()} 円</div>
          </div>
          <div style={{ background: 'rgba(8, 18, 37, 0.8)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>宿泊費目安 ({Math.max(0, plan.numDays - 1)}泊)</div>
            <div style={{ fontSize: '1.15rem', color: '#fbbf24', fontWeight: 'bold', marginTop: '2px' }}>約 {plan.totalHotel.toLocaleString()} 円</div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(90deg, #ea580c 0%, #c2410c 100%)', padding: '14px 20px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <span className="font-mincho" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff' }}>推定総予算コスト合計</span>
          <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#fbbf24' }}>約 {plan.estTotalCost.toLocaleString()} 円</span>
        </div>
      </div>

      {/* 詳細行程 */}
      <div>
        <h4 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.15rem', marginBottom: '14px' }}>
          【{plan.origin.name}発】{plan.numDays}日間の詳細タイムスケジュール
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {plan.itinerary.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(8, 18, 37, 0.85)',
                borderLeft: '4px solid #38bdf8',
                border: '1px solid rgba(56, 189, 248, 0.2)',
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
