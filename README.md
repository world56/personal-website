<div align="center">

[English](./README-en.md) · 中文

</div>

<p align="center">
  <a href="https://devtt.com">
    <img width="72" src="https://raw.githubusercontent.com/world56/static/main/website/icon.svg">
  </a>
</p>

<h1 align="center">Personal Website</h1>

<p align="center">快速、简约风格的个人主页</p >

![Home](https://raw.githubusercontent.com/world56/static/main/website/1.png)

## ✨ 技术栈

- 🍔 **Next.JS** (Actions)
- 🥪 **TypeScript**
- 📦 **React Query**
- 🧑‍🎨 **Tailwind CSS** (shadcn/ui)
- 🍟 **Prisma** (MySQL)

## 💡 亮点

- 📱 **适配移动端设备**  
  响应式布局，支持低分辨率设备访问

- 🌗 **支持浅色、深色主题**  
  根据系统设置，自动调整白日、夜间皮肤

- 📖 **多语言**  
  支持简体中文、繁体中文、English

- 🌏 **SEO**  
  深度实践，支持各大搜索引擎[SEO](https://github.com/world56/static/tree/main/website#-seo%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88)

- 🥯 **增量渲染**  
  采用 SSG、ISR 渲染，极大提升渲染效率

- 📷 **资源压缩**  
  对上传的图片资源进行压缩，提升加载速度，减少空间占用

- 🧑‍🎨 **文本编辑**  
  支持且不限于：上传、表格、音频、视频、iframe、多种编程语言代码示例

- 🙋‍♂️ **后台管理**  
  网站信息、个人信息编辑，内容管理、留言管理、静态资源管理等[相关功能](https://github.com/world56/static/tree/main/website#-%E6%95%88%E6%9E%9C%E5%9B%BE%E9%A2%84%E8%A7%88)

- 🤩 **访问日志**  
  访问日志功能，帮助您了解访客的访问频率、识别恶意请求。

- 🐳 **Docker**  
  支持 docker 多个镜像源，一键部署，降低心智负担

## 👮 环境变量 Environment

```bash
# MYSQL地址
DATABASE_URL = mysql://root:pwd@localhost:3306/website

# 系统密钥（必填）
SECRET = your_key

# 系统语言（默认zh-Hans）
# zh-Hans 简体中文
# zh-Hant 繁體中文
# en      English
LANG = zh-Hans

# 站点对外访问的根地址（用于生成 robots.txt / sitemap.xml 的绝对链接，提升SEO效率）
SITE_URL = https://your_website.com
```

## 👷 本地开发 Development

```bash
# 注：npx prisma 相关命令仅需执行一次即可，它的作用是生成Prisma客户端以及创建、关联数据库表
$ git clone https://github.com/world56/website.git
$ cd website
$ npm install
$ npx prisma generate
$ npx prisma db push
$ npm run dev
```

## 🐳 生产部署 Production

#### 1.拉取镜像

```bash
# 官方源
$ docker pull world56/website
# 阿里云源
$ docker pull registry.cn-hangzhou.aliyuncs.com/world56/website
```

#### 2.启动容器

```bash
# 静态资源托管在/app/resource目录，请绑定数据卷（-v），防止资源丢失。
$ docker run -d -p 8001:3000 -e DATABASE_URL=mysql://root:mysql:3306/website -e SECRET=your_key -e LANG=zh-Hans -e SITE_URL=https://your_website.com -v ~/app/website/resource:/app/resource world56/website
```

---

### 🙋‍♂️ 关于 Nginx

<p>若使用 Nginx 进行代理，请<b>务必添加下列参数</b>。</p >

```bash

server {
 ...
 location / {
   proxy_pass http://127.0.0.1:3000; # website服务端口（自定义）
   proxy_set_header Host              $host;  # “Server Actions” 功能
   proxy_set_header X-Forwarded-Proto $scheme; # “Server Actions” 功能
   proxy_set_header X-Real-IP         $remote_addr; # “日志管理” 功能
   proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for; # “日志管理” 功能
 }

 location /api/auth/upload {
  client_max_body_size 21M; # “上传资源” 功能
  proxy_pass http://127.0.0.1:3000; # website服务端口（自定义）
 }
}

```

## 🚀 迁移升级

#### v1.3.0
升级至 1.3.0 及以上版本，需要手动执行[SQL文件](./scripts/sql/post_type.sql)（提升可扩展性）。

#### v2.0.0
升级至 2.0.0 及以上版本，需参考上述[Nginx配置](./scripts/nginx/server_actions.conf)（适配 Server Actions）。

## 🔍 访问地址（例）

<p>普通访客：<a href="http://127.0.0.1:3000">http://127.0.0.1:3000</a ></p >
<p>后台管理：<a href="http://127.0.0.1:3000/signin">http://127.0.0.1:3000/signin</a >  (首次使用需要注册管理员) </p >

## 📷 效果图预览

[更多细节图，点击查看](https://github.com/world56/static/tree/main/website#-%E6%95%88%E6%9E%9C%E5%9B%BE%E9%A2%84%E8%A7%88)

## 🙏 特别鸣谢 Special Thanks

本项目 UI 灵感来源于[@codewithsadee](https://github.com/codewithsadee)，和他优秀的开源项目 [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio)，感谢他的付出与开源精神。  
The UI inspiration for this project come from [@codewithsadee](https://github.com/codewithsadee) and his outstanding open-source project [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio). Grateful for his dedication and open-source spirit.
