#!/bin/bash
# 部署到 Vercel 的脚本

echo "🚀 开始部署到 Vercel..."
echo ""

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 正在安装 Vercel CLI..."
    npm install -g vercel
fi

# 构建项目
echo "🔨 正在构建项目..."
npm run build

# 部署
echo "🌐 正在部署到 Vercel..."
vercel --prod

echo ""
echo "✅ 部署完成！"
echo "📝 记得在 Vercel 项目设置中添加环境变量：GEMINI_API_KEY"

