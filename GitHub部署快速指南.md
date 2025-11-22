# 🚀 GitHub Pages 快速部署指南

## ✅ 已完成
- ✅ Git 已初始化
- ✅ 代码已提交
- ✅ GitHub Actions 配置文件已创建

## 📋 接下来需要你完成的步骤：

### 步骤 1：创建 GitHub 仓库（在浏览器中操作）

1. **打开浏览器，访问：**
   ```
   https://github.com
   ```

2. **登录你的 GitHub 账号**（如果没有，先注册，免费）

3. **创建新仓库：**
   - 点击右上角 "+" → "New repository"
   - **Repository name**: 输入 `my-life-script`（或你喜欢的名称）
   - **Description**: 可选，例如 "我的人生剧本 H5 项目"
   - **Visibility**: 选择 **Public**（GitHub Pages 免费版需要公开仓库）
   - **不要**勾选 "Initialize this repository with a README"（我们已经有了代码）
   - 点击 "Create repository"

4. **复制仓库 URL**
   - 创建后会显示仓库页面
   - 复制显示的 URL，例如：`https://github.com/YOUR_USERNAME/my-life-script.git`
   - 或者只复制 SSH 格式：`git@github.com:YOUR_USERNAME/my-life-script.git`

---

### 步骤 2：添加远程仓库并推送代码

**在终端运行以下命令**（替换 `YOUR_USERNAME` 为你的 GitHub 用户名）：

```bash
cd "/Users/lvcheng/Desktop/我的人生剧本-(my-life-script)"

# 添加远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/my-life-script.git

# 推送到 GitHub
git push -u origin main
```

**注意**：如果提示输入用户名和密码：
- **用户名**：你的 GitHub 用户名
- **密码**：使用 Personal Access Token（不是 GitHub 密码）
  - 生成 Token：GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token (classic)
  - 权限选择：`repo`（全部仓库权限）
  - 复制生成的 Token，作为密码使用

---

### 步骤 3：配置 GitHub Pages

1. **在 GitHub 仓库页面**，点击 **Settings** 标签

2. **在左侧菜单找到 Pages**

3. **在 Source 部分**：
   - 选择 **GitHub Actions**（不是 main 分支）

---

### 步骤 4：配置 GitHub Secrets（API Key）

1. **在 GitHub 仓库页面**，点击 **Settings** → **Secrets and variables** → **Actions**

2. **点击 "New repository secret"**

3. **填写：**
   - **Name**: `GEMINI_API_KEY`
   - **Secret**: 你的 Gemini API Key（从 `.env.local` 文件中复制，以 `AIza` 开头）

4. **点击 "Add secret"**

---

### 步骤 5：触发部署

有两种方式：

**方式 1：自动触发（推荐）**
- 推送代码后会自动触发部署
- 如果已经推送了代码，GitHub Actions 会自动运行

**方式 2：手动触发**
1. 在 GitHub 仓库页面，点击 **Actions** 标签
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" → "Run workflow"

---

### 步骤 6：等待部署完成

1. **在 Actions 标签中查看部署进度**
   - 点击正在运行的工作流
   - 可以看到构建和部署的实时日志

2. **部署完成后**（通常 1-2 分钟），访问链接格式为：
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

**访问者（手机/电脑用户）**：
- ✅ 不需要任何账号
- ✅ 不需要登录
- ✅ 直接打开链接即可访问

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

## ❓ 需要帮助？

如果遇到问题：
1. 检查 GitHub Actions 中的错误日志
2. 确保已配置 `GEMINI_API_KEY` secret
3. 确保仓库是 Public（GitHub Pages 免费版需要）

