import React from 'react';
import { Flame, BookOpen, Sparkles, Feather } from 'lucide-react';

export default function OtakuPassionEssay() {
  return (
    <div className="modern-card modern-card-gold animate-fade-in">
      <div className="modern-section-title" style={{ color: '#ea580c' }}>
        <Flame size={24} color="#fbbf24" />
        <span>【深層考察アーカイブ】 AIRという作品が刻んだ熱狂とノスタルジーの真髄</span>
      </div>

      {/* タイトルバナー */}
      <div style={{ background: 'rgba(234, 88, 12, 0.2)', border: '1px solid #ea580c', padding: '20px', borderRadius: '12px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <Feather color="#fbbf24" size={28} className="glow-text" />
          <h2 className="font-mincho" style={{ color: '#fbbf24', fontSize: '1.5rem', fontWeight: 'bold' }}>
            「あの夏、僕たちはみんな観鈴の傍にいた」
          </h2>
        </div>
        <p style={{ fontSize: '0.95rem', color: '#fed7aa', lineHeight: '1.7' }}>
          2000年の原作PCゲーム発売、そして2005年の京都アニメーション版放送の際、ファンたちが夜を徹して語り明かした『AIR』という物語の構造と作品世界への考察をここにアーカイブする。
        </p>
      </div>

      {/* 長文コラム 1 */}
      <div className="modern-card-light" style={{ padding: '28px', marginBottom: '24px' }}>
        <h3 className="font-mincho" style={{ color: '#0f172a', fontSize: '1.4rem', borderBottom: '2px dashed #ea580c', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BookOpen color="#ea580c" size={24} /> 考察①: なぜAIRという作品は20年以上経っても胸を締め付け続けるのか
        </h3>

        <div className="font-mincho" style={{ fontSize: '1.05rem', color: '#0f172a', lineHeight: '2.05', whiteSpace: 'pre-line' }}>
          {`2000年代初頭、金字塔として降臨した『AIR』。
この作品は単なる美少女ゲームやアニメの枠を完全に超越していた。

主人公・国崎往人は、あてもなく流れる人形使いだ。母親から引き継いだ「空にいる少女」を救うという途方もない使命だけを抱え、空腹に耐えながら田舎町へとたどり着く。
そこで出会うのが、神尾観鈴という少女だ。

観鈴は無邪気で、少しどんくさくて、「ガオ…」と口癖を呟きながら武田商店の自販機で「どろり濃いジュース」を買うような、どこにでもいる普通の女の子に見えた。
しかし彼女は、「人と親しくなるとどうしても泣いてしまう」という悲しい呪いを背負っていた。
誰かと友情を深め、愛を知れば知るほど、肉体と精神が蝕まれていく——。

作品が提示した衝撃は、この「逃げ場のない切なさ」だった。
観鈴を愛すれば愛するほど、観鈴を追い詰めてしまう。往人は自分の存在そのものが観鈴を傷つけている現実に絶望し、そして「カラス（そら）」となって観鈴の最期を見守る決断をする。

AIRが残酷で、そして世界一美しいのは、ハッピーエンドという安易な救いを用意しなかったことだ。
観鈴は最後に、車椅子の身体を押して、晴子の胸へと歩みを進める。
「もう、ゴールしていいよね……」「私、頑張ったよね……」
あの言葉とともに、煙樹ヶ浜の茜色の空の下で命の灯火を燃やし尽くした観鈴の姿は、ファンの心に一生消えない記憶として刻み込まれたのだ。`}
        </div>
      </div>

      {/* 長文コラム 2 */}
      <div className="modern-card-light" style={{ padding: '28px', marginBottom: '0' }}>
        <h3 className="font-mincho" style={{ color: '#0f172a', fontSize: '1.4rem', borderBottom: '2px dashed #0284c7', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles color="#0284c7" size={24} /> 考察②: 聖地・和歌山県美浜町に立ったとき、身体を駆け巡る「あの感覚」
        </h3>

        <div className="font-mincho" style={{ fontSize: '1.05rem', color: '#0f172a', lineHeight: '2.05', whiteSpace: 'pre-line' }}>
          {`新幹線と特急くろしお、あるいは夜行バスを乗り継いで、紀州鉄道の西御坊駅へ降り立つ。
そこから西川沿いの水路線路橋を歩き、浜の瀬バス停、吉原の堤防、そして煙樹ヶ浜へと向かう。

現地に立った瞬間、息をのむ。
観光地として整備された派手なスポットは何一つない。あるのは、瓦屋根の静かな集落と、武田商店横の自販機と、波音だけが響く砂利浜だ。
だが、それこそが本物なのだ。

真夏の正午、カンカンと照りつける太陽とアスファルトの陽炎の中、堤防の縁に腰をかける。
耳を澄ますと、潮風に乗ってヒグラシの「カナカナカナ…」という声と「ガラガラ…」と引く煙樹ヶ浜の小石の音が聴こえてくる。
その時、誰もが確信する。
「あぁ、観鈴は本当にここにいたんだ。往人と一緒に、この風を浴びていたんだ」と。

1000年という果てしない時間の重みと、真夏のたった数週間の眩しすぎる日常。
聖地巡礼とは、単にアニメのロケ地を写真に収める作業ではない。
観鈴と往人が駆け抜けた「あの夏」の匂いと温度を、自分自身の身体に刻み込む行為なのだ。`}
        </div>
      </div>
    </div>
  );
}
