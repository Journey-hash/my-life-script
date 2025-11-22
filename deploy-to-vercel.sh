#!/bin/bash
# 部署到 Vercel 的自动化脚本

echo "🚀 开始部署到 Vercel..."
echo ""

# 检查是否已构建
if [ ! -d "dist" ]; then
    echo "📦 正在构建项目..."
    npm run build
fi

echo ""
echo "🌐 开始部署到 Vercel..."
echo ""
echo "⚠️  注意：首次部署需要登录 Vercel"
echo "   1. 如果没有账号，会提示注册（免费）"
echo "   2. 登录后会自动部署"
echo ""

# 部署到 Vercel
npx vercel --prod

echo ""
echo "✅ 部署完成！"
echo ""
echo "📝 重要：部署后需要在 Vercel Dashboard 中配置环境变量："
echo "   1. 访问 https://vercel.com/dashboard"
echo "   2. 找到你的项目 → Settings → Environment Variables"
echo "   3. 添加: GEMINI_API_KEY = 你的 API Key"
echo "   4. 然后重新部署（在 Dashboard 中点击 Redeploy）"
echo ""

