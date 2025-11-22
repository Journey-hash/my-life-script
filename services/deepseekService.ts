import { ScriptRequest, ScriptResponse, VibeType } from "../types";

const getVibePrompt = (vibe: VibeType): string => {
  switch (vibe) {
    case VibeType.HERO:
      return "风格：热血漫男/女主风。用词要燃，强调\"逆袭\"、\"打脸\"和\"不可思议\"。即使所有人都不看好，但我做到了。";
    case VibeType.COZY:
      return "风格：极简松弛风 (Cozy)。用词要温柔，强调\"值得\"、\"享受\"、\"水到渠成\"和\"被好运包围\"。";
    case VibeType.DESTINY:
      return "风格：宿命感 (Destiny)。强调\"这一切都是注定好的\"，\"宇宙帮你显化\"，充满神秘感和感恩。";
    default:
      return "";
  }
};

export const generateLifeScript = async (request: ScriptRequest): Promise<ScriptResponse> => {
  // 获取 DeepSeek API Key
  // 在构建时，Vite 会将 process.env.DEEPSEEK_API_KEY 替换为实际值
  const apiKey = (typeof process !== 'undefined' && process.env?.DEEPSEEK_API_KEY) ||
                 (typeof process !== 'undefined' && process.env?.API_KEY) ||
                 (import.meta.env.VITE_DEEPSEEK_API_KEY) as string | undefined;
  
  if (!apiKey || apiKey === 'your_api_key_here' || apiKey === 'undefined' || apiKey === 'null') {
    console.error("API Key 未配置或无效。当前值:", apiKey);
    throw new Error("API Key 未配置。请设置 DEEPSEEK_API_KEY");
  }

  console.log("使用 DeepSeek API Key:", apiKey.substring(0, 10) + "...");

  const systemInstruction = `你是一位擅长写"显化日记"和"成功学同人"的顶级网文作家。
你的任务是根据用户的愿望，写一篇来自未来的日记。

核心要求：
1. **第一人称** ("我")。
2. **完成时态** (仿佛事情已经发生)。
3. **沉浸感**：极尽描摹感官细节（声音、光线、气味）。
4. **结构**：
   - 开头：愿望实现那一刻的高光场景。
   - 中间：倒叙回顾备考/努力阶段的"至暗时刻"与"突破瞬间"。
   - 结尾：成功后的平静生活状态，鼓励过去的自己。
5. **严禁**：不要说"你会..."，要说"我做到了..."。不要写成计划表。

你需要返回 JSON 格式的数据，包含以下字段：
- title: 标题
- content: 日记内容（约 500-800 字）
- quote: 最激励人心的句子
- imageKeyword: 描述氛围的英文关键词
- date: 日期（例如："2026年9月15日"）`;

  const userPrompt = `用户愿望：${request.goal}
补充细节：${request.details || "无"}
${getVibePrompt(request.vibe)}

请生成一篇约 600 字的日记，并以 JSON 格式返回，格式如下：
{
  "title": "标题",
  "content": "日记内容",
  "quote": "最激励人心的句子",
  "imageKeyword": "英文关键词",
  "date": "2026年9月15日"
}`;

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: systemInstruction
          },
          {
            role: 'user',
            content: userPrompt
          }
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' }
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`DeepSeek API 错误: ${response.status} ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) {
      throw new Error("DeepSeek API 未返回内容");
    }

    // 解析 JSON 响应
    let result: ScriptResponse;
    try {
      result = JSON.parse(content);
    } catch (parseError) {
      // 如果响应不是纯 JSON，尝试提取 JSON 部分
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        result = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("无法解析 AI 返回的 JSON 数据");
      }
    }

    // 验证必需字段
    if (!result.title || !result.content || !result.quote || !result.imageKeyword || !result.date) {
      throw new Error("AI 返回的数据不完整");
    }

    return result;
  } catch (error) {
    console.error("DeepSeek API Error:", error);
    throw error;
  }
};

