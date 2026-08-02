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
    <div className="bright-card" style={{ padding: '16px 24px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ background: '#e0f2fe', padding: '10px', borderRadius: '50%' }}>
          <Sun color="#0284c7" size={28} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
            <MapPin size={16} color="#0284c7" />
            <span style={{ color: '#0284c7', fontWeight: '700', fontSize: '0.95rem' }}>
              聖地・和歌山県美浜町の現在のコンディション:
            </span>
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.92rem', color: '#334155' }}>
            <span>天気: <strong style={{ color: '#0284c7' }}>{weather.weatherText}</strong></span>
            <span>気温: <strong style={{ color: '#ea580c' }}>{weather.temperature}℃</strong></span>
            <span>風速: <strong style={{ color: '#475569' }}>{weather.windSpeed} m/s</strong></span>
            <span>日の入り (夕焼けタイム): <strong style={{ color: '#d97706' }}>{weather.sunsetTime}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
