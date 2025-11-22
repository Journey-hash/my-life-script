#!/bin/bash
# 启动 localtunnel 创建公网访问链接

echo "正在启动 localtunnel..."
echo "请等待几秒钟，然后会显示公网访问链接"
echo ""

npx --yes localtunnel --port 3000

