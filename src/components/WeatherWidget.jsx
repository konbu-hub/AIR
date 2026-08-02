import React, { useState, useEffect } from 'react';
import { Sun, MapPin } from 'lucide-react';

export default function WeatherWidget() {
  const [weather, setWeather] = useState({
    spotName: '和歌山県美浜町 煙樹ヶ浜',
    temperature: 29.2,
    windSpeed: 3.5,
    weatherText: '快晴',
    sunsetTime: '18:48',
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
        // fallback
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="weather-strip reveal">
      <Sun color="#fbbf24" size={24} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <MapPin size={14} color="#38bdf8" />
        <span style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.88rem' }}>
          聖地・美浜町
        </span>
      </div>
      <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
        {weather.weatherText}
      </span>
      <span style={{ color: '#f97316', fontSize: '0.88rem', fontWeight: 600 }}>
        {weather.temperature}℃
      </span>
      <span style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
        風速 {weather.windSpeed} m/s
      </span>
      <span style={{ color: '#fbbf24', fontSize: '0.88rem', fontWeight: 600 }}>
        日の入り {weather.sunsetTime}
      </span>
    </div>
  );
}
