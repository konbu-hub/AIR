import React, { useState } from 'react';
import { Calendar, Clock, DollarSign, Train, MapPin, Compass, ChevronRight, CheckCircle2 } from 'lucide-react';
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
    <div className="retro-box animate-fade-in">
      <div className="retro-title-bar">
        <Calendar size={20} />
        <span>【全国対応】 聖地巡礼 出発地 ＆ 日数 ＆ 交通最適化シミュレーター</span>
      </div>

      {/* 全国対応 出発地選択セクション */}
      <div style={{ background: 'rgba(3, 105, 161, 0.25)', border: '2px solid #38bdf8', padding: '16px', borderRadius: '4px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <MapPin color="#fbbf24" size={20} />
          <label className="font-dot" style={{ color: '#fbbf24', fontSize: '1.1rem', fontWeight: 'bold' }}>
            ■ あなたの出発地（お住まいの地域）を選択してください:
          </label>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {Object.values(ORIGIN_LOCATIONS).map((loc) => (
            <button
              key={loc.id}
              onClick={() => setOriginKey(loc.id)}
              className={`retro-btn ${originKey === loc.id ? 'retro-btn-active' : ''}`}
              style={{ padding: '8px 14px', fontSize: '0.9rem' }}
            >
              {loc.name}
            </button>
          ))}
        </div>

        {/* 選択中の出発地アクセス情報 */}
        <div style={{ background: 'rgba(6, 20, 46, 0.9)', padding: '12px', borderRadius: '4px', marginTop: '12px', borderLeft: '4px solid #fbbf24', fontSize: '0.88rem' }}>
          <div style={{ color: '#fbbf24', fontWeight: 'bold', marginBottom: '4px' }}>
            【{plan.origin.name} から和歌山県美浜町（煙樹ヶ浜）へのアクセス案内】
          </div>
          <div style={{ color: '#f8fafc', marginBottom: '4px' }}>
            🚄 推奨メインルート: <strong>{plan.origin.shinkansenRoute}</strong>
          </div>
          <div style={{ color: '#7dd3fc', fontSize: '0.82rem' }}>
            ✈️ 代替/飛行機ルート: {plan.origin.flightRoute} （片道所要時間: 約{plan.origin.oneWayHours}時間）
          </div>
        </div>
      </div>

      {/* 日数選択インターフェース (スライダー + プリセットボタン) */}
      <div style={{ background: 'rgba(6, 20, 46, 0.8)', padding: '16px', border: '1px solid #0284c7', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
          <label className="font-dot" style={{ color: '#fbbf24', fontSize: '1.1rem' }}>
            ■ 聖地巡礼の滞在日数を選択: <span style={{ color: '#38bdf8', fontSize: '1.5rem', fontWeight: 'bold' }}>{days} 日間</span>
          </label>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>※ 1日〜15日までスライダーで自由設定可能</span>
        </div>

        <input
          type="range"
          min="1"
          max="15"
          value={days}
          onChange={handleSliderChange}
          className="retro-range"
          style={{ marginBottom: '16px' }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          <span className="font-dot" style={{ fontSize: '0.85rem', color: '#7dd3fc' }}>クイック選択:</span>
          {presetDays.map((d) => (
            <button
              key={d}
              onClick={() => handlePresetClick(d)}
              className={`retro-btn ${days === d ? 'retro-btn-active' : ''}`}
              style={{ padding: '4px 10px', fontSize: '0.85rem' }}
            >
              {d}日コース
            </button>
          ))}
        </div>
      </div>

      {/* 交通スタイルの選択 */}
      <div style={{ marginBottom: '20px' }}>
        <h4 className="font-dot" style={{ color: '#7dd3fc', marginBottom: '10px' }}>
          ■ {plan.origin.name} 出発のおすすめ移動スタイルを選択:
        </h4>
        <div className="grid-3col">
          {Object.values(TRANSPORT_MODES).map((mode) => (
            <div
              key={mode.id}
              onClick={() => setTransportMode(mode.id)}
              style={{
                background: transportMode === mode.id ? 'rgba(3, 105, 161, 0.4)' : 'rgba(6, 20, 46, 0.85)',
                border: transportMode === mode.id ? '2px solid #fbbf24' : '1px solid #1d5f8a',
                padding: '12px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span className="font-dot" style={{ color: transportMode === mode.id ? '#fbbf24' : '#fff', fontWeight: 'bold' }}>
                  {mode.name}
                </span>
                {transportMode === mode.id && <CheckCircle2 color="#fbbf24" size={18} />}
              </div>
              <p style={{ fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '8px' }}>{mode.desc}</p>
              <div style={{ fontSize: '0.78rem', color: '#38bdf8' }}>
                対象: {mode.recommendedFor}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* シミュレーション結果＆概算費用カード */}
      <div style={{ background: 'linear-gradient(135deg, #0c2647 0%, #0369a1 100%)', border: '2px solid #f59e0b', padding: '18px', borderRadius: '4px', marginBottom: '20px' }}>
        <h3 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.4rem', marginBottom: '6px' }}>
          {plan.planTitle}
        </h3>
        <p style={{ fontSize: '0.92rem', color: '#fffdf8', marginBottom: '14px' }}>
          {plan.conceptText}
        </p>

        {/* 費用内訳テーブル */}
        <table className="classic-table">
          <thead>
            <tr>
              <th>項目</th>
              <th>条件・移動ルート</th>
              <th>概算費用 ({plan.origin.name}発・1名)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>往復交通費</td>
              <td>{plan.origin.name} ↔ 御坊/和歌山 往復</td>
              <td style={{ color: '#fbbf24', fontWeight: 'bold' }}>約 {plan.roundTripTransport.toLocaleString()} 円</td>
            </tr>
            <tr>
              <td>現地移動 (レンタカー/チャリ)</td>
              <td>{plan.numDays} 日間分</td>
              <td style={{ color: '#fbbf24', fontWeight: 'bold' }}>約 {plan.totalCarRent.toLocaleString()} 円</td>
            </tr>
            <tr>
              <td>宿泊費目安</td>
              <td>{Math.max(0, plan.numDays - 1)} 泊分 (温泉旅館/ホテル)</td>
              <td style={{ color: '#fbbf24', fontWeight: 'bold' }}>約 {plan.totalHotel.toLocaleString()} 円</td>
            </tr>
            <tr style={{ background: 'rgba(234, 88, 12, 0.7)' }}>
              <td style={{ color: '#fff', fontWeight: 'bold' }}>推定コスト合計</td>
              <td style={{ color: '#fffdf8' }}>最良パフォーマンス最適予算</td>
              <td style={{ color: '#fbbf24', fontSize: '1.25rem', fontWeight: 'bold' }}>
                約 {plan.estTotalCost.toLocaleString()} 円
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 詳細タイムスケジュール行程表 */}
      <div>
        <h4 className="font-dot" style={{ color: '#fbbf24', fontSize: '1.1rem', marginBottom: '12px' }}>
          ■ 【{plan.origin.name}発】{plan.numDays}日間の詳細タイムスケジュール
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {plan.itinerary.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(6, 20, 46, 0.9)',
                borderLeft: '4px solid #38bdf8',
                borderTop: '1px solid #0284c7',
                borderRight: '1px solid #0284c7',
                borderBottom: '1px solid #0284c7',
                padding: '14px 18px'
              }}
            >
              <div className="font-dot" style={{ color: '#7dd3fc', fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '8px' }}>
                {item.title}
              </div>
              <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
