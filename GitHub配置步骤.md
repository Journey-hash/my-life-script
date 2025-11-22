# ✅ 代码已上传！接下来配置 GitHub Pages

## 📋 接下来的步骤

### 步骤 1：配置 GitHub Pages

1. **打开浏览器，访问你的仓库：**
   ```
   https://github.com/Journey-hash/my-life-script
   ```

2. **点击仓库页面顶部的 "Settings" 标签**

3. **在左侧菜单中找到 "Pages"**

4. **在 "Source" 部分：**
   - 选择 **"GitHub Actions"**（不是 main 分支）
   - 如果看到 "Deploy from a branch"，改为选择 "GitHub Actions"

5. **保存设置**（如果有保存按钮）

---

### 步骤 2：配置 GitHub Secrets（API Key）

这一步很重要，否则 AI 功能无法使用！

1. **在仓库页面，点击 "Settings" → "Secrets and variables" → "Actions"**

2. **点击 "New repository secret" 按钮**

3. **填写信息：**
   - **Name**: `GEMINI_API_KEY`（必须完全一致，包括大小写）
   - **Secret**: 你的 Gemini API Key
     - 从 `.env.local` 文件中复制
     - 以 `AIza` 开头

4. **点击 "Add secret"**

---

### 步骤 3：触发部署

有两种方式：

**方式 1：自动触发（推荐）**
- 如果代码已经推送，GitHub Actions 应该会自动运行
- 在仓库页面，点击 **"Actions"** 标签
- 应该能看到 "Deploy to GitHub Pages" 工作流正在运行

**方式 2：手动触发**
1. 在仓库页面，点击 **"Actions"** 标签
2. 在左侧选择 **"Deploy to GitHub Pages"** 工作流
3. 点击右侧的 **"Run workflow"** 按钮
4. 选择分支（main），点击 **"Run workflow"**

---

### 步骤 4：等待部署完成

1. **在 Actions 标签中查看部署进度**
   - 点击正在运行的工作流
   - 可以看到构建和部署的实时日志
   - 通常需要 1-2 分钟

2. **部署成功的标志：**
   - 工作流显示绿色的 ✓
   - 所有步骤都显示成功

---

### 步骤 5：获取访问链接

部署完成后，你的访问链接格式为：
```
https://Journey-hash.github.io/my-life-script/
```

**如何找到链接：**
1. 在仓库页面，点击 **"Settings" → "Pages"**
2. 在页面顶部会显示：
   ```
   Your site is live at https://Journey-hash.github.io/my-life-script/
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

每次修改代码后：
1. 在 GitHub Desktop 中提交更改
2. 点击 "Push origin"
3. GitHub Actions 会自动重新部署

---

## ❓ 常见问题

### Q: Actions 显示失败？
A: 检查：
- 是否配置了 `GEMINI_API_KEY` secret
- 查看 Actions 日志中的错误信息

### Q: 页面显示 404？
A: 确保：
- 在 Settings → Pages 中选择了 "GitHub Actions"
- 等待部署完成（可能需要几分钟）

### Q: 如何修改项目名称？
A: 在 Settings → 最下方可以重命名仓库

---

## 💡 提示

- 首次部署可能需要 2-3 分钟，请耐心等待
- 如果部署失败，检查 Actions 日志中的错误信息
- 确保 API Key 配置正确，否则 AI 功能无法使用

