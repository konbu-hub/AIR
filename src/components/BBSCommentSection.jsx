import React, { useState } from 'react';
import { MessageSquare, Send, User, Clock, Heart } from 'lucide-react';

export default function BBSCommentSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "神尾観鈴推しオタク (神奈川県在住)",
      date: "2026/08/02 18:24",
      title: "【巡礼報告】神奈川から新幹線とくろしおで行ってきました！",
      body: "本日、煙樹ヶ浜の堤防に立ってきました。『夏影』を聴きながら見た夕焼けは一生忘れません。観鈴、お前は本当に頑張ったよな…。このサイトの交通シミュレーターが完璧すぎて助かりました！"
    },
    {
      id: 2,
      name: "人形使い往人",
      date: "2026/07/28 12:05",
      title: "浜の瀬バス停の自販機でジュース買いました",
      body: "本当に武田商店横に自販機とバス停があって感無量。どろり濃いジュースを探したけど売ってなかったので普通の抹茶を飲みました(笑)。あのバス停のベンチに座ると観鈴の声が聞こえてくるようです。"
    },
    {
      id: 3,
      name: "ゴールデンチキン",
      date: "2005/08/15 21:10",
      title: "キリ番007000GETしました！",
      body: "管理人様、はじめまして。7000Hitキリ番報告です！白崎海岸の白い岩肌を見てきました。風が強かったですが本当に1000年前の空に繋がっているような世界観でした。これからも更新頑張ってください。"
    }
  ]);

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !body.trim()) return;

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      date: new Date().toLocaleString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
      title: title.trim() || '無題の巡礼メモ',
      body: body.trim()
    };

    setComments([newComment, ...comments]);
    setName('');
    setTitle('');
    setBody('');
  };

  return (
    <div className="retro-box animate-fade-in">
      <div className="retro-title-bar">
        <MessageSquare size={20} />
        <span>【巡礼ノート BBS】 巡礼者の熱き想い ＆ キリ番報告掲示板</span>
      </div>

      {/* 書き込みフォーム (2000年代BBSスタイル) */}
      <div style={{ background: 'rgba(6, 20, 46, 0.95)', border: '1px solid #1d5f8a', padding: '16px', borderRadius: '4px', marginBottom: '20px' }}>
        <h4 className="font-dot" style={{ color: '#fbbf24', marginBottom: '12px', fontSize: '1rem' }}>
          ■ 聖地巡礼の感想や『AIR』への溢れる想いを書き残す
        </h4>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px' }}>
            <div>
              <label className="font-dot" style={{ fontSize: '0.8rem', color: '#7dd3fc', display: 'block', marginBottom: '4px' }}>
                お名前 (HN):
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="例: 神奈川のKeyっ子"
                required
                style={{ width: '100%', background: '#082046', border: '1px solid #1d5f8a', color: '#fff', padding: '6px 10px', fontSize: '0.88rem' }}
              />
            </div>
            <div>
              <label className="font-dot" style={{ fontSize: '0.8rem', color: '#7dd3fc', display: 'block', marginBottom: '4px' }}>
                題名 (件名):
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="例: 夏影のメロディとともに煙樹ヶ浜へ"
                style={{ width: '100%', background: '#082046', border: '1px solid #1d5f8a', color: '#fff', padding: '6px 10px', fontSize: '0.88rem' }}
              />
            </div>
          </div>

          <div>
            <label className="font-dot" style={{ fontSize: '0.8rem', color: '#7dd3fc', display: 'block', marginBottom: '4px' }}>
              本文 (巡礼メモ・熱いメッセージ):
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="3"
              placeholder="ここにAIRへの溢れる情熱、聖地での思い出、これから巡礼する決意などを書き込みください。"
              required
              style={{ width: '100%', background: '#082046', border: '1px solid #1d5f8a', color: '#fff', padding: '8px 10px', fontSize: '0.88rem', resize: 'vertical' }}
            />
          </div>

          <div style={{ textAlign: 'right' }}>
            <button type="submit" className="retro-btn" style={{ padding: '6px 16px' }}>
              <Send size={14} /> BBSに投稿送信する
            </button>
          </div>
        </form>
      </div>

      {/* コメント一覧表示 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {comments.map((item) => (
          <div
            key={item.id}
            style={{
              background: 'rgba(6, 20, 46, 0.85)',
              border: '1px solid #1d5f8a',
              borderLeft: '4px solid #fbbf24',
              padding: '12px 16px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', borderBottom: '1px dashed #1d5f8a', paddingBottom: '6px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={14} color="#38bdf8" />
                <span className="font-dot" style={{ color: '#fbbf24', fontWeight: 'bold' }}>{item.name}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#94a3b8' }}>
                <Clock size={12} /> {item.date}
              </div>
            </div>

            <div className="font-dot" style={{ color: '#7dd3fc', fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '6px' }}>
              件名: {item.title}
            </div>

            <p style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
