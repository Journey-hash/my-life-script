#!/bin/bash
# 启动公网访问（使用 localtunnel）

echo "🌐 正在启动 localtunnel 创建公网访问链接..."
echo ""
echo "请等待几秒钟，会显示一个公网 URL"
echo "例如: https://xxxx-xxxx-xxxx.loca.lt"
echo ""
echo "⚠️  注意：这个链接可以在任何网络（包括手机）访问"
echo "⚠️  每次运行可能会生成不同的链接"
echo ""

npx --yes localtunnel --port 3000

