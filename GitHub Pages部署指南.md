# 🚀 GitHub Pages 部署指南（中国大陆可访问）

## 为什么选择 GitHub Pages？

- ✅ **免费** - 完全免费
- ✅ **国内访问相对稳定** - 比 Vercel 好很多
- ✅ **永久链接** - 格式：`https://username.github.io/repo-name/`
- ✅ **自动部署** - 推送代码自动更新

---

## 📋 完整部署步骤

### 步骤 1：创建 GitHub 仓库

1. 访问 https://github.com
2. 点击右上角 "+" → "New repository"
3. 填写：
   - **Repository name**: `my-life-script`（或你喜欢的名称）
   - **Description**: 可选
   - **Visibility**: 选择 **Public**（GitHub Pages 免费版需要公开）
4. 点击 "Create repository"

---

### 步骤 2：推送代码到 GitHub

在终端运行：

```bash
cd "/Users/lvcheng/Desktop/我的人生剧本-(my-life-script)"

# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/my-life-script.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

**注意**：如果提示输入用户名和密码，需要：
- 用户名：你的 GitHub 用户名
- 密码：使用 Personal Access Token（不是 GitHub 密码）
  - 生成 Token：GitHub → Settings → Developer settings → Personal access tokens → Generate new token
  - 权限选择：`repo`

---

### 步骤 3：配置 GitHub Pages

1. 在 GitHub 仓库页面，点击 **Settings**
2. 在左侧菜单找到 **Pages**
3. 在 **Source** 中选择 **GitHub Actions**

---

### 步骤 4：配置 GitHub Secrets（API Key）

1. 在仓库页面，点击 **Settings** → **Secrets and variables** → **Actions**
2. 点击 **New repository secret**
3. 填写：
   - **Name**: `GEMINI_API_KEY`
   - **Secret**: 你的 Gemini API Key（从 `.env.local` 文件中复制）
4. 点击 **Add secret**

---

### 步骤 5：触发部署

我已经为你创建了 GitHub Actions 配置文件（`.github/workflows/deploy.yml`）。

现在有两种方式触发部署：

**方式 1：推送代码（自动触发）**
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

**方式 2：手动触发**
1. 在 GitHub 仓库页面，点击 **Actions** 标签
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow"

---

### 步骤 6：获取访问链接

部署完成后（通常 1-2 分钟），访问链接格式为：
```
https://YOUR_USERNAME.github.io/my-life-script/
```

例如，如果你的用户名是 `journey`，链接就是：
```
https://journey.github.io/my-life-script/
```

---

## ✅ 完成！

现在你有了一个可以在中国大陆访问的永久链接！

---

## 🔄 更新部署

每次修改代码后，只需：

```bash
git add .
git commit -m "Update"
git push
```

GitHub Actions 会自动重新部署。

---

## ❓ 常见问题

### Q: 部署失败怎么办？
A: 在 GitHub 仓库 → Actions 中查看错误日志

### Q: 如何修改项目名称？
A: 在 GitHub 仓库 → Settings → 最下方可以重命名仓库

### Q: 如何自定义域名？
A: 在 GitHub 仓库 → Settings → Pages → Custom domain

---

## 💡 提示

- GitHub Pages 的链接格式是固定的：`username.github.io/repo-name`
- 如果仓库名称包含中文或特殊字符，建议使用英文名称
- 首次部署可能需要几分钟，请耐心等待

