import React, { useState } from 'react';
import { BookOpen, Feather, Sparkles, HelpCircle, Flame, Compass, Heart } from 'lucide-react';

export default function AirDeepEncyclopedia() {
  const [activeTriviaId, setActiveTriviaId] = useState('juice');

  const trivias = [
    {
      id: 'juice',
      title: '武田商店 ＆「どろり濃いジュース」全全フレーバーと聖地マナー',
      icon: '🍹',
      short: '観鈴の愛飲する「どろり濃い抹茶パンチ」の小ネタと現地自販機',
      content: `
【「どろり濃いジュース」の謎とフレーバー全解説】
観鈴が武田商店横の自販機で嬉しそうに買っては往人に引かれる怪しい清涼飲料水シリーズ。
・「どろり濃い抹茶パンチ」（観鈴のイチオシ。抹茶に炭酸と練乳が混ざったような激甘ドロドロ飲料）
・「どろり濃いオレンジ」
・「どろり濃いイチゴミルク」
・「ウルトラ濃い抹茶パンチ」（劇中後半に登場する強化版）

【聖地・美浜町浜の瀬での実際の巡礼歴史】
美浜町浜の瀬の武田商店横には、作中と全く同じ構図で自動販売機が実在していた。
2000年代初頭、全国から集まった聖地巡礼者たちが自販機で緑色の缶ジュースを買い、武田商店のおばあちゃんと「観鈴ちゃん、今日も来ましたよ」と会話を交わすのが巡礼者の温かい伝統となっていた。
`
    },
    {
      id: 'sora',
      title: '人形使い「国崎往人」の消滅と「カラスのそら」視点の真実',
      icon: '🪶',
      short: 'DREAM編からAIR編への転生と、カラスの目線で描かれる感動構造',
      content: `
【往人の法術と「そら」への転生】
往人が扱う「手を触れずに人形を動かす法術」は、彼自身の生命力（魂）を分け与える技である。
観鈴が「翼人の呪い」によって衰弱していく中、往人は自らの命を全て捧げて観鈴の呪いを肩代わりしようとした。

その結果、往人の肉体は消滅し、彼の魂は一羽の黒いカラス「そら」へと転生する。
原作ゲーム『AIR編』がカラスの目線で進行するのはこのためだ。
往人は人間の姿を失ってもなお、空を飛ぶ鳥となって観鈴の最期の夏を見守り続けた。アニメ第1話で水路線路橋の手すりにとまっていたカラスこそが、未来から来た「そら」そのものだったのである。
`
    },
    {
      id: 'haruko',
      title: '神尾晴子（養母）の葛藤と「おかあさん！」と叫んだ奇跡の瞬間',
      icon: '🌻',
      short: '酒好きでガサツな晴子が隠し続けた愛と、橘敬介への土下座',
      content: `
【晴子が観鈴と距離を置き続けた切ない理由】
普段はバイクで暴走し、昼から酒を飲むガサツな叔母・神尾晴子。
彼女が観鈴を「観鈴ちゃん」と呼び、どこか一線を引き続けていたのは、実父の橘敬介から預かっている身であり「いつか引き取られて別れる時、お互いが辛くならないように」という不器用な優しさからだった。

しかし、観鈴の病状が悪化し、敬介が引き取りに来た日、晴子は雨の中で土下座し「観鈴を私にください！本物の親子にならせてください！」と泣き叫ぶ。
車椅子から必死に立ち上がり、自分の足で一歩ずつ歩んだ観鈴が「おかあさん！」と胸に飛び込んだ瞬間は、1000年の呪いを超えて二人が「本物の親子」になった歴史的名シーンである。
`
    },
    {
      id: 'atago_53',
      title: '逢宕神社（あたごじんじゃ）の「石段53段」と夏祭りの太鼓',
      icon: '⛩️',
      short: '第5話で観鈴と往人が花火を見上げた石段の正確な段数と雰囲気',
      content: `
【逢宕神社のトリビア】
美浜町和田地区の集落を見下ろす丘に鎮座する逢宕神社。
鳥居を潜って本殿へ続く急な石段の段数は正確に「53段」。
アニメ第5話で、足を痛めた観鈴を往人が抱え、夏祭りの太鼓と提灯の灯りの中を登っていった石段である。

石段の上からは美浜町の瓦屋根の街並みと太平洋が一望でき、夏祭りの夜には遠くの御坊の花火大会の大輪の花火が夜空を彩る。
`
    },
    {
      id: 'kankou_director',
      title: '京都アニメーション石原立也監督が美浜町を選んだロケハン秘話',
      icon: '🎬',
      short: 'なぜ京アニ制作陣は和歌山県美浜町吉原をロケーションに決めたのか',
      content: `
【京アニ版AIRのロケハン逸話】
2005年、TVアニメ化にあたり、監督の石原立也氏と美術監督の武本康弘氏・木上益治氏らは、原作ゲームの持つ「どこまでも続く夏の青空」「寂れた港町のノスタルジー」を求めて紀勢本線沿線をロケハンした。

御坊駅から紀州鉄道に乗り換え、終点の西御坊駅から西川沿いを歩いて美浜町吉原にたどり着いた時、目の前に広がった「小石の擦れる波音と松林の煙樹ヶ浜」「一本道の防波堤」を見て、「ここだ！ここが観鈴の住む町だ！」と全会一致で決定されたという。
アニメの画面に描かれた背景の電柱の位置や建物の傾斜が実物と完璧に一致するのは、制作陣の圧倒的な取材と愛の産物である。
`
    }
  ];

  const currentTrivia = trivias.find(t => t.id === activeTriviaId) || trivias[0];

  return (
    <div className="modern-card modern-card-gold animate-fade-in">
      <div className="modern-section-title" style={{ color: '#fbbf24' }}>
        <Sparkles size={24} color="#fbbf24" />
        <span>【ファン感涙】 AIR 聖地 ＆ 物語 深淵エンサイクロペディア</span>
      </div>

      <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '20px' }}>
        「さすが！」と叫びたくなる深遠なトリビア、設定、伏線考察、ロケハン秘話を網羅。
        AIRという作品と聖地・美浜町が持つ本物の深みに触れてください。
      </p>

      {/* 項目選択タブ */}
      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '24px' }}>
        {trivias.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTriviaId(t.id)}
            className={`modern-btn ${activeTriviaId === t.id ? 'modern-btn-active' : ''}`}
            style={{ padding: '10px 18px', fontSize: '0.9rem', whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            {t.icon} {t.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* 詳細解説カード */}
      <div className="modern-card" style={{ background: 'rgba(8, 18, 37, 0.95)', border: '1px solid #fbbf24', padding: '24px', marginBottom: '0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '14px', marginBottom: '16px' }}>
          <span style={{ fontSize: '2rem' }}>{currentTrivia.icon}</span>
          <div>
            <h3 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.5rem', fontWeight: 'bold' }}>
              {currentTrivia.title}
            </h3>
            <div style={{ fontSize: '0.88rem', color: '#38bdf8', marginTop: '2px' }}>
              {currentTrivia.short}
            </div>
          </div>
        </div>

        <div className="modern-card-light" style={{ padding: '24px', lineHeight: '2.0', whiteSpace: 'pre-line' }}>
          <div className="font-mincho" style={{ fontSize: '1.02rem', color: '#0f172a' }}>
            {currentTrivia.content}
          </div>
        </div>
      </div>
    </div>
  );
}
