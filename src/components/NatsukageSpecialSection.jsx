import React, { useState } from 'react';
import { Sun, Sparkles, Feather, Play, Square } from 'lucide-react';
import { playNatsukage, stopNatsukage, isNatsukagePlaying } from '../utils/audioSynth';

export default function NatsukageSpecialSection() {
  const [isPlayingNatsukage, setIsPlayingNatsukage] = useState(false);

  const handlePlayNatsukage = () => {
    if (isPlayingNatsukage) {
      stopNatsukage();
      setIsPlayingNatsukage(false);
    } else {
      playNatsukage();
      setIsPlayingNatsukage(true);
    }
  };

  return (
    <div className="retro-box retro-box-gold animate-fade-in" style={{ padding: '24px', background: 'linear-gradient(180deg, #0c2647 0%, #031024 100%)' }}>
      <div className="retro-title-bar retro-title-bar-orange" style={{ fontSize: '1.25rem' }}>
        <Sparkles size={22} color="#fbbf24" />
        <span>【特別特集】 旋律『夏影 -Natsukage-』と「あの夏」を取り戻す巡礼時期の美学</span>
      </div>

      {/* 夕焼けとひまわりのオマージュ画像ギャラリー */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '20px' }}>
        <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', border: '2px solid #fbbf24' }}>
          <img src="/images/sunset_beach.png" alt="煙樹ヶ浜の夕焼けと夏影" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,0.75)', padding: '6px 12px', fontSize: '0.85rem', color: '#fbbf24', fontFamily: 'var(--font-dot)' }}>
            ▲ 煙樹ヶ浜で紀伊水道に落ちる夕焼けと『夏影』のシンクロ
          </div>
        </div>
        <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', border: '2px solid #38bdf8' }}>
          <img src="/images/misuzu_sea.png" alt="堤防とひまわりと観鈴の空" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,0.75)', padding: '6px 12px', fontSize: '0.85rem', color: '#38bdf8', fontFamily: 'var(--font-dot)' }}>
            ▲ 眩しい青空、堤防、そして無邪気な観鈴の笑顔の残像
          </div>
        </div>
      </div>

      {/* 夏影BGM即時再生バナー */}
      <div style={{ background: 'rgba(234, 88, 12, 0.25)', border: '2px solid #f97316', padding: '16px', borderRadius: '4px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Feather color="#fbbf24" size={32} className="glow-text" />
          <div>
            <div className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.25rem', fontWeight: 'bold' }}>
              『夏影』のピアノが聴こえたら、そこがあなたの「あの夏」になる。
            </div>
            <div style={{ fontSize: '0.88rem', color: '#fed7aa' }}>
              麻枝准が生み出した不朽の名曲。ヘ長調の正確なピアノ旋律と低音和音でお楽しみください。
            </div>
          </div>
        </div>

        <button 
          onClick={handlePlayNatsukage}
          className={`retro-btn ${isPlayingNatsukage ? 'retro-btn-active' : ''}`}
          style={{ padding: '10px 22px', fontSize: '1.05rem' }}
        >
          {isPlayingNatsukage ? <Square size={18} /> : <Play size={18} />}
          {isPlayingNatsukage ? '夏影を停止する' : '『夏影』試聴再生'}
        </button>
      </div>

      {/* 情緒溢れる長文エッセイ・時期アドバイス */}
      <div className="retro-box-light" style={{ padding: '24px', marginBottom: '20px', background: '#fffdf7' }}>
        <h3 className="font-mincho" style={{ color: '#1e293b', fontSize: '1.45rem', borderBottom: '2px dashed #ea580c', paddingBottom: '8px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sun color="#f97316" size={24} /> なぜ7月下旬〜8月中旬、陽炎の立つ「あの季節」に行かねばならないのか
        </h3>

        <div className="font-mincho" style={{ fontSize: '1.05rem', color: '#0f172a', lineHeight: '2.0', whiteSpace: 'pre-line' }}>
          {`AIRという作品において、夏は単なる四季の一節ではない。
それは「千年の孤独」であり、「一生に一度しか訪れない永遠の日常」であり、そして「いつか終わってしまうからこそ尊い命の輝き」そのものである。

もしあなたが神奈川から和歌山・美浜町へと足を運ぶのなら、できれば【7月下旬から8月中旬】——太陽が容赦なく地面を焼き、アスファルトの向こうに陽炎が揺らめく真夏の盛りに旅立ってほしい。

なぜなら、『夏影』という楽曲のイントロで流れるあの澄み渡るピアノの音色は、
・正午の強い光を受けて白く輝く煙樹ヶ浜の小石
・武田商店の自販機から伝わる冷えた缶ジュースの冷たさ
・17時を過ぎ、潮風とともに響き渡るヒグラシのカナカナという鳴き声
・そして紀伊水道の空を茜色に染めていく日没の数十分間
この瞬間の「空気の温度」と「匂い」と完全にひとつになるからだ。

【時間帯ごとに表情を変える『夏影』の情景】

◆ 早朝 06:00 - 08:00 【朝霧と静寂の海】
まだ誰もいない煙樹ヶ浜。冷涼な海風が松林を吹き抜け、水平線には朝靄が漂う。
観鈴が目覚める前の静かな時間。世界に自分一人しかいないような、透明度の高い寂寥感の中で聴く『夏影』は、心の一番深い場所に届く。

◆ 正午 12:00 - 14:00 【眩しすぎる青空と眩暈】
頭上高く輝く太陽。強烈な光の中、白崎海岸の白い岩肌や美浜の堤防が眩しく反射する。
汗をぬぐい、冷たいジュースを飲み干す。観鈴と往人が笑い合いながら歩いた「眩しすぎて少し切ない」真夏の光景がここにある。

◆ 夕暮れ 16:30 - 18:30 【ヒグラシの声と黄金色のグラデーション】 (※最大のハイライト)
空が黄金色から鮮やかな茜色、そして紫紺へと移り変わる奇跡の時間。
風が止み、ヒグラシの声と「ガラガラ…」と引く煙樹ヶ浜の波音だけが響く。
この瞬間、ヘッドホンで『夏影』を流しながら堤防に腰掛けてほしい。
言葉を失う。ただ涙が溢れ、1000年の時を超えて観鈴が「ゴール」へと歩みを進めたあの夏の愛おしさが、あなたの魂を包み込むはずだ。`}
        </div>
      </div>
    </div>
  );
}
