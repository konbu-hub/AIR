# AIR (Key) 聖地巡礼コンプリートガイド ＆ フレキシブルプランニングシステム 実装計画

## 概要
2000年代初頭のKey金字塔作品『AIR』の聖地巡礼（和歌山県美浜町・由良町、兵庫県香美町余部等）において、ユーザーが休日日数（**1日〜15日までスライダーや数値入力で自由自在に指定可能**）に応じた最適な旅程・交通手段・コストシミュレーションを提供し、かつ作中アニメ/ゲームのシーンと現実の現場写真を深い長文考察とともに比較表示する、オタクの熱量に満ちた聖地巡礼ポータルサイトを構築します。

デザインは**2000年〜2005年頃の熱狂的なオタク個人ファンサイト/攻略サイトのノスタルジックなエモーショナルさ**（枠線テーブル、アクセスカウンター、MIDI風BGMプレイヤー、ドット調アクセント）と、**現代最高峰のインタラクティブUI/UX**（レスポンシブ、リアルタイムプランシミュレーション、ダイナミックマップ、シーン比較ビューア）を融合させます。

---

## ユーザーレビュー確認事項
> [!IMPORTANT]
> 1. **完全自由な日数選択（1日〜15日＋ダイナミック生成）**: 
>    2日/3日/4日/5日/10日等のプリセット切り替えに加え、ユーザーが**1日〜15日**の間で自由な日数をスライダーや数値入力で選択でき、日数に応じて「弾丸日帰り」「和歌山集中」「兵庫・但馬縦断」「京都京アニ・Keyロケーション網羅」「15日間じっくり滞在・全撮影アングル完全制覇グランドツアー」など、最適なタイムスケジュールと交通手段・予算をリアルタイムに自動計算・提案します。
> 2. **デザインテイスト**: 2000-2005年代の個人ファンサイト（青と白のグラデーション、枠線テーブル、アクセスカウンター、キリ番、BBS風UI）を意識したエモーショナルなデザインですが、現代のブラウザやスマートフォンでも極めて快適に動作する完全レスポンシブなReact/Viteシングルページアプリケーションとして実装します。
> 3. **聖地データ・シーン解説**: 和歌山県美浜町（煙樹ヶ浜、バス停、自販機・堤防、逢宕神社等）、由良町（白崎海岸）、兵庫県香美町（余部鉄橋）等の作品における重要シーン・名台詞・演出・長文考察を網羅しています。

---

## 主な機能仕様

### 1. 2000-2005年代オタクファンサイト風デザイン＆エモーショナルパーツ
- **クラシックヘッダー＆アクセスカウンター**: 「YOU ARE 007341st VISITOR! / キリ番報告はBBSまで」等のノスタルジックなギミック。
- **Web Audio BGMプレイヤー**: 『夏影』『鳥の詩』をイメージした8bit/チップチューン風BGMをWeb Audio APIでリアルタイム生成・再生可能。
- **レトロフレームテーブル＆タブ**: ネイビー（#06142E）と海青（#1B4965）、砂浜の生成り色（#FFFDF8）を基調とした、目にも鮮やかでノスタルジックなデザイン。

### 2. 1日〜15日対応フレキシブルプラン・シミュレーター
- **ダイナミック日数スライダー/入力（1日〜15日）**:
  - 指定された日数に応じて、日ごとの訪問スポット・移動の最適化・撮影時間帯（早朝・昼・夕焼け・星空）を動的組み立て。
- **神奈川（関東）発の交通最適化**:
  - **最速・快適モード**: 東海道新幹線＋特急くろしお＋現地レンタカー
  - **コスパ・学生モード**: 夜行高速バス＋現地カーシェア/コミュニティバス
  - **ロマン・青春18きっぷモード**: 在来線乗り継ぎ＋レンタサイクル
- **詳細タイムスケジュール＆概算費用**: 移動費、レンタカー代、宿泊目安代をリアルタイム表示。

