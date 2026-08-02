# AIR 聖地巡礼コンプリートガイド ＆ フレキシブルシステム 成果確認 (Walkthrough)

Keyの不朽の名作『AIR』を心から愛するファンのための、熱量と情熱に満ちた聖地巡礼ポータルサイトです。

GitHubリポジトリ：[https://github.com/konbu-hub/AIR](https://github.com/konbu-hub/AIR)

---

## 🎨 AIR世界観 ＆ パッションデザイン全面リニューアル内容

### 1. AIRの世界観を再解釈したオリジナルビジュアルアセットの統合
- **青空と舞い散る羽のキービジュアル**: `/images/hero_sky.png`
- **真夏の堤防と少女の残像**: `/images/misuzu_sea.png`
- **煙樹ヶ浜の夕焼けと夏影**: `/images/sunset_beach.png`
- **白崎海岸と1000年の天空神話**: `/images/shirasaki_sky.png`

### 2. 画面全体に舞い散る白い羽根の粒子（Particulate）アニメーション
- スクリーンの背景で白い羽（🪶）が優しく舞い降りるキーフレームアニメーションを実装。サイトを開いた瞬間にAIRの世界観へ没入できます。

### 3. 情緒あふれる縦書き名言語録 ＆ ガラスモルフィズムUI
- 「…ガオ。ガオって言った」「もう、ゴールしていいよね」「人は過去の思い出だけで生きていくことはできない…」などの名セリフを縦書き明朝体の演出で配置。

### 4. Vercel Serverless Dynamic Technology 連携
- [api/weather.js](file:///c:/Users/konbu/Antigravity/AIR/api/weather.js) : Vercel Serverless Function により、聖地・和歌山県美浜町（煙樹ヶ浜）の現在のリアルタイム天気、気温、風速、および『夏影』撮影のゴールデンタイムである「本日の日の入り時刻」を動的に取得・配信。

### 5. 1日〜15日対応ダイナミック旅程 ＆ 8-Bit Web Audio BGM
- 1日〜15日のフレキシブル日数調整＋神奈川発の交通費・タイムスケジュール動的シミュレーション。
- 観鈴のテーマ『夏影』および国歌『鳥の詩』風の8bitメロディ再生。

---

## 検証結果
- `npm run build` によるプログラミング・ビルド確認完了。
- GitHub `https://github.com/konbu-hub/AIR.git` (main) へ全アセット＆コードをアップデートプッシュ完了。
