import React, { useState } from 'react';
import { Calendar, MapPin, Navigation, Clock, CheckCircle2, DollarSign, Compass, Sun, Moon, Sunset } from 'lucide-react';
import { generateFlexiblePlan, ORIGIN_LOCATIONS, TRANSPORT_MODES } from '../data/planData';

export default function PilgrimagePlanner() {
  const [days, setDays] = useState(3);
  const [originKey, setOriginKey] = useState('kanagawa');
  const [transportMode, setTransportMode] = useState('shinkansen');
  const [selectedAreaId, setSelectedAreaId] = useState('ALL');

  const plan = generateFlexiblePlan(days, originKey, transportMode);
  const presetDays = [1, 2, 3, 4, 5, 7, 10, 15];

  // AIR 全国全6大聖地エリアの完全網羅定義
  const SACRED_AREAS = [
    {
      id: 'mihama',
      region: '和歌山エリア [主舞台]',
      name: '和歌山県日高郡美浜町・御坊市・由良町',
      scene: 'アニメ第1話〜12話・AIR編全編 / 観鈴と往人の日常、通学路、どろり濃いジュース、夏祭り花火、煙樹ヶ浜「もう、ゴールしていいよね」、白崎海岸の1000年神話',
      bestTiming: '🌅 17:30〜18:48 (煙樹ヶ浜の茜色夕空・夏影タイム) ＆ 夜 (逢宕神社の石段)',
      keySpots: [
        '紀州鉄道 西御坊駅・西川水路線路橋 (第1話 08:24)',
        '浜の瀬バス停・武田商店横自販機 (第1話 11:15)',
        '美浜町吉原の道と錆びたガードフェンス (第1話 14:30)',
        '煙樹ヶ浜の松林と防波堤 (AIR編クライマックス)',
        '逢宕神社の53段の石段 (第5話 夏祭り花火)',
        '白崎海岸の白い石灰岩 (SUMMER編アイキャッチ)'
      ],
      recDays: '1日〜3日'
    },
    {
      id: 'amarube',
      region: '兵庫エリア [旅立ち]',
      name: '兵庫県美方郡香美町 (JR山陰本線 余部鉄橋)',
      scene: 'OP『鳥の詩』 / 人形使い往人が背負い袋と人形を抱えて歩く高所41メートルの赤色トレッスル鉄橋と雄大な日本海',
      bestTiming: '🌤️ 11:00〜16:00 (空の駅展望台からの広大な青空と海)',
      keySpots: [
        'JR余部鉄橋 (空の駅展望施設)',
        '余部海岸と赤い鋼橋脚跡'
      ],
      recDays: '2日〜'
    },
    {
      id: 'kanagawa',
      region: '神奈川エリア [出会い]',
      name: '神奈川県小田原市・国府津 (JR東海道本線 国府津海岸)',
      scene: '原作DREAM編プロローグ / 海が見える歩道橋とホームで「ガオ…」と呟く観鈴と往人が出会った始まりの場所',
      bestTiming: '☀️ 09:00〜15:00 (相模湾が一望できる晴天の昼)',
      keySpots: [
        'JR国府津駅ホーム',
        '国府津海岸へ続く歩道橋',
        '小田原城下町 (往人の街頭人形劇)'
      ],
      recDays: '1日〜'
    },
    {
      id: 'kagawa',
      region: '四国香川エリア [流浪]',
      name: '香川県仲多度郡琴平町 / 高松市',
      scene: 'アニメ第1話冒頭 / 腹ペコの往人が法術で人形パフォーマンスを試みるも誰も足を止めないレトロ商店街',
      bestTiming: '☀️ 日中 (参道商店街の賑わいとノスタルジー)',
      keySpots: [
        '琴平 参道アーケード商店街',
        '高松港フェリーターミナル'
      ],
      recDays: '3日〜'
    },
    {
      id: 'fukui',
      region: '北陸福井エリア [神話]',
      name: '福井県小浜市・若狭高浜海岸',
      scene: 'SUMMER編 1000年前の神話 / 柳也と裏葉、神奈備命(神奈)が追手から逃れながら歩んだ北陸の旧街道と静かな海岸',
      bestTiming: '🌅 夕刻 (日本海に沈む黄昏時の夕陽)',
      keySpots: [
        '若狭高浜の旧街道',
        '若狭湾沿いの静かな海岸線'
      ],
      recDays: '3日〜'
    },
    {
      id: 'kyoto',
      region: '京都エリア [制作の地]',
      name: '京都府宇治市・宇治川周辺 (京都アニメーション)',
      scene: 'アニメロケハン地 / 石原立也監督と制作陣が背景美術の青空、入道雲、光の描写の参考としたロケーション',
      bestTiming: '☀️ 昼間',
      keySpots: [
        '宇治川の堤防と風景',
        '京都アニメーション関連地'
      ],
      recDays: '1日〜'
    }
  ];

  const filteredAreas = selectedAreaId === 'ALL' 
    ? SACRED_AREAS 
    : SACRED_AREAS.filter(a => a.id === selectedAreaId);

  return (
    <div className="modern-card modern-card-gold animate-fade-in">
      <div className="modern-section-title" style={{ color: '#ea580c' }}>
        <Compass size={24} color="#fbbf24" />
        <span>【AIR 全国の全聖地】 休みの期間 (1〜15日) から導く 完全巡礼プランナー</span>
      </div>

      {/* 1. 全国の聖地エリア フィルター ＆ 土地一覧 */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '14px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>
          <h3 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.35rem' }}>
            ◆ 全国のAIR聖地エリア一覧 (全6大土地エリア ＆ 訪れるべきシーン・ベストタイミング)
          </h3>
          <span style={{ fontSize: '0.85rem', color: '#38bdf8' }}>
            和歌山・兵庫・神奈川・香川・福井・京都を網羅
          </span>
        </div>

        {/* フィルターボタン */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '16px' }}>
          <button 
            onClick={() => setSelectedAreaId('ALL')}
            className={`modern-btn ${selectedAreaId === 'ALL' ? 'modern-btn-active' : ''}`}
            style={{ padding: '6px 14px', fontSize: '0.85rem' }}
          >
            全国全エリア表示 ({SACRED_AREAS.length})
          </button>
          {SACRED_AREAS.map((a) => (
            <button
              key={a.id}
              onClick={() => setSelectedAreaId(a.id)}
              className={`modern-btn ${selectedAreaId === a.id ? 'modern-btn-active' : ''}`}
              style={{ padding: '6px 14px', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
            >
              {a.region.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* エリアカードグリッド */}
        <div className="grid-2col">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              style={{
                background: 'rgba(8, 18, 37, 0.92)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.4)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ background: '#0284c7', color: '#fff', fontSize: '0.78rem', padding: '3px 10px', borderRadius: '12px', fontWeight: 'bold' }}>
                  {area.region}
                </span>
                <span style={{ background: 'rgba(234, 88, 12, 0.2)', color: '#fbbf24', fontSize: '0.78rem', padding: '2px 8px', borderRadius: '10px', border: '1px solid #ea580c' }}>
                  推奨滞在: {area.recDays}
                </span>
              </div>

              <h4 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.25rem', marginBottom: '8px' }}>
                {area.name}
              </h4>

              <div style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>アニメ・原作対応シーン:</strong> {area.scene}
              </div>

              <div style={{ background: 'rgba(234, 88, 12, 0.15)', borderLeft: '4px solid #ea580c', padding: '8px 12px', borderRadius: '0 6px 6px 0', fontSize: '0.85rem', color: '#fffdf8', marginBottom: '14px' }}>
                <strong>ベスト訪問タイミング:</strong> {area.bestTiming}
              </div>

              <div style={{ background: 'rgba(2, 132, 199, 0.1)', padding: '10px', borderRadius: '6px', fontSize: '0.82rem', color: '#cbd5e1' }}>
                <strong style={{ color: '#38bdf8' }}>主要ロケーション:</strong>
                <ul style={{ paddingLeft: '18px', marginTop: '4px' }}>
                  {area.keySpots.map((spot, sIdx) => (
                    <li key={sIdx}>{spot}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. 出発地 ＆ 日数から自動算出するダイナミックプランシミュレーター */}
      <div style={{ background: 'rgba(2, 132, 199, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '24px', borderRadius: '14px', marginBottom: '24px' }}>
        <h3 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.4rem', marginBottom: '16px' }}>
          ◆ 全国の出発地 ＆ 休みの期間（1〜15日）から選ぶダイナミックツアー構成
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.05rem', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
              出発地（お住まいのエリア）:
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {Object.values(ORIGIN_LOCATIONS).map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setOriginKey(loc.id)}
                  className={`modern-btn ${originKey === loc.id ? 'modern-btn-active' : ''}`}
                  style={{ padding: '6px 14px', fontSize: '0.85rem' }}
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.05rem', fontWeight: 'bold' }}>
                確保できる休み: <span style={{ color: '#38bdf8', fontSize: '1.4rem' }}>{days} 日間</span>
              </label>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="modern-range"
              style={{ marginBottom: '12px' }}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {presetDays.map((d) => (
                <button
                  key={d}
                  onClick={() => setDays(d)}
                  className={`modern-btn ${days === d ? 'modern-btn-active' : ''}`}
                  style={{ padding: '4px 10px', fontSize: '0.8rem' }}
                >
                  {d}日コース
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 自動計算プラン詳細 */}
        <div className="modern-card modern-card-gold" style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(12, 38, 71, 0.95) 0%, rgba(2, 132, 199, 0.4) 100%)', marginBottom: '0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
            <h4 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.5rem' }}>
              【{plan.origin.name}発】{days}日間の聖地巡礼タイムスケジュール
            </h4>
            <span style={{ background: '#ea580c', color: '#fff', padding: '4px 14px', borderRadius: '16px', fontSize: '0.9rem', fontWeight: 'bold' }}>
              概算費用合計: 約 {plan.estTotalCost.toLocaleString()} 円
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
                  background: 'rgba(8, 18, 37, 0.9)',
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
    </div>
  );
}
