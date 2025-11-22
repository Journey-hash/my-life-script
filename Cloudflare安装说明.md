# Cloudflare Tunnel 安装和使用说明

## 方法 1：使用 npx（最简单，推荐）

直接在终端运行：
```bash
cd "/Users/lvcheng/Desktop/我的人生剧本-(my-life-script)"
npx --yes cloudflared tunnel --url http://localhost:3000
```

等待几秒，会显示一个公网链接，例如：
```
https://xxxx-xxxx-xxxx.trycloudflare.com
```

## 方法 2：手动安装（如果需要长期使用）

### 步骤 1：安装 Homebrew（如果还没有）
在终端运行：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 步骤 2：安装 cloudflared
```bash
brew install cloudflare/cloudflare/cloudflared
```

### 步骤 3：运行
```bash
cloudflared tunnel --url http://localhost:3000
```

## 方法 3：直接下载（如果 Homebrew 不可用）

1. 访问：https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/
2. 下载 macOS 版本
3. 解压后运行：
```bash
./cloudflared tunnel --url http://localhost:3000
```

---

## 使用说明

1. **确保开发服务器正在运行**
   ```bash
   npm run dev
   ```

2. **在新终端运行 cloudflared**
   ```bash
   npx --yes cloudflared tunnel --url http://localhost:3000
   ```

3. **复制显示的链接**
   会显示类似这样的链接：
   ```
   https://xxxx-xxxx-xxxx.trycloudflare.com
   ```

4. **在手机或其他电脑上打开这个链接**

---

## 注意事项

- 链接在 cloudflared 进程关闭后会失效
- 每次运行可能会生成不同的链接
- 这个链接可以在任何网络访问（包括手机移动网络）

