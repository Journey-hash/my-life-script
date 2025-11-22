import { GoogleGenAI, Type } from "@google/genai";
import { ScriptRequest, ScriptResponse, VibeType } from "../types";

const getVibePrompt = (vibe: VibeType): string => {
  switch (vibe) {
    case VibeType.HERO:
      return "风格：热血漫男/女主风。用词要燃，强调“逆袭”、“打脸”和“不可思议”。即使所有人都不看好，但我做到了。";
    case VibeType.COZY:
      return "风格：极简松弛风 (Cozy)。用词要温柔，强调“值得”、“享受”、“水到渠成”和“被好运包围”。";
    case VibeType.DESTINY:
      return "风格：宿命感 (Destiny)。强调“这一切都是注定好的”，“宇宙帮你显化”，充满神秘感和感恩。";
    default:
      return "";
  }
};

export const generateLifeScript = async (request: ScriptRequest): Promise<ScriptResponse> => {
  // 在浏览器环境中，Vite 会将 process.env.API_KEY 替换为实际值
  // 注意：Vite 在构建时会替换 process.env.API_KEY，但在运行时需要使用 import.meta.env
  const apiKey = (import.meta.env.VITE_GEMINI_API_KEY || 
                  (typeof process !== 'undefined' && process.env?.API_KEY) ||
                  (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY)) as string | undefined;
  
  if (!apiKey || apiKey === 'your_api_key_here' || apiKey === 'undefined' || apiKey === 'null') {
    console.error("API Key 未配置或无效。当前值:", apiKey);
    throw new Error("API Key 未配置。请在 .env.local 文件中设置 GEMINI_API_KEY=你的API密钥");
  }

  // 验证 API Key 格式（Gemini API Key 通常以 AIza 开头）
  if (!apiKey.startsWith('AIza') && !apiKey.startsWith('ygen-')) {
    console.warn("API Key 格式可能不正确，通常应以 'AIza' 开头");
  }

  console.log("使用 API Key:", apiKey.substring(0, 10) + "...");

  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `
    你是一位擅长写“显化日记”和“成功学同人”的顶级网文作家。
    你的任务是根据用户的愿望，写一篇来自未来的日记。
    
    核心要求：
    1. **第一人称** ("我")。
    2. **完成时态** (仿佛事情已经发生)。
    3. **沉浸感**：极尽描摹感官细节（声音、光线、气味）。
    4. **结构**：
       - 开头：愿望实现那一刻的高光场景。
       - 中间：倒叙回顾备考/努力阶段的“至暗时刻”与“突破瞬间”。
       - 结尾：成功后的平静生活状态，鼓励过去的自己。
    5. **严禁**：不要说“你会...”，要说“我做到了...”。不要写成计划表。
    
    你需要返回 JSON 格式的数据。
  `;

  const userPrompt = `
    用户愿望：${request.goal}
    补充细节：${request.details || "无"}
    ${getVibePrompt(request.vibe)}
    
    请生成一篇约 600 字的日记。
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A catchy title for the diary entry, e.g., '关于我在2026年成功上岸这件事'" },
            content: { type: Type.STRING, description: "The full diary entry content, around 500-800 words." },
            quote: { type: Type.STRING, description: "The most inspiring/burning sentence from the text, suitable for a poster." },
            imageKeyword: { type: Type.STRING, description: "A single English keyword or short phrase describing the atmosphere image (e.g., 'library sunset', 'modern office view', 'mountain peak')." },
            date: { type: Type.STRING, description: "The imagined date of the diary entry (e.g., '2026年9月15日')." }
          },
          required: ["title", "content", "quote", "imageKeyword", "date"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as ScriptResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
