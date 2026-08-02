import React, { useState, useEffect } from 'react';

/**
 * WeatherWidget — 聖地の今の空気感をエモーショナルに伝えるウィジェット。
 * データ表示ではなく「今、あの場所はこんな空をしている」という感覚を届ける。
 */
export default function WeatherWidget() {
  const [weather, setWeather] = useState({
    temperature: 29.3,
    windSpeed: 7.9,
    weatherText: '晴れ',
    sunsetTime: '18:59',
  });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('/api/weather');
        if (res.ok) {
          const data = await res.json();
          setWeather(data);
        }
      } catch (e) { /* fallback */ }
    };
    fetchWeather();
  }, []);

  // 天気に応じた雰囲気テキスト
  const getMoodText = () => {
    if (weather.temperature >= 30) return '真夏の陽射しが照りつける、あの夏と同じ空';
    if (weather.temperature >= 25) return '潮風が頬を撫でる、穏やかな夏の午後';
    return '海風が少し冷たい、季節の移ろいを感じる空';
  };

  return (
    <div className="weather-emotional reveal">
      {/* 左：情緒的なテキスト */}
      <div className="weather-emotional__mood">
        <div className="weather-emotional__mood-text">
          {getMoodText()}
        </div>
        <div className="weather-emotional__location">
          和歌山県美浜町・煙樹ヶ浜
        </div>
      </div>

      {/* 右：データ（ミニマル） */}
      <div className="weather-emotional__data">
        <div className="weather-emotional__datum">
          <span className="weather-emotional__value">{weather.temperature}°</span>
          <span className="weather-emotional__unit">気温</span>
        </div>
        <div className="weather-emotional__divider" />
        <div className="weather-emotional__datum">
          <span className="weather-emotional__value">{weather.windSpeed}</span>
          <span className="weather-emotional__unit">m/s 風速</span>
        </div>
        <div className="weather-emotional__divider" />
        <div className="weather-emotional__datum">
          <span className="weather-emotional__value weather-emotional__value--sunset">{weather.sunsetTime}</span>
          <span className="weather-emotional__unit">日の入り</span>
        </div>
      </div>
    </div>
  );
}
