# 🔍 GitHub Actions 错误排查

## 如何查看详细错误信息

1. **访问 GitHub 仓库**
   ```
   https://github.com/Journey-hash/my-life-script
   ```

2. **点击 "Actions" 标签**

3. **点击失败的部署工作流**

4. **展开 "Build" 步骤**，查看详细错误信息

5. **复制错误信息**，这样我可以帮你更准确地诊断问题

---

## 常见错误及解决方案

### 错误 1：环境变量未配置

**错误信息：**
```
Error: API Key 未配置
```

**解决方案：**
1. 在仓库页面 → Settings → Secrets and variables → Actions
2. 确保已添加 `GEMINI_API_KEY`
3. 重新触发部署

---

### 错误 2：构建失败

**错误信息：**
```
Error: Failed to resolve...
```

**解决方案：**
- 检查 `vite.config.ts` 配置
- 确保所有依赖都已安装

---

### 错误 3：路径问题

**错误信息：**
```
Error: Failed to resolve ./dist/assets/...
```

**解决方案：**
- 已修复：`index.html` 现在使用正确的路径
- 确保 `vite.config.ts` 中设置了 `base: '/my-life-script/'`

---

## 快速检查清单

- [ ] 是否配置了 `GEMINI_API_KEY` secret？
- [ ] 是否在 Settings → Pages 中选择了 "GitHub Actions"？
- [ ] 是否推送了最新的代码？
- [ ] 是否查看了 Actions 中的详细错误日志？

---

## 需要帮助？

请提供：
1. GitHub Actions 中 "Build" 步骤的完整错误信息
2. 或者截图显示的错误信息

这样我可以更准确地帮你解决问题。

