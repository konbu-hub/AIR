// 全国どこからでも聖地巡礼！出発地選択 ＆ 1日〜15日動的プラン最適化アルゴリズム

export const ORIGIN_LOCATIONS = {
  kanagawa: {
    id: "kanagawa",
    name: "神奈川・東京 (関東エリア)",
    shinkansenRoute: "新横浜/東京 → [東海道新幹線] → 新大阪 → [特急くろしお] → 御坊駅",
    flightRoute: "羽田空港 → [飛行機] → 南紀白浜空港 または 関西国際空港 → [レンタカー/特急]",
    highwayBusRoute: "横浜/新宿 → [夜行高速バス] → 新大阪/和歌山駅",
    oneWayHours: 4.0,
    roundTripCost: 37000,
    recommendedMode: "shinkansen"
  },
  nagoya: {
    id: "nagoya",
    name: "愛知・名古屋 (東海エリア)",
    shinkansenRoute: "名古屋駅 → [東海道新幹線] → 新大阪 → [特急くろしお] → 御坊駅",
    flightRoute: "車利用: 東名阪・伊勢湾岸・名神・阪和自動車道経由 (約3.5時間)",
    highwayBusRoute: "名古屋 → [高速バス] → 新大阪 → [特急くろしお]",
    oneWayHours: 3.0,
    roundTripCost: 22000,
    recommendedMode: "shinkansen"
  },
  kansai: {
    id: "kansai",
    name: "大阪・京都・兵庫 (関西近郊)",
    shinkansenRoute: "新大阪/天王寺/京都 → [特急くろしお / 紀州路快速] → 御坊駅",
    flightRoute: "車利用: 阪和自動車道・御坊IC下車すぐ (大阪市内から約1.5時間)",
    highwayBusRoute: "御坊南海バス / 紀勢本線普通列車",
    oneWayHours: 1.5,
    roundTripCost: 7000,
    recommendedMode: "shinkansen"
  },
  fukuoka: {
    id: "fukuoka",
    name: "福岡・博多 (九州エリア)",
    shinkansenRoute: "博多駅 → [山陽新幹線] → 新大阪 → [特急くろしお] → 御坊駅",
    flightRoute: "福岡空港 → [飛行機] → 関西国際空港 (約1.2h) → [特急くろしお] → 御坊",
    highwayBusRoute: "博多 → [夜行バス] → 大阪",
    oneWayHours: 4.5,
    roundTripCost: 42000,
    recommendedMode: "shinkansen"
  },
  sapporo: {
    id: "sapporo",
    name: "北海道・札幌 (北海道エリア)",
    shinkansenRoute: "新千歳空港 → [飛行機] → 関西国際空港 (約2h) → [特急くろしお/レンタカー]",
    flightRoute: "新千歳空港 → [直行便/羽田経由] → 南紀白浜空港 → [レンタカーで美浜町へ40分]",
    highwayBusRoute: "飛行機 ＋ 関空リムジンバス ＋ 特急くろしお",
    oneWayHours: 4.5,
    roundTripCost: 48000,
    recommendedMode: "flightRoute"
  },
  sendai: {
    id: "sendai",
    name: "宮城・仙台 (東北エリア)",
    shinkansenRoute: "仙台駅 → [東北新幹線] → 東京 → [東海道新幹線] → 新大阪 → [くろしお]",
    flightRoute: "仙台空港 → [飛行機] → 伊丹空港 / 関空 (約1.5h) → [特急くろしお]",
    highwayBusRoute: "仙台 → [夜行バス] → 新宿/東京 → [新幹線]",
    oneWayHours: 5.0,
    roundTripCost: 45000,
    recommendedMode: "shinkansen"
  },
  hiroshima: {
    id: "hiroshima",
    name: "広島・岡山 (中国エリア)",
    shinkansenRoute: "広島/岡山駅 → [山陽新幹線] → 新大阪 → [特急くろしお] → 御坊駅",
    flightRoute: "車利用: 山陽自動車道 → 阪和自動車道",
    highwayBusRoute: "広島 → [高速バス] → 大阪 → [くろしお]",
    oneWayHours: 3.5,
    roundTripCost: 26000,
    recommendedMode: "shinkansen"
  }
};

export const TRANSPORT_MODES = {
  shinkansen: {
    id: "shinkansen",
    name: "最速・新幹線 ＋ 特急くろしお ＋ 現地レンタカー",
    desc: "主要都市から新幹線・特急くろしおで御坊へ直行。移動時間を最小化し聖地での時間を最大化する王道ルート。",
    carRentPerDay: 7000,
    recommendedFor: "移動時間重視・現地で快適に複数スポットを巡りたい方"
  },
  nightBus: {
    id: "nightBus",
    name: "コスパ・高速バス ＋ カーシェア/コミュニティバス",
    desc: "夜行バス等で大阪・和歌山入り。宿泊費1泊分を浮かせつつ朝一番から煙樹ヶ浜に立てるエコノミールート。",
    carRentPerDay: 4500,
    recommendedFor: "費用を抑えたい方・朝一番の静寂の海に立ちたい方"
  },
  seishun18: {
    id: "seishun18",
    name: "ロマン・JR在来線乗り継ぎ ＋ レンタサイクル/徒歩",
    desc: "往人のように在来線を乗り継ぎゆっくり流れる雲を見ながら移動する旅情あふれるルート。",
    carRentPerDay: 1000,
    recommendedFor: "時間にとらわれず風や景色を味わいながら旅を楽しみたい方"
  }
};

