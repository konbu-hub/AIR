import React, { useState } from 'react';
import { Sun, CloudSun, Calendar, Play, Square, Heart, Sparkles, Feather } from 'lucide-react';
import { playMelody, stopMelody } from '../utils/audioSynth';

export default function NatsukageSpecialSection() {
  const [isPlayingNatsukage, setIsPlayingNatsukage] = useState(false);

  const handlePlayNatsukage = () => {
    if (isPlayingNatsukage) {
      stopMelody();
      setIsPlayingNatsukage(false);
    } else {
      playMelody('natsukage');
      setIsPlayingNatsukage(true);
    }
  };

  return (
    <div className="retro-box retro-box-gold animate-fade-in" style={{ padding: '24px', background: 'linear-gradient(180deg, #0b2545 0%, #06142e 100%)' }}>
      <div className="retro-title-bar retro-title-bar-orange" style={{ fontSize: '1.25rem' }}>
        <Sparkles size={22} color="#fbbf24" />
        <span>【特別特集】 旋律『夏影 -Natsukage-』と「あの夏」を取り戻す巡礼時期の美学</span>
      </div>

      {/* 夏影BGM即時再生バナー */}
      <div style={{ background: 'rgba(234, 88, 12, 0.2)', border: '2px solid #f97316', padding: '16px', borderRadius: '4px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Feather color="#fbbf24" size={28} className="glow-text" />
          <div>
            <div className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.2rem', fontWeight: 'bold' }}>
              『夏影』のピアノが聴こえたら、そこがあなたの「あの夏」になる。
            </div>
            <div style={{ fontSize: '0.85rem', color: '#fed7aa' }}>
              麻枝准が生み出した不朽の名曲。煙樹ヶ浜の波音と蝉の声に身を委ねてお聴きください。
            </div>
          </div>
        </div>

        <button 
          onClick={handlePlayNatsukage}
          className={`retro-btn ${isPlayingNatsukage ? 'retro-btn-active' : ''}`}
          style={{ padding: '10px 20px', fontSize: '1rem' }}
        >
          {isPlayingNatsukage ? <Square size={18} /> : <Play size={18} />}
          {isPlayingNatsukage ? '夏影を停止する' : '『夏影』試聴再生'}
        </button>
      </div>

      {/* 情緒溢れる長文エッセイ・時期アドバイス */}
      <div className="retro-box-light" style={{ padding: '20px', marginBottom: '20px', background: '#fffdf7' }}>
        <h3 className="font-mincho" style={{ color: '#1e293b', fontSize: '1.4rem', borderBottom: '2px dashed #ea580c', paddingBottom: '8px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sun color="#f97316" /> なぜ7月下旬〜8月中旬、陽炎の立つ「あの季節」に行かねばならないのか
        </h3>

        <div className="font-mincho" style={{ fontSize: '1rem', color: '#1e293b', lineHeight: '1.95', whiteSpace: 'pre-line' }}>
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

      {/* 季節ごとの巡礼おすすめ度・情緒インジケーター */}
      <div style={{ background: 'rgba(6, 20, 46, 0.9)', border: '1px solid #1d5f8a', padding: '16px', borderRadius: '4px' }}>
        <h4 className="font-dot" style={{ color: '#7dd3fc', marginBottom: '12px', fontSize: '1.05rem' }}>
          ■ 季節別『AIR』世界観シンクロ率 ＆ 感情エモーショナル度
        </h4>

        <div className="grid-3col">
          <div style={{ background: 'rgba(234, 88, 12, 0.2)', border: '1px solid #f97316', padding: '12px', borderRadius: '4px' }}>
            <div className="font-dot" style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '1rem', marginBottom: '4px' }}>
              盛夏 [7月下旬〜8月中旬] ★★★★★
            </div>
            <div style={{ fontSize: '0.82rem', color: '#fed7aa' }}>
              【最高峰のシンクロ度】セミの声、強烈な日差し、夕暮れの茜空。作中の空気感・匂い・温度をそのまま全身で体感できる奇跡の季節。
            </div>
          </div>

          <div style={{ background: 'rgba(30, 88, 153, 0.2)', border: '1px solid #1e40af', padding: '12px', borderRadius: '4px' }}>
            <div className="font-dot" style={{ color: '#7dd3fc', fontWeight: 'bold', fontSize: '1rem', marginBottom: '4px' }}>
              初夏・残暑 [6月〜7月上旬 / 8月下旬] ★★★★☆
            </div>
            <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
              【夏の余韻と切なさ】混雑を避けつつ、初夏の青空や夏の終わりの淋しさをじっくり味わいたい大人向けの情緒あふれる季節。
            </div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid #475569', padding: '12px', borderRadius: '4px' }}>
            <div className="font-dot" style={{ color: '#94a3b8', fontWeight: 'bold', fontSize: '1rem', marginBottom: '4px' }}>
              オフシーズン [秋〜春] ★★★☆☆
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
              【静かなる巡礼】観光客が少なく静かにロケ地を撮影できるが、やはりAIRの真価は夏の風と波音の中にこそ存在する。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
