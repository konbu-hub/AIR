import React, { useState, useEffect } from 'react';
import { Sun, RefreshCw, MapPin } from 'lucide-react';

export default function WeatherWidget() {
  const [weather, setWeather] = useState({
    spotName: '和歌山県美浜町 (煙樹ヶ浜)',
    temperature: 29.2,
    windSpeed: 3.5,
    weatherText: '快晴 (観鈴の見た青空)',
    sunsetTime: '18:48',
    syncedAt: '更新中...'
  });
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/weather');
      if (res.ok) {
        const data = await res.json();
        setWeather(data);
      }
    } catch (e) {
      console.log('Weather fetch fallback');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="modern-card" style={{ padding: '16px 20px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Sun color="#fbbf24" size={28} />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <MapPin size={16} color="#38bdf8" />
            <span style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.95rem' }}>
              聖地・美浜町（煙樹ヶ浜）の現在のリアルタイムコンディション:
            </span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>({weather.syncedAt} 取得)</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.9rem', color: '#f8fafc' }}>
            <span>天気: <strong style={{ color: '#fbbf24' }}>{weather.weatherText}</strong></span>
            <span>気温: <strong style={{ color: '#38bdf8' }}>{weather.temperature}℃</strong></span>
            <span>風速: <strong style={{ color: '#cbd5e1' }}>{weather.windSpeed} m/s</strong></span>
            <span>本日の日の入り (『夏影』撮影ゴールデンタイム): <strong style={{ color: '#f97316' }}>{weather.sunsetTime} 頃</strong></span>
          </div>
        </div>
      </div>

      <button 
        onClick={fetchWeather} 
        className="modern-btn"
        style={{ padding: '6px 14px', fontSize: '0.82rem' }}
        disabled={loading}
      >
        <RefreshCw size={14} className={loading ? 'spin' : ''} /> リアルタイム再更新
      </button>

      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; }
      `}</style>
    </div>
  );
}
