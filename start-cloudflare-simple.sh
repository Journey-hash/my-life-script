#!/bin/bash
# 使用 npx 运行 Cloudflare Tunnel（最简单的方法）

echo "🌐 正在启动 Cloudflare Tunnel..."
echo ""
echo "请等待几秒钟，cloudflared 会自动下载并启动..."
echo ""

# 使用 npx 运行，不需要安装
npx --yes cloudflared tunnel --url http://localhost:3000

