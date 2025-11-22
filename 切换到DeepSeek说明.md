# 🔄 切换到 DeepSeek API 说明

## ✅ 已完成

- ✅ 创建了 `services/deepseekService.ts` 文件
- ✅ 更新了 `App.tsx` 使用 DeepSeek 服务
- ✅ 更新了 `vite.config.ts` 环境变量配置
- ✅ 更新了 GitHub Actions 工作流配置
- ✅ 构建测试成功

---

## 📋 接下来需要你完成的步骤

### 步骤 1：获取 DeepSeek API Key

1. **访问 DeepSeek 官网**
   - 访问：https://platform.deepseek.com
   - 注册/登录账号

2. **创建 API Key**
   - 在控制台中找到 API Key 管理
   - 创建新的 API Key
   - 复制保存（类似：`sk-xxxxx...`）

---

### 步骤 2：配置本地环境变量

1. **编辑 `.env.local` 文件**
   ```bash
   # 将原来的 GEMINI_API_KEY 改为 DEEPSEEK_API_KEY
   DEEPSEEK_API_KEY=你的DeepSeek_API_Key
   ```

2. **或者创建新的 `.env.local`**
   ```bash
   DEEPSEEK_API_KEY=sk-xxxxx...
   ```

---

### 步骤 3：配置 GitHub Secrets（如果已部署）

1. **访问 GitHub 仓库**
   ```
   https://github.com/Journey-hash/my-life-script
   ```

2. **进入 Settings → Secrets and variables → Actions**

3. **删除旧的 Secret**（如果有 `GEMINI_API_KEY`）

4. **添加新的 Secret**
   - 点击 "New repository secret"
   - **Name**: `DEEPSEEK_API_KEY`
   - **Secret**: 你的 DeepSeek API Key
   - 点击 "Add secret"

5. **重新触发部署**
   - 在 Actions 标签中，手动触发部署
   - 或推送新的代码

---

## 🔍 验证

### 本地测试

1. **确保 `.env.local` 中配置了 `DEEPSEEK_API_KEY`**

2. **启动开发服务器**
   ```bash
   npm run dev
   ```

3. **测试功能**
   - 打开 http://localhost:3000
   - 输入愿望，测试生成功能

---

## 📝 主要变更

### 文件变更

1. **新增文件**
   - `services/deepseekService.ts` - DeepSeek API 服务

2. **修改文件**
   - `App.tsx` - 导入改为 `deepseekService`
   - `vite.config.ts` - 环境变量改为 `DEEPSEEK_API_KEY`
   - `.github/workflows/deploy.yml` - GitHub Actions 环境变量

### API 差异

- **DeepSeek API** 使用 OpenAI 兼容接口
- **端点**: `https://api.deepseek.com/v1/chat/completions`
- **模型**: `deepseek-chat`
- **响应格式**: JSON Object

---

## ❓ 常见问题

### Q: DeepSeek API 需要付费吗？
A: DeepSeek 提供免费额度，具体查看官网。

### Q: 如何切换回 Gemini？
A: 将 `App.tsx` 中的导入改回 `geminiService`，并配置 `GEMINI_API_KEY`。

### Q: API Key 格式是什么？
A: DeepSeek API Key 通常以 `sk-` 开头。

---

## 💡 提示

- DeepSeek API 在国内访问通常比 Gemini 更稳定
- 确保 API Key 安全，不要提交到代码仓库
- 如果遇到问题，检查浏览器控制台的错误信息