### 3. シーン比較＆熱量長文考察データベース
- **アニメ/ゲームシーンと現実現場の写真・位置情報マッピング**:
  - 「煙樹ヶ浜（ゴールデンチキンと観鈴の海）」「浜の瀬バス停」「吉原の自販機と堤防」「逢宕神社」「白崎海岸（夏影の青と白の幻影）」「余部鉄橋（空へ続く線路）」
- **深みのある長文考察**: 作中ストーリー（DREAM編 / SUMMER編 / AIR編）の文脈、観鈴と往人の対話、BGMとの連動、演出の意図を熱量高く解説。

### 4. インタラクティブ聖地マップ＆カスタム行程チェックリスト
- ユーザーが行きたい聖地にチェックを入れると、自分だけの聖地巡礼チェックリストおよび想定所要時間がリアルタイム算出される機能。

---

## 変更・作成予定のファイル

- `[NEW]` [index.html](file:///c:/Users/konbu/Antigravity/AIR/index.html) - レトロオタクサイト風メタ情報・エントリポイント
- `[NEW]` [package.json](file:///c:/Users/konbu/Antigravity/AIR/package.json) - React + Vite + Lucide Icons などの依存定義
- `[NEW]` [vite.config.js](file:///c:/Users/konbu/Antigravity/AIR/vite.config.js) - Viteビルド設定
- `[NEW]` [src/index.css](file:///c:/Users/konbu/Antigravity/AIR/src/index.css) - 2000年代風テーブル・ネオン・グラデーション・レトロデザインシステムCSS
- `[NEW]` [src/data/pilgrimageData.js](file:///c:/Users/konbu/Antigravity/AIR/src/data/pilgrimageData.js) - 聖地スポット、長文考察、アニメシーン比較データ
- `[NEW]` [src/data/planData.js](file:///c:/Users/konbu/Antigravity/AIR/src/data/planData.js) - 1日〜15日フレキシブル旅程生成アルゴリズム＆交通費シミュレーション
- `[NEW]` [src/utils/audioSynth.js](file:///c:/Users/konbu/Antigravity/AIR/src/utils/audioSynth.js) - Web Audio APIによる『夏影』風ノスタルジックBGM生成エンジン
- `[NEW]` [src/components/Header.jsx](file:///c:/Users/konbu/Antigravity/AIR/src/components/Header.jsx) - アクセスカウンター、BGMプレイヤー、レトロロゴ
- `[NEW]` [src/components/PlanSelector.jsx](file:///c:/Users/konbu/Antigravity/AIR/src/components/PlanSelector.jsx) - 1〜15日ダイナミック日数選択＆交通手段比較
- `[NEW]` [src/components/SceneViewer.jsx](file:///c:/Users/konbu/Antigravity/AIR/src/components/SceneViewer.jsx) - シーン比較＆熱量長文考察モーダル・カード
- `[NEW]` [src/components/SpotMapList.jsx](file:///c:/Users/konbu/Antigravity/AIR/src/components/SpotMapList.jsx) - スポット一覧＆チェックリスト
- `[NEW]` [src/components/BBSCommentSection.jsx](file:///c:/Users/konbu/Antigravity/AIR/src/components/BBSCommentSection.jsx) - 2000年代BBS風交流・巡礼メモセクション
- `[NEW]` [src/App.jsx](file:///c:/Users/konbu/Antigravity/AIR/src/App.jsx) - 全体レイアウトと状態管理

---

## 検証計画

### 自動テスト / ビルドチェック
- `npm run build` による構文・JSXエラーの検証。
- ノードサーバーでのプレビュー起動確認。

### 手動検証
- 1日〜15日の任意の日数選択で旅程が破綻なくダイナミック生成されるか。
- 交通手段の比較・概算費用算出が正確かつ見やすいか。
- シーン比較モーダルで長文解説と現場・作中イメージが綺麗に表示されるか。
- Web Audio BGMプレイヤーの再生・停止が機能するか。
