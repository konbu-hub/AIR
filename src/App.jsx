import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import SpotSection from './components/SpotSection';
import WeatherWidget from './components/WeatherWidget';
import { PILGRIMAGE_SPOTS } from './data/pilgrimageData';
import { MapPin, ChevronDown } from 'lucide-react';

/* 白い羽根 SVG — AIRの象徴。中央の羽軸(rachis)から羽枝(barbs)が広がる本物の羽根の形 */
function WhiteFeather({ style }) {
  return (
    <svg
      className="feather"
      style={style}
      width="32"
      height="52"
      viewBox="0 0 32 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 羽根の外形（右側の羽弁がやや広い非対称な鳥の風切羽） */}
      <path
        d="M16 0
           C14 4, 6 12, 4 20
           C2 28, 3 36, 6 42
           C8 46, 12 50, 16 52
           C15.5 50, 15 46, 15 42
           C15 36, 14.5 28, 16 0Z"
        fill="rgba(255,255,255,0.75)"
      />
      <path
        d="M16 0
           C18 4, 26 10, 28 18
           C30 26, 28 34, 24 40
           C21 45, 18 49, 16 52
           C16.5 50, 17 46, 17 42
           C17 36, 17.5 28, 16 0Z"
        fill="rgba(255,255,255,0.9)"
      />
      {/* 羽軸 (rachis) — 中央の細い軸線。微妙にカーブ */}
      <path
        d="M16 1 C15.5 14, 15.8 28, 16 51"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      {/* 羽枝 (barbs) — 軸から斜めに広がる細い線 */}
      <g stroke="rgba(255,255,255,0.18)" strokeWidth="0.4">
        <line x1="16" y1="8" x2="8" y2="14" />
        <line x1="16" y1="8" x2="24" y2="13" />
        <line x1="16" y1="14" x2="6" y2="21" />
        <line x1="16" y1="14" x2="26" y2="19" />
        <line x1="16" y1="20" x2="5" y2="27" />
        <line x1="16" y1="20" x2="27" y2="25" />
        <line x1="16" y1="26" x2="5" y2="33" />
        <line x1="16" y1="26" x2="27" y2="31" />
        <line x1="16" y1="32" x2="7" y2="38" />
        <line x1="16" y1="32" x2="25" y2="37" />
        <line x1="16" y1="38" x2="9" y2="43" />
        <line x1="16" y1="38" x2="22" y2="42" />
      </g>
    </svg>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSpotIdx, setActiveSpotIdx] = useState(-1);

  /* スクロール監視: ナビバーの背景変更 */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* IntersectionObserver: スクロールリビール */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* 白い羽根の粒子生成 */
  const feathers = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${5 + Math.random() * 88}%`,
    delay: `${Math.random() * 14}s`,
    duration: `${10 + Math.random() * 14}s`,
    drift: `${20 + Math.random() * 80}px`,
    scale: 0.6 + Math.random() * 0.7,
  }));

  const scrollToSpots = () => {
    const el = document.getElementById('spots-start');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* 白い羽根パーティクル (SVG) */}
      {feathers.map((f) => (
        <WhiteFeather
          key={f.id}
          style={{
            left: f.left,
            animationDelay: f.delay,
            animationDuration: f.duration,
            '--f-drift': f.drift,
            '--f-scale': f.scale,
          }}
        />
      ))}

      {/* 固定ナビゲーション */}
      <nav className={`nav-fixed ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav__logo">AIR</a>
        <div className="nav__links">
          <button className="nav__link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            TOP
          </button>
          <button className="nav__link" onClick={scrollToSpots}>
            聖地一覧
          </button>
        </div>
      </nav>

      {/* フルスクリーン・ヒーロー */}
      <section className="hero">
        <div className="hero__bg">
          <img src="/images/hero_sky.png" alt="AIR - どこまでも広がる夏の青空" />
        </div>
        <div className="hero__vignette" />
        <div className="hero__content">
          <h1 className="hero__title">
            AIR<br />— 1000th Summer —
          </h1>
          <p className="hero__subtitle">
            あの夏の追憶を巡る
          </p>
          <div className="hero__scroll-hint" onClick={scrollToSpots} style={{ cursor: 'pointer' }}>
            <ChevronDown size={18} />
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>

      {/* 天気ウィジェット */}
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '24px clamp(20px, 5vw, 80px) 0' }}>
        <WeatherWidget />
      </div>

      {/* 聖地セクション導入 */}
      <section className="section" id="spots-start">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="section__label reveal">
            <MapPin size={16} /> SACRED LOCATIONS
          </div>
          <h2 className="section__heading reveal reveal-delay-1">
            全国のAIR聖地ロケーション
          </h2>
          <p className="section__desc reveal reveal-delay-2">
            『AIR』の物語が息づく場所は、和歌山・兵庫・神奈川・香川など全国に点在しています。
            各スポットについて、作中のどのシーンで登場したか、そして現実の現場はどのような場所かを
            対比しながら紹介します。
          </p>
        </div>
      </section>

      {/* 各聖地：フルスクリーン・シネマティックセクション */}
      {PILGRIMAGE_SPOTS.map((spot, idx) => (
        <SpotSection key={spot.id} spot={spot} index={idx} />
      ))}

      {/* フッター */}
      <footer className="site-footer">
        AIR PILGRIMAGE ARCHIVE | © Key / VisualArt's / 京都アニメーション
      </footer>
    </div>
  );
}
