import React, { useState } from 'react';
import { Calendar, Clock, DollarSign, Train, Bus, Compass, ChevronRight, CheckCircle2 } from 'lucide-react';
import { generateFlexiblePlan, TRANSPORT_MODES } from '../data/planData';

export default function PlanSelector({ onSelectDays }) {
  const [days, setDays] = useState(3);
  const [transportMode, setTransportMode] = useState('shinkansen');

  const plan = generateFlexiblePlan(days, transportMode);

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
        <span>【STEP 1】 旅程日数 ＆ 交通手段 フレキシブル・シミュレーター</span>
      </div>

      {/* 日数選択インターフェース (スライダー + プリセットボタン) */}
      <div style={{ background: 'rgba(6, 20, 46, 0.7)', padding: '16px', border: '1px solid #1e40af', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
          <label className="font-dot" style={{ color: '#fbbf24', fontSize: '1.1rem' }}>
            ■ 聖地巡礼の滞在日数を選択: <span style={{ color: '#38bdf8', fontSize: '1.5rem', fontWeight: 'bold' }}>{days} 日間</span>
          </label>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>※ 1日〜15日までスライダーで自由に調整可能</span>
        </div>

        {/* インタラクティブスライダー */}
        <input
          type="range"
          min="1"
          max="15"
          value={days}
          onChange={handleSliderChange}
          className="retro-range"
          style={{ marginBottom: '16px' }}
        />

        {/* プリセットクイックボタン */}
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

      {/* 交通手段の比較・選択 */}
      <div style={{ marginBottom: '20px' }}>
        <h4 className="font-dot" style={{ color: '#7dd3fc', marginBottom: '10px' }}>
          ■ 神奈川（関東）出発のおすすめ交通スタイルを選択:
        </h4>
        <div className="grid-3col">
          {Object.values(TRANSPORT_MODES).map((mode) => (
            <div
              key={mode.id}
              onClick={() => setTransportMode(mode.id)}
              style={{
                background: transportMode === mode.id ? 'rgba(30, 88, 153, 0.4)' : 'rgba(6, 20, 46, 0.8)',
                border: transportMode === mode.id ? '2px solid #fbbf24' : '1px solid #1d5f8a',
                padding: '12px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span className="font-dot" style={{ color: transportMode === mode.id ? '#fbbf24' : '#fff', fontWeight: 'bold' }}>
                  {mode.name.split('[')[0]}
                </span>
                {transportMode === mode.id && <CheckCircle2 color="#fbbf24" size={18} />}
              </div>
              <p style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '8px' }}>{mode.desc}</p>
              <div style={{ fontSize: '0.75rem', color: '#38bdf8' }}>
                対象: {mode.recommendedFor}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* シミュレーション結果＆概算費用カード */}
      <div style={{ background: 'linear-gradient(135deg, #0b2545 0%, #133966 100%)', border: '1px solid #d97706', padding: '16px', borderRadius: '4px', marginBottom: '20px' }}>
        <h3 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.3rem', marginBottom: '6px' }}>
          {plan.planTitle}
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#f8fafc', marginBottom: '14px' }}>
          {plan.conceptText}
        </p>

        {/* 費用内訳テーブル */}
        <table className="classic-table">
          <thead>
            <tr>
              <th>項目</th>
              <th>条件・交通モード</th>
              <th>概算費用 (神奈川発・1名)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>往復交通費</td>
              <td>{plan.transport.name.split('[')[1]?.replace(']', '') || plan.transport.name}</td>
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
            <tr style={{ background: 'rgba(30, 88, 153, 0.8)' }}>
              <td style={{ color: '#fff', fontWeight: 'bold' }}>全体推定コスト合計</td>
              <td style={{ color: '#7dd3fc' }}>最良パフォーマンス費用</td>
              <td style={{ color: '#38bdf8', fontSize: '1.2rem', fontWeight: 'bold' }}>
                約 {plan.estTotalCost.toLocaleString()} 円
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 詳細タイムスケジュール行程表 */}
      <div>
        <h4 className="font-dot" style={{ color: '#fbbf24', fontSize: '1.1rem', marginBottom: '12px' }}>
          ■ {plan.numDays}日間の詳細タイムスケジュール ＆ おすすめ撮影タイミング
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {plan.itinerary.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(6, 20, 46, 0.85)',
                borderLeft: '4px solid #38bdf8',
                borderTop: '1px solid #1d5f8a',
                borderRight: '1px solid #1d5f8a',
                borderBottom: '1px solid #1d5f8a',
                padding: '12px 16px'
              }}
            >
              <div className="font-dot" style={{ color: '#7dd3fc', fontSize: '1rem', fontWeight: 'bold', marginBottom: '8px' }}>
                {item.title}
              </div>
              <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
