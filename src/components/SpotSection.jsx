import React, { useEffect, useRef } from 'react';
import { MapPin, ExternalLink, Clock, Train, Camera, Star } from 'lucide-react';

/**
 * SpotSection — 1つの聖地スポットをフルスクリーンでシネマティックに表示するセクション。
 * 背景にリアル写真をフルブリード配置、左カラムにテキスト＆情報、右カラムにアニメ作中カットを表示。
 * 情報量を大幅に増強（アクセス、ベスト訪問時間、巡礼Tips）しつつデザインを崩さない。
 */
export default function SpotSection({ spot, index }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`;

  return (
    <section className="spot" ref={sectionRef}>
      {/* 背景 = リアル写真フルブリード */}
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

          {/* そのシーンの文脈・意味 */}
          {spot.sceneContext && (
            <div className="spot__context-block reveal">
              <div className="spot__context-text">{spot.sceneContext}</div>
            </div>
          )}

          {/* 現実はどんな感じか */}
          <div className="spot__reality-block reveal">
            <div className="spot__reality-label">現地はどんな場所か</div>
            <div className="spot__reality-text">{spot.details}</div>
          </div>

          {/* 巡礼情報パネル */}
          <div className="spot__info-grid reveal">
            {spot.access && (
              <div className="spot__info-item">
                <Train size={14} className="spot__info-icon" />
                <div>
                  <div className="spot__info-label">アクセス</div>
                  <div className="spot__info-text">{spot.access}</div>
                </div>
              </div>
            )}
            {spot.bestTime && (
              <div className="spot__info-item">
                <Clock size={14} className="spot__info-icon" />
                <div>
                  <div className="spot__info-label">ベスト訪問タイミング</div>
                  <div className="spot__info-text">{spot.bestTime}</div>
                </div>
              </div>
            )}
            {spot.tips && (
              <div className="spot__info-item">
                <Star size={14} className="spot__info-icon" />
                <div>
                  <div className="spot__info-label">巡礼Tips</div>
                  <div className="spot__info-text">{spot.tips}</div>
                </div>
              </div>
            )}
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
              作中カット — {spot.episodeTime}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
