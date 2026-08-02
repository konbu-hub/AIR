import React, { useState, useEffect } from 'react';
import { Sun, MapPin } from 'lucide-react';

export default function WeatherWidget() {
  const [weather, setWeather] = useState({
    spotName: '和歌山県美浜町 (煙樹ヶ浜)',
    temperature: 29.2,
    windSpeed: 3.5,
    weatherText: '快晴',
    sunsetTime: '18:48 頃'
  });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('/api/weather');
        if (res.ok) {
          const data = await res.json();
          setWeather(data);
        }
      } catch (e) {
        console.log('Weather fetch fallback');
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="nudot-card" style={{ padding: '18px 26px', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        <div style={{ background: 'rgba(56, 189, 248, 0.15)', padding: '12px', borderRadius: '50%', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
          <Sun color="#fbbf24" size={28} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <MapPin size={16} color="#38bdf8" />
            <span style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
              聖地・和歌山県美浜町 リアルタイムコンディション:
            </span>
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', fontSize: '0.92rem', color: '#f8fafc' }}>
            <span>天気: <strong style={{ color: '#fbbf24' }}>{weather.weatherText}</strong></span>
            <span>気温: <strong style={{ color: '#38bdf8' }}>{weather.temperature}℃</strong></span>
            <span>風速: <strong style={{ color: '#cbd5e1' }}>{weather.windSpeed} m/s</strong></span>
            <span>日の入り (夕焼けタイム): <strong style={{ color: '#f97316' }}>{weather.sunsetTime}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
