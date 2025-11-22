#!/bin/bash
# 使用 Cloudflare Tunnel 创建公网访问

echo "🌐 正在启动 Cloudflare Tunnel..."
echo ""

# 检查是否安装了 cloudflared
if ! command -v cloudflared &> /dev/null; then
    echo "📦 正在安装 cloudflared..."
    if command -v brew &> /dev/null; then
        brew install cloudflare/cloudflare/cloudflared
    else
        echo "❌ 请先安装 Homebrew，然后运行: brew install cloudflare/cloudflare/cloudflared"
        echo "或者访问: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/"
        exit 1
    fi
fi

echo "✅ cloudflared 已安装"
echo ""
echo "正在创建公网访问链接..."
echo "请等待几秒钟..."
echo ""

cloudflared tunnel --url http://localhost:3000

