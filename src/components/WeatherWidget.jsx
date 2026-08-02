import React, { useState, useEffect } from 'react';
import { CloudSun, Sun, Wind, Clock, RefreshCw } from 'lucide-react';

export default function WeatherWidget() {
  const [weather, setWeather] = useState({
    spotName: '和歌山県美浜町 (煙樹ヶ浜)',
    temperature: 29.2,
    windSpeed: 3.5,
    weatherText: '快晴 (まさに観鈴の見た青空！)',
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
    <div style={{ background: 'rgba(6, 20, 46, 0.95)', border: '1px solid #38bdf8', padding: '12px 16px', borderRadius: '4px', marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Sun color="#fbbf24" size={28} className="glow-text" />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="font-dot" style={{ color: '#38bdf8', fontWeight: 'bold', fontSize: '0.95rem' }}>
              【Vercel Live Weather】 聖地・美浜町のリアルタイムコンディション:
            </span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>({weather.syncedAt} 取得)</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '4px', fontSize: '0.85rem', color: '#f8fafc' }}>
            <span>天気: <strong style={{ color: '#fbbf24' }}>{weather.weatherText}</strong></span>
            <span>気温: <strong style={{ color: '#7dd3fc' }}>{weather.temperature}℃</strong></span>
            <span>風速: <strong style={{ color: '#cbd5e1' }}>{weather.windSpeed} m/s</strong></span>
            <span>今日の日の入り (『夏影』ゴールデンタイム): <strong style={{ color: '#f97316' }}>{weather.sunsetTime} 頃</strong></span>
          </div>
        </div>
      </div>

      <button 
        onClick={fetchWeather} 
        className="retro-btn"
        style={{ padding: '4px 10px', fontSize: '0.75rem' }}
        disabled={loading}
      >
        <RefreshCw size={12} className={loading ? 'spin' : ''} /> リアルタイム再更新
      </button>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spin { animation: spin 1s linear infinite; }
      `}</style>
    </div>
  );
}
