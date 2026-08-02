// 1日〜15日動的プラン生成 ＆ 神奈川発の交通・費用最適化アルゴリズム

export const TRANSPORT_MODES = {
  shinkansen: {
    id: "shinkansen",
    name: "最速・快適モード [東海道新幹線 ＋ 特急くろしお ＋ レンタカー]",
    desc: "新横浜/品川から新大阪経由で御坊へ。最も移動時間を短縮し現地での時間を最大化する王道ルート。",
    baseCostOneWay: 18500, // 片道交通費目安
    timeFromKanagawaHours: 4.0,
    carRentPerDay: 7000,
    recommendedFor: "社会人・時間効率重視・車移動で快適にロケ地を巡りたい方"
  },
  nightBus: {
    id: "nightBus",
    name: "コスパ・学生モード [夜行高速バス ＋ カーシェア/コミュニティバス]",
    desc: "横浜/新宿から夜行バスで大阪/和歌山へ。宿泊費1泊分を浮かせつつリーズナブルに巡るエコノミールート。",
    baseCostOneWay: 7500,
    timeFromKanagawaHours: 9.0,
    carRentPerDay: 4500,
    recommendedFor: "学生・費用を抑えたい方・朝一番から現地に立ちたい方"
  },
  seishun18: {
    id: "seishun18",
    name: "ロマン・旅人モード [JR在来線乗り継ぎ ＋ レンタサイクル/徒歩]",
    desc: "往人のように東海道本線・紀勢本線を普通列車でゆっくり下る旅。AIRの世界観にどっぷり浸る旅情ルート。",
    baseCostOneWay: 2410, // 青春18きっぷ1回分相当
    timeFromKanagawaHours: 11.5,
    carRentPerDay: 1000, // レンタサイクル等
    recommendedFor: "ロマン派オタク・時間を気にせず流れる雲を見ながら移動したい方"
  }
};

/**
 * ユーザーが指定した日数(1〜15日)に基づき、動的に最適な巡礼スケジュールと概算費用のシミュレーションを生成する
 */
