# 🔧 修复 API Key 问题

## 问题分析

你看到的错误提示 "GEMINI_API_KEY" 说明：
1. **可能是浏览器缓存了旧版本**
2. **或者打开的是 GitHub Pages 的旧部署版本**

## 解决方案

### 方案 1：清除浏览器缓存（推荐）

1. **按 `Cmd + Shift + R`（Mac）或 `Ctrl + Shift + R`（Windows）**
   - 强制刷新页面，清除缓存

2. **或者清除浏览器缓存**
   - Chrome: 设置 → 隐私和安全 → 清除浏览数据
   - Safari: 开发 → 清空缓存

### 方案 2：重启开发服务器

如果是在本地测试：

1. **停止当前服务器**（如果正在运行）
   ```bash
   # 按 Ctrl + C 停止
   ```

2. **重新启动**
   ```bash
   npm run dev
   ```

3. **清除浏览器缓存后访问**
   - http://localhost:3000

### 方案 3：检查环境变量

确保 `.env.local` 文件内容正确：

```bash
DEEPSEEK_API_KEY=sk-你的API_Key
```

**注意**：
- 不要有空格
- 不要有引号
- 确保文件在项目根目录

### 方案 4：如果打开的是 GitHub Pages

如果打开的是部署后的链接（如 `https://Journey-hash.github.io/my-life-script/`）：

1. **需要更新 GitHub Secrets**
   - 访问：https://github.com/Journey-hash/my-life-script
   - Settings → Secrets and variables → Actions
   - 删除 `GEMINI_API_KEY`（如果有）
   - 添加 `DEEPSEEK_API_KEY` = 你的 DeepSeek API Key

2. **重新触发部署**
   - 推送新代码，或
   - 在 Actions 中手动触发部署

3. **等待部署完成后，清除浏览器缓存再访问**

---

## 验证步骤

1. **检查 `.env.local` 文件**
   ```bash
   cat .env.local
   ```
   应该显示：`DEEPSEEK_API_KEY=sk-...`

2. **重启开发服务器**
   ```bash
   npm run dev
   ```

3. **清除浏览器缓存后访问**
   - 按 `Cmd + Shift + R` 强制刷新

4. **测试功能**
   - 输入愿望，点击"寄往未来"
   - 应该不再报错

---

## 如果还是不行

请告诉我：
1. 你打开的是本地链接（localhost:3000）还是部署后的链接？
2. 浏览器控制台（F12）显示什么错误？
3. 是否已经重启了开发服务器？

