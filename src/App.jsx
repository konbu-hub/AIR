import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import SpotSection from './components/SpotSection';
import WeatherWidget from './components/WeatherWidget';
import { PILGRIMAGE_SPOTS } from './data/pilgrimageData';
import { MapPin, ChevronDown } from 'lucide-react';

/* 白い羽根 SVG (emoji ではない) */
function WhiteFeather({ style }) {
  return (
    <svg
      className="feather"
      style={style}
      width="22"
      height="28"
      viewBox="0 0 22 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 0C11 0 4 8 2 14C0 20 3 26 11 28C11 28 8 22 8 16C8 10 11 0 11 0Z"
        fill="rgba(255,255,255,0.85)"
      />
      <path
        d="M11 0C11 0 18 8 20 14C22 20 19 26 11 28C11 28 14 22 14 16C14 10 11 0 11 0Z"
        fill="rgba(255,255,255,0.7)"
      />
      <path
        d="M11 2V26"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.5"
      />
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
          <div className="hero__badge">
            PILGRIMAGE ARCHIVE & LOCATION ASSERTION
          </div>
          <h1 className="hero__title">
            AIR<br />— 1000th Summer —
          </h1>
          <p className="hero__subtitle">
            あの夏の記憶が眠る場所を、すべて巡る
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
