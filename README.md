# 博粤美装智造 BOYUE INDUSTRY — 品牌官网

佛山全屋定制工厂官网，面向新加坡 / 马来西亚市场。纯静态站点：无框架、无依赖，直接双击 HTML 即可浏览，也可部署到 GitHub Pages / Cloudflare Pages。

## 页面结构（中英双语成对）

| 中文 | 英文 | 说明 |
|---|---|---|
| `index.html` | `index-en.html` | 首页：全屏图片轮播 + 右侧竖排菜单 |
| `projects.html` | `projects-en.html` | 作品列表：全部 12 个案例 |
| `project.html?id=p1` | `project-en.html?id=p1` | 案例详情：标题区 + 三列图墙（点击放大） |
| `about.html` | `about-en.html` | 关于 |
| `contact.html` | `contact-en.html` | 联系：Connection 版面 + 询单表单 |

案例 ID：`p1` ~ `p13`（`p3` 已删除，其余 12 个有效）。

## 目录说明

```
├─ *.html                 页面（5 中文 + 5 英文，共 10 个文件）
├─ assets/
│  ├─ css/style.css       全部样式（设计变量集中在文件顶部，改配色只需改那里）
│  ├─ js/
│  │  ├─ config.js        ★ 联系方式集中配置（Facebook / WhatsApp / 邮箱）
│  │  ├─ projects-data.js ★ 案例数据（增删案例、换图只改这个文件）
│  │  └─ main.js          交互：轮播、抽屉菜单、表单、灯箱
│  └─ img/                图片（153 张，长边 1600px，JPEG q85）
└─ README.md
```

## 日常维护

- **改联系方式**：编辑 `assets/js/config.js` 里的 `facebook` / `whatsapp` / `email`，全站同步生效。
- **加案例**：在 `assets/js/projects-data.js` 的 `PROJECTS` 数组里加一条（含 `gallery` 图集），中英两个版本自动生成。
- **换首页轮播**：在 `index.html` / `index-en.html` 的 `.hero-media` 里替换 `<img src>`，圆点数量与张数保持一致。
- **改配色**：`assets/css/style.css` 顶部 `:root` 的 `--c-paper`（底色）、`--c-ink`（文字色）等变量。

## 本地预览

直接双击 `index.html` 即可；如需完整测试（含查询参数页面），在仓库根目录执行：

```bash
python -m http.server 8123
# 浏览器打开 http://127.0.0.1:8123/index.html
```

## 部署到 GitHub Pages（免费、海外访问速度快）

1. 在 GitHub 新建仓库（Public），不要勾选初始化 README。
2. 关联并推送：

```bash
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git branch -M main
git push -u origin main
```

3. 仓库 → **Settings** → **Pages** → Source 选 `Deploy from a branch`，Branch 选 `main` + `/ (root)`，Save。
4. 1~2 分钟后访问 `https://<你的用户名>.github.io/<仓库名>/`。
5. 绑定自有域名：Pages 页面填 Custom domain，再到域名服务商加 CNAME 记录指向 `<你的用户名>.github.io`。

> 注：站点不含任何构建步骤，推上去即可直接访问。国内访问 GitHub Pages 可能较慢，若主要客户在新马地区则影响不大；如后续需要国内加速，可改用 Cloudflare Pages 或国内云主机（需备案）。

## 联系表单说明

联系页表单为纯前端方案：提交时自动打开 WhatsApp 并预填客户填写的全部内容（姓名 / 电话 / 邮箱 / 屋龄 / 地区 / 预算 / 类型 / 询问），客户点发送即完成提交。
如需改为邮件收单，可接入 Formspree 等免费表单服务，替换 `assets/js/main.js` 中 `#inquiry-form` 的提交逻辑。
