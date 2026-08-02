# AIR 聖地巡礼コンプリートガイド ＆ フレキシブルシステム 成果確認 (Walkthrough)

Keyの不朽の名作『AIR』を心から愛するファンのための、熱量と情熱に満ちた聖地巡礼ポータルサイトです。

GitHubリポジトリ：[https://github.com/konbu-hub/AIR](https://github.com/konbu-hub/AIR)

---

## 🎵 『夏影 -Natsukage-』旋律 ＆ 和音・ピアノ打弦サウンドの完全再構築

1. **楽曲を『夏影』一本に特化**
   - 他の楽曲選択を排し、サイト全体で観鈴のテーマ『夏影』の愛と切なさだけに集中できるよう統一。

2. **F Major (ヘ長調) 正確なスコア ＆ テンポ・リズムチューニング**
   - 原曲の正確な旋律 (`F5 - G5 - A5〜〜 D6〜〜〜` / `C6 - Bb5 - A5〜〜 F5〜〜〜` 等) とテンポ (BPM 100) を徹底解析しスコア化。

3. **ピアノのアタック ＆ ベース伴奏アルペジオの多重合成**
   - 単音オシレーターではなく、低音部ベース和音 (`Bb3`, `C4`, `D3` 等) の裏打ちアルペジオと、グランドピアノ特有の倍音・フィルターエンベロープ（アタック 12ms / 自然な長いDecay減衰）を重ね合わせることで、Web Audio APIで本物のアコースティックピアノ風の澄み渡るサウンドをリアルタイム合成。

---

## 🎨 AIR世界観 ＆ パッションデザイン一覧

### 1. AIRの世界観を再解釈したオリジナルビジュアルアセットの統合
- **青空と舞い散る羽のキービジュアル**: `/images/hero_sky.png`
- **真夏の堤防と少女の残像**: `/images/misuzu_sea.png`
- **煙樹ヶ浜の夕焼けと夏影**: `/images/sunset_beach.png`
- **白崎海岸と1000年の天空神話**: `/images/shirasaki_sky.png`

### 2. 画面全体に舞い散る白い羽根の粒子（Particulate）アニメーション
- スクリーンの背景で白い羽（🪶）が優しく舞い降りるキーフレームアニメーションを実装。

### 3. Vercel Serverless Dynamic Technology 連携
- [api/weather.js](file:///c:/Users/konbu/Antigravity/AIR/api/weather.js) : 聖地・和歌山県美浜町（煙樹ヶ浜）の現在のリアルタイム天気、気温、風速、および『夏影』撮影の「本日の日の入り時刻」を動的に取得。

---

## 検証結果
- `npm run build` による検証完了。
- GitHub `https://github.com/konbu-hub/AIR.git` (main) へ修正完了コードをプッシュ済み。
