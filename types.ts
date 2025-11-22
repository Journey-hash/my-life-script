export enum VibeType {
  HERO = 'HERO', // 热血漫
  COZY = 'COZY', // 松弛感
  DESTINY = 'DESTINY' // 宿命感
}

export interface ScriptRequest {
  goal: string;
  details: string;
  vibe: VibeType;
}

export interface ScriptResponse {
  title: string;
  content: string; // The main story
  quote: string; // The "golden sentence"
  imageKeyword: string; // English keyword for image generation
  date: string; // e.g., "October 15, 2026"
}

export const VIBE_CONFIG = {
  [VibeType.HERO]: {
    label: "热血主角",
    icon: "🔥",
    desc: "逆袭、打脸、高燃",
    color: "from-red-500 to-orange-500"
  },
  [VibeType.COZY]: {
    label: "极简松弛",
    icon: "☕️",
    desc: "平静、水到渠成、岁月静好",
    color: "from-amber-200 to-orange-100"
  },
  [VibeType.DESTINY]: {
    label: "宿命显化",
    icon: "🔮",
    desc: "宇宙指引、注定发生",
    color: "from-purple-500 to-indigo-500"
  }
};
