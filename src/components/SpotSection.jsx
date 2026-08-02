import React, { useEffect, useRef } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

/**
 * SpotSection — 1つの聖地スポットをフルスクリーンでシネマティックに表示するセクション。
 * 背景に現実の写真をフルブリードで配置し、左カラムにテキスト情報、右カラムにアニメ作中カットを表示。
 * 任天堂 / nudot.com.tw のような世界観に引き込むフルスクリーンスクロール体験を実現する。
 */
export default function SpotSection({ spot, index }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`;

  return (
    <section className="spot" ref={sectionRef}>
      {/* 背景 = 現実の写真フルブリード */}
      <div className="spot__bg">
        <img
          src={spot.imageUrl}
          alt={`${spot.name} 現場`}
          loading="lazy"
        />
      </div>
      <div className="spot__overlay" />

      <div className="spot__inner">
        {/* 左カラム：テキスト情報 */}
        <div className="spot__text">
          <div className="spot__area-badge reveal">
            <MapPin size={14} /> {spot.area}
          </div>

          <div className="spot__episode reveal">{spot.episodeTime}</div>

          <h2 className="spot__name reveal">{spot.name}</h2>

          <div className="spot__location reveal">
            <MapPin size={14} />
            <span>{spot.location}</span>
          </div>

          {/* 作中シーン解説 */}
          <div className="spot__scene-block reveal">
            <div className="spot__scene-label">作中シーン</div>
            <div className="spot__scene-text">{spot.sceneName}</div>
          </div>

          {/* 名台詞 */}
          {spot.famousQuote && (
            <div className="spot__quote reveal">
              {spot.famousQuote}
            </div>
          )}

          {/* 現実はどんな感じか */}
          <div className="spot__reality-block reveal">
            <div className="spot__reality-label">現地はどんな場所か</div>
            <div className="spot__reality-text">{spot.details}</div>
          </div>

          {/* Google Maps ボタン */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="spot__maps-btn reveal"
          >
            <MapPin size={18} />
            Google Maps で確認
            <ExternalLink size={14} />
          </a>
        </div>

        {/* 右カラム：アニメ作中カット */}
        <div className="spot__anime-frame reveal">
          <div className="spot__anime-img-wrap">
            <img
              src={spot.animeCompareImg}
              alt={`${spot.name} アニメ作中カット`}
              loading="lazy"
            />
            <div className="spot__anime-caption">
              アニメ・ゲーム 作中カット — {spot.episodeTime}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
