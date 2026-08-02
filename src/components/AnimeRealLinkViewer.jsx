import React, { useState } from 'react';
import { Layers, Sparkles, Eye, CheckCircle2, Sliders } from 'lucide-react';

export default function AnimeRealLinkViewer() {
  const [activeLinkId, setActiveLinkId] = useState('yoshihara_walk');
  const [opacity, setOpacity] = useState(50); // 0% 〜 100% 透過ディゾルブ

  const linkSpots = [
    {
      id: 'yoshihara_walk',
      title: '【スクショ3再現】 美浜町吉原・往人と観鈴の歩いた道と柵',
      location: '和歌山県日高郡美浜町吉原 (浜の瀬から海岸への一本道)',
      episode: 'TVアニメ第1話 14:30 / DREAM編',
      realImg: '/images/scene_yoshihara_walk_link.png',
      animeImg: '/images/scene_yoshihara_walk_link.png',
      syncPoints: [
        '道路左側の金属製ガードフェンス（赤錆びの経年変化）の角度が完璧一致',
        'フェンス横の緑の草むらと側溝、右側の民家・倉庫の配置構造が同極',
        '往人と観鈴が背中を向けて並んで歩いていくアニメ作中カットの構図そのもの'
      ],
      otakuEmotion: '「あーーーーっ！！！あったわ！！！」道路のカーブ、左の草むらと柵、背景の建物の形が完璧に脳内でアニメと現実がリンクして鳥肌が立つアハ体験！'
    },
    {
      id: 'gobo_bridge',
      title: '【スクショ2再現】 西御坊駅周辺・西川水路の線路橋とカラスのそら',
      location: '和歌山県御坊市島 (紀州鉄道 西御坊駅から南へ徒歩3分)',
      episode: 'TVアニメ第1話 08:24 / DREAM編',
      realImg: '/images/rail_bridge_comparison.png',
      animeImg: '/images/scene_gobo_rail_bridge.png',
      syncPoints: [
        '西川の護岸コンクリートの緩やかなカーブと川沿いの道路',
        '左側の建物（旧家屋 / 現デイサービス横）と右側の水路橋の交差角度',
        'カラスの「そら」がとまっていた道路手すりと線路跡のレイアウト'
      ],
      otakuEmotion: '「あーーーっ！！ここだ！！」西御坊駅を出てすぐの水路橋。アニメ画面の右下の小窓と現場が完全にシンクロ！'
    },
    {
      id: 'hamanose_busstop',
      title: '浜の瀬バス停 ＆ 武田商店前自販機',
      location: '和歌山県日高郡美浜町浜の瀬',
      episode: 'TVアニメ第1話 11:15 / DREAM編',
      realImg: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
      animeImg: '/images/scene_misuzu_juice.png',
      syncPoints: [
        '木造風屋根付きバス停待合所とベンチ',
        '武田商店横の自動販売機の配置と道路の傾斜'
      ],
      otakuEmotion: '「わかる！！」観鈴がどろり濃い抹茶パンチを買って頬に当てていたあの日常のバス停！'
    },
    {
      id: 'enjuhama_sunset',
      title: '煙樹ヶ浜 松林 ＆ 茜色の夕焼け防波堤',
      location: '和歌山県日高郡美浜町吉原海岸',
      episode: 'AIR編 クライマックス',
      realImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      animeImg: '/images/scene_sunset_goal.png',
      syncPoints: [
        '紀伊水道に落ちる茜色と紫紺のグラデーション夕空',
        '観鈴が「もう、ゴールしていいよね」と微笑んだ松林の影'
      ],
      otakuEmotion: '「泣く！！あった！！！」アニメのあの夕空の色と全く同じグラデーションが広がる瞬間の感涙！'
    }
  ];

  const currentLink = linkSpots.find(s => s.id === activeLinkId) || linkSpots[0];

  return (
    <div className="modern-card modern-card-gold animate-fade-in">
      <div className="modern-section-title" style={{ color: '#ea580c' }}>
        <Layers size={24} color="#fbbf24" />
        <span>【あーーーっ！！あったわ！！！】 現実 ＆ アニメ世界観 100% リンク・オーバーレイ</span>
      </div>

      <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '20px' }}>
        アニメ画面と現地のリアル風景が頭の中で完璧に繋がるアハ体験。
        透過スライダーを操作して、現実の風景写真にアニメカットを重ね合わせてリンク感を体感してください。
      </p>

      {/* リンクスポット選択タブ */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '24px' }}>
        {linkSpots.map((spot) => (
          <button
            key={spot.id}
            onClick={() => setActiveLinkId(spot.id)}
            className={`modern-btn ${activeLinkId === spot.id ? 'modern-btn-active' : ''}`}
            style={{ padding: '10px 18px', fontSize: '0.9rem', whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            {spot.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* 現実 ↔ アニメ 透過重ね合わせインターフェース */}
      <div className="modern-card" style={{ background: 'rgba(8, 18, 37, 0.95)', border: '2px solid #fbbf24', padding: '24px', marginBottom: '0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <div>
            <span style={{ background: '#ea580c', color: '#fff', padding: '4px 12px', borderRadius: '14px', fontSize: '0.85rem', fontWeight: 'bold' }}>
              リンク検証スポット
            </span>
            <h3 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.6rem', marginTop: '6px' }}>
              {currentLink.title}
            </h3>
          </div>
          <div style={{ fontSize: '0.9rem', color: '#38bdf8' }}>
            📍 {currentLink.location} ({currentLink.episode})
          </div>
        </div>

        {/* 鳥肌「あーーっ！あったわ！」感情バナー */}
        <div style={{ background: 'rgba(234, 88, 12, 0.2)', borderLeft: '4px solid #ea580c', padding: '14px 18px', borderRadius: '0 8px 8px 0', marginBottom: '20px', color: '#fffdf8', fontFamily: 'var(--font-mincho)', fontSize: '1.1rem', lineHeight: '1.7' }}>
          <Sparkles color="#fbbf24" size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
          <strong>オタク直感アハ体験:</strong> {currentLink.otakuEmotion}
        </div>

        {/* 重ね合わせ（Cross-Fade Dissolve）キャンバス */}
        <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--accent-cyan)', marginBottom: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
          {/* 下層: リアル現地写真 */}
          <img 
            src={currentLink.realImg} 
            alt="リアル現場写真" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* 上層: アニメカット (不透明度コントロール) */}
          <img 
            src={currentLink.animeImg} 
            alt="アニメ作中カット" 
            style={{ 
              position: 'absolute', 
              top: 0, left: 0, 
              width: '100%', height: '100%', 
              objectFit: 'cover',
              opacity: opacity / 100,
              transition: 'opacity 0.1s ease-out',
              filter: 'contrast(1.1) saturate(1.1)'
            }}
          />

          <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(0,0,0,0.85)', color: '#38bdf8', padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', border: '1px solid #38bdf8', backdropFilter: 'blur(4px)' }}>
            現場写真 (背景)
          </div>

          <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(234, 88, 12, 0.9)', color: '#fff', padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', border: '1px solid #fbbf24', backdropFilter: 'blur(4px)' }}>
            アニメ画面 重ね合わせ: <strong>{opacity}%</strong>
          </div>
        </div>

        {/* 透過フェーダースライダー */}
        <div style={{ background: 'rgba(2, 132, 199, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '16px 20px', borderRadius: '10px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ color: '#fbbf24', fontSize: '0.95rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sliders size={18} /> 現実 ↔ アニメ 透過リンク調整スライダー
            </span>
            <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
              スライダーを左右に動かして一致ポイントを体感
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(parseInt(e.target.value))}
            className="modern-range"
          />
        </div>

        {/* 完全一致シンクロポイント解説リスト */}
        <div className="modern-card-light" style={{ padding: '20px' }}>
          <h4 style={{ color: '#0f172a', borderBottom: '2px solid #0284c7', paddingBottom: '6px', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>
            ◆ 現地とアニメの完全一致（100%シンクロ）ポイント
          </h4>
          <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', color: '#1e293b', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {currentLink.syncPoints.map((pt, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <CheckCircle2 color="#ea580c" size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