export function generateFlexiblePlan(days = 3, transportModeKey = "shinkansen") {
  const numDays = Math.max(1, Math.min(15, parseInt(days) || 3));
  const transport = TRANSPORT_MODES[transportModeKey] || TRANSPORT_MODES.shinkansen;

  // 基本コスト計算
  const roundTripTransport = transport.baseCostOneWay * 2;
  const totalCarRent = transport.carRentPerDay * numDays;
  const hotelPerNight = 8000;
  const nights = Math.max(0, numDays - 1);
  const totalHotel = nights * hotelPerNight;
  const estTotalCost = roundTripTransport + totalCarRent + totalHotel;

  // 日数に応じたタイトルとコンセプトの自動生成
  let planTitle = "";
  let conceptText = "";
  let itinerary = [];

  if (numDays === 1) {
    planTitle = "【弾丸日帰り】和歌山・美浜町ピンポイント聖地巡礼";
    conceptText = "神奈川を早朝出発し、新幹線と特急くろしおで御坊へ直行。煙樹ヶ浜、バス停、吉原堤防を夕暮れまで濃縮して駆け抜ける超特急プラン。";
    itinerary = [
      {
        day: 1,
        title: "Day 1: 奇跡の1日 - 煙樹ヶ浜の夕空に逢いに行く",
        events: [
          "06:30 - 新横浜駅より東海道新幹線「のぞみ」乗車",
          "08:45 - 新大阪駅にてJR特急「くろしお」にお乗り換え",
          "10:30 - 御坊駅到着。駅前でレンタカーをピックアップ",
          "11:00 - 浜の瀬バス停 ＆ 武田商店自販機巡礼（どろり濃いジュースを購入）",
          "12:30 - 美浜町内で海の幸ランチ（シラス丼など）",
          "14:00 - 逢宕神社（石段登攀 ＆ 境内から美浜の海を見下ろす）",
          "16:00 - 煙樹ヶ浜へ移動。松林と砂利浜を散策",
          "17:30 - 煙樹ヶ浜で紀伊水道に沈む黄金〜茜色の夕焼けを撮影 (AIRキービジュアル再現)",
          "19:00 - 御坊駅でレンタカー返却。特急くろしおで新大阪へ",
          "22:30 - 新横浜 / 神奈川帰着"
        ]
      }
    ];
  } else if (numDays === 2) {
    planTitle = "【2日間】和歌山美浜町 ＆ 由良町白崎海岸 聖地集中コース";
    conceptText = "和歌山の日高エリアに絞り込み、美浜町の日常スポットと由良町の白崎海岸を完全網羅。夜は和歌山の温泉で余韻に浸る王道1泊2日。";
    itinerary = [
      {
        day: 1,
        title: "Day 1: 美浜町の日常と煙樹ヶ浜の黄昏",
        events: [
          "07:30 - 新横浜駅出発 → 新大阪経由で11:30 御坊駅着",
          "12:00 - 御坊駅周辺で紀州ラーメンの昼食",
          "13:30 - 吉原地区の堤防 ＆ 武田商店自販機 ＆ 浜の瀬バス停巡礼",
          "15:30 - 逢宕神社・美浜町立松洋中学校周辺散策",
          "17:00 - 煙樹ヶ浜で波音を聴きながら夕暮れのグラデーション撮影",
          "19:30 - 御坊市内または白浜温泉の旅館にチェックイン。海の幸を堪能"
        ]
      },
      {
        day: 2,
        title: "Day 2: 由良町・白崎海岸の白い岩肌と帰路",
        events: [
          "09:00 - 宿を出発。海岸線をドライブしながら由良町へ",
          "10:00 - 白崎海岸 / 白崎海洋公園（白い石灰岩と青空の1000年神話スポット）",
          "13:00 - 道の駅でしらす丼・和歌山みかんスイーツ",
          "15:00 - 有田/海南周辺の紀州の歴史スポット立ち寄り",
          "17:00 - 和歌山駅または御坊駅にてレンタカー返却",
          "20:30 - 神奈川帰着"
        ]
      }
    ];
  } else if (numDays === 3) {
    planTitle = "【3日間・王道】AIR聖地コンプリート ＆ ノスタルジック紀伊半島旅";
    conceptText = "美浜町、由良町白崎海岸に加え、光の向き（朝霧・昼の青空・夕焼け）を計算して撮影・散策する、ゆとりと感動に満ちた最もおすすめの3日間。";
    itinerary = [
      {
        day: 1,
        title: "Day 1: 神奈川発 → 和歌山美浜町へ。観鈴の通学路と海風",
        events: [
          "08:00 - 新横浜駅発 → 12:00 御坊駅着 ＆ レンタカー手配",
          "13:00 - 浜の瀬バス停、武田商店自販機、吉原堤防をゆったり巡礼",
          "16:00 - 煙樹ヶ浜で「鳥の詩」「夏影」のBGMを聴きながら夕空を鑑賞",
          "18:30 - 美浜町内の民宿/ホテルに宿泊"
        ]
      },
      {
        day: 2,
        title: "Day 2: 逢宕神社の石段 ＆ 白崎海岸の純白の世界",
        events: [
          "06:30 - 早朝の煙樹ヶ浜で朝靄と静寂の海岸線を散歩",
          "09:00 - 逢宕神社の急階段を上り、境内から朝の太平洋を一望",
          "11:30 - 由良町へドライブ → 白崎海岸の白い岩肌と絶景展望台",
          "15:00 - 紀伊由良周辺の古い町並み散策",
          "18:00 - 和歌山市内へ移動し、和歌山ラーメン ＆ 宿泊"
        ]
      },
      {
        day: 3,
        title: "Day 3: 和歌山城・Keyゆかりの地 ＆ 神奈川帰路",
        events: [
          "09:30 - 和歌山市内のゆかりの地や歴史スポットをめぐる",
          "13:00 - 新大阪駅にてお土産（蓬莱の豚まん・赤福など）購入",
          "16:00 - 東海道新幹線で神奈川へ"
        ]
      }
    ];
  } else if (numDays >= 4 && numDays <= 5) {
    planTitle = `【${numDays}日間】和歌山美浜町 ＆ 兵庫余部鉄橋 2大聖地縦断プレミアム`;
    conceptText = "和歌山（美浜町・由良町）の日常と海の世界観から、兵庫県但馬（余部鉄橋・浜坂・湯村温泉）の日本海ノスタルジーまで、AIRのアニメと原作の2大拠点を完全踏破する感動のプラン。";
    itinerary = [
      {
        day: 1,
        title: "Day 1: 和歌山・美浜町聖地網羅（煙樹ヶ浜・バス停・自販機）",
        events: [
          "神奈川から新幹線・くろしおで御坊着。美浜町内の主要ロケーションを撮影"
        ]
      },
      {
        day: 2,
        title: "Day 2: 由良町白崎海岸 ＆ 大阪/兵庫へ北上ドライブ",
        events: [
          "白崎海岸の白い岩肌を鑑賞後、特急で兵庫県・姫路または城崎温泉エリアへ移動"
        ]
      },
      {
        day: 3,
        title: "Day 3: 兵庫・余部鉄橋（あまるべヴィアディクト） ＆ 諸寄海岸",
        events: [
          "JR山陰本線 余部駅直結「空の駅」より、日本海を見下ろす大パノラマとアニメAIRの旅情カットを体験"
        ]
      },
      {
        day: 4,
        title: `Day 4${numDays === 5 ? ' & Day 5' : ''}: 但馬温泉郷での湯浴み ＆ 京都京アニゆかりの地経由で帰路`,
        events: [
          "湯村温泉・城崎温泉で旅の疲れを癒やし、京都経由で新幹線にて神奈川帰着"
        ]
      }
    ];
  } else {
    // 6日〜15日 グランドプラン
    planTitle = `【${numDays}日間】GRAND AIR PILGRIMAGE - 1000年の夏を追体験する究極グランドツアー`;
    conceptText = `15日間に及ぶ圧巻の滞在型巡礼旅。和歌山・美浜町に連泊して朝・昼・夕・夜の全撮影構図を完全制覇。兵庫但馬、京都、さらにはKey作品のルーツ（Kanon, CLANNAD）の関西全域ロケーションまで網羅する人生観が変わる旅程。`;
    itinerary = Array.from({ length: numDays }, (_, i) => {
      const d = i + 1;
      if (d <= 3) {
        return {
          day: d,
          title: `Day ${d}: 和歌山・美浜町ドゥエル（煙樹ヶ浜、バス停、自販機、逢宕神社、松洋中学を時間帯別に深度撮影）`,
          events: [`美浜町の光の表情（早朝の朝霧、正午の青空、黄昏、星空）をレンズに収める`]
        };
      } else if (d <= 6) {
        return {
          day: d,
          title: `Day ${d}: 由良町白崎海岸・紀伊半島西海岸の風と波`,
          events: [`白崎海岸・御坊・海南・有田の歴史と自然景観を巡る`]
        };
      } else if (d <= 10) {
        return {
          day: d,
          title: `Day ${d}: 兵庫但馬エリア（余部鉄橋、諸寄海岸、浜坂、湯村温泉）`,
          events: [`山陰本線の鉄橋と日本海の水平線。往人の旅路を追体験`]
        };
      } else {
        return {
          day: d,
          title: `Day ${d}: 京都アニメーションゆかりの地 ＆ Key関西ロケーション巡礼`,
          events: [`京都、大阪、神戸等のKey作品関連スポットを網羅して完璧な夏をしめくくる`]
        };
      }
    });
  }

  return {
    numDays,
    planTitle,
    conceptText,
    transport,
    estTotalCost,
    roundTripTransport,
    totalCarRent,
    totalHotel,
    itinerary
  };
}
