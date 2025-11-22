# 部署指南 - 让手机在任何网络都能访问

## 方案 1: 使用 Cloudflare Tunnel (推荐，免费)

### 安装 Cloudflare Tunnel
```bash
# macOS
brew install cloudflare/cloudflare/cloudflared

# 或者直接下载
# https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/
```

### 运行 Tunnel
```bash
cloudflared tunnel --url http://localhost:3000
```

这会生成一个公网 URL，例如：`https://xxxx-xxxx-xxxx.trycloudflare.com`

## 方案 2: 部署到 Vercel (永久免费，推荐生产环境)

### 步骤：
1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 构建项目：
```bash
npm run build
```

3. 部署：
```bash
vercel
```

4. 按照提示操作，Vercel 会给你一个公网 URL

### 环境变量配置
在 Vercel 项目设置中添加：
- `GEMINI_API_KEY` = 你的 API Key

## 方案 3: 部署到 Netlify (永久免费)

### 步骤：
1. 安装 Netlify CLI：
```bash
npm i -g netlify-cli
```

2. 构建项目：
```bash
npm run build
```

3. 部署：
```bash
netlify deploy --prod --dir=dist
```

### 环境变量配置
在 Netlify 项目设置中添加：
- `GEMINI_API_KEY` = 你的 API Key

## 方案 4: 使用 ngrok (简单快速)

### 安装：
```bash
brew install ngrok
# 或访问 https://ngrok.com/ 注册并下载
```

### 运行：
```bash
ngrok http 3000
```

## 注意事项

⚠️ **重要**：如果使用内网穿透工具（localtunnel、ngrok、cloudflare tunnel），API Key 会暴露在客户端代码中，存在安全风险。

✅ **推荐**：对于生产环境，使用 Vercel 或 Netlify，它们支持服务端环境变量，更安全。