/**
 * 出発地・日数・交通手段に基づき、動的最適ルート・タイムスケジュール・概算費用を自動算出
 */
export function generateFlexiblePlan(days = 3, originKey = "kanagawa", transportModeKey = "shinkansen") {
  const numDays = Math.max(1, Math.min(15, parseInt(days) || 3));
  const origin = ORIGIN_LOCATIONS[originKey] || ORIGIN_LOCATIONS.kanagawa;
  const transport = TRANSPORT_MODES[transportModeKey] || TRANSPORT_MODES.shinkansen;

  // 出発地に基づく交通費計算
  let roundTripTransport = origin.roundTripCost;
  if (transportModeKey === 'nightBus') roundTripTransport = Math.round(origin.roundTripCost * 0.5);
  if (transportModeKey === 'seishun18') roundTripTransport = Math.round(origin.roundTripCost * 0.3);

  const totalCarRent = transport.carRentPerDay * numDays;
  const hotelPerNight = 8000;
  const nights = Math.max(0, numDays - 1);
  const totalHotel = nights * hotelPerNight;
  const estTotalCost = roundTripTransport + totalCarRent + totalHotel;

  let planTitle = `【${origin.name}発】${numDays}日間 AIR聖地巡礼最適化モデルプラン`;
  let conceptText = `${origin.name}からの最適ルート (${origin.shinkansenRoute}) を使用。所要時間片道約${origin.oneWayHours}時間で和歌山・美浜町の煙樹ヶ浜や白崎海岸、余部鉄橋を快適に巡るおすすめ旅程。`;

  let itinerary = [];

  if (numDays === 1) {
    itinerary = [
      {
        day: 1,
        title: `Day 1: ${origin.name}発 奇跡の日帰り弾丸巡礼 - 煙樹ヶ浜の夕空へ`,
        events: [
          `07:00 - ${origin.name}より出発 (${origin.shinkansenRoute})`,
          `11:00 - 御坊駅到着。駅前でレンタカーをピックアップ`,
          `11:30 - 浜の瀬バス停 ＆ 武田商店自販機巡礼（どろり濃いジュースを購入）`,
          `13:00 - 美浜町吉原地区の堤防散歩 ＆ 逢宕神社石段登攀`,
          `16:00 - 煙樹ヶ浜へ移動。松林と砂利浜を散策`,
          `17:30 - 煙樹ヶ浜で紀伊水道に沈む茜色の夕焼けを鑑賞 (『夏影』ゴールデンタイム)`,
          `19:00 - 御坊駅でレンタカー返却。特急くろしおで帰路へ`,
          `22:30 - ${origin.name} 帰着`
        ]
      }
    ];
  } else if (numDays === 2) {
    itinerary = [
      {
        day: 1,
        title: `Day 1: ${origin.name} → 和歌山美浜町へ。観鈴の通学路と煙樹ヶ浜の夕暮れ`,
        events: [
          `08:00 - ${origin.name}出発 → 12:00 御坊駅到着・レンタカー手配`,
          `13:00 - 浜の瀬バス停、武田商店自販機、吉原堤防を巡礼`,
          `15:30 - 逢宕神社境内から美浜の海を一望`,
          `17:00 - 煙樹ヶ浜で波音とヒグラシの声の中で夕空撮影`,
          `19:00 - 美浜町または白浜温泉の宿にチェックイン`
        ]
      },
      {
        day: 2,
        title: "Day 2: 由良町・白崎海岸の白い岩肌 ＆ 帰路",
        events: [
          "09:00 - 宿を出発し、海岸線をドライブして由良町へ",
          "10:00 - 白崎海岸 (日本のエーゲ海・1000年の天空神話ロケーション)",
          "13:00 - 道の駅で紀州の海の幸ランチ",
          "16:00 - 御坊駅/和歌山駅にてレンタカー返却",
          `20:00 - ${origin.name} 帰着`
        ]
      }
    ];
  } else {
    // 3日〜15日プラン
    itinerary = [
      {
        day: 1,
        title: `Day 1: ${origin.name} → 和歌山美浜町（煙樹ヶ浜、バス停、自販機堤防）`,
        events: [`${origin.name}からのアクセス (${origin.shinkansenRoute})。美浜町の日常スポットを丁寧に撮影`]
      },
      {
        day: 2,
        title: "Day 2: 逢宕神社の石段 ＆ 由良町白崎海岸の純白の世界",
        events: ["早朝の煙樹ヶ浜で朝霧鑑賞後、白崎海岸の巨大な石灰岩と青空を体験"]
      },
      {
        day: 3,
        title: `Day 3${numDays >= 4 ? `〜${numDays}` : ''}: 兵庫・余部鉄橋 ＆ 但馬温泉郷へ巡礼拡大`,
        events: ["JR山陰本線 余部鉄橋（空の駅）から日本海を望み、往人の旅路を追体験"]
      }
    ];
  }

  return {
    numDays,
    origin,
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
