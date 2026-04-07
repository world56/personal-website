<div align="center">

English · [中文](./README.md)

</div>

<p align="center">
  <a href="https://devtt.com">
    <img width="72" src="https://raw.githubusercontent.com/world56/static/main/website/icon.svg">
  </a>
</p>

<h1 align="center">Personal Website</h1>

<p align="center">A fast and minimalist personal homepage</p >

![Home](https://raw.githubusercontent.com/world56/static/main/website/1.png)

## ✨ Tech Stack

- 🍔 **Next.JS** (Actions)
- 🥪 **TypeScript**
- 📦 **React Query**
- 🧑‍🎨 **Tailwind CSS** (shadcn/ui)
- 🍟 **Prisma** (MySQL)

## 💡 Highlights

- 📱 **Mobile-friendly**  
  Responsive layout that supports low-resolution devices.

- 🌗 **Light/Dark Theme Support**  
  Automatically switches between light and dark themes based on system settings.

- 📖 **Multilingual**  
  Supports Simplified Chinese, Traditional Chinese, and English.

- 🌏 **SEO**  
  In-depth SEO practice, supporting major search engines. [SEO](https://github.com/world56/static/tree/main/website#-seo%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88)

- 🥯 **Incremental Rendering**  
  Uses SSG and ISR rendering to greatly improve rendering efficiency.

- 📷 **Resource Compression**  
  Compresses uploaded image resources to improve loading speed and reduce storage usage.

- 🧑‍🎨 **Text Editing**  
  Supports (including but not limited to): uploads, tables, audio, video, iframe, and code examples in multiple programming languages.

- 🙋‍♂️ **Admin Management**  
  Site info and personal info editing, content management, message management, static resource management, etc. [Related features](https://github.com/world56/static/tree/main/website#-%E6%95%88%E6%9E%9C%E5%9B%BE%E9%A2%84%E8%A7%88)

- 🤩 **Access Logs**  
  Access log feature helps you understand visitor frequency and identify malicious requests.

- 🐳 **Docker**  
  Supports multiple Docker image sources and one-click deployment, reducing cognitive load.

## 👮 Environment Variables

```bash
# MYSQL URL
DATABASE_URL = mysql://root:pwd@localhost:3306/website

# System secret (required)
SECRET = your_key

# System language (default: zh-Hans)
# zh-Hans 简体中文
# zh-Hant 繁體中文
# en      English
LANG = zh-Hans

# Public root URL of your site (used to generate absolute links for robots.txt / sitemap.xml to improve SEO)
SITE_URL = https://your_website.com
```

## 👷 Local Development

```bash
# Note: npx prisma related commands only need to run once. They generate Prisma Client and create/link database tables.
$ git clone https://github.com/world56/website.git
$ cd website
$ npm install
$ npx prisma generate
$ npx prisma db push
$ npm run dev
```

## 🐳 Production Deployment

#### 1. Pull image

```bash
# Official registry
$ docker pull world56/website
# Alibaba Cloud registry
$ docker pull registry.cn-hangzhou.aliyuncs.com/world56/website
```

#### 2. Start container

```bash
# Static resources are hosted under /app/resource. Please bind a data volume (-v) to avoid resource loss.
$ docker run -d -p 8001:3000 -e DATABASE_URL=mysql://root:mysql:3306/website -e SECRET=your_key -e LANG=zh-Hans -e SITE_URL=https://your_website.com -v ~/app/website/resource:/app/resource world56/website
```

---

### 🙋‍♂️ About Nginx

<p>If you use Nginx as a reverse proxy, <b>make sure to add the following parameters</b>.</p >

```bash

server {
 ...
 location / {
   proxy_pass http://127.0.0.1:3000; # website service port (customizable)
   proxy_set_header Host              $host;  # "Server Actions" feature
   proxy_set_header X-Forwarded-Proto $scheme; # "Server Actions" feature
   proxy_set_header X-Real-IP         $remote_addr; # "Log Management" feature
   proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for; # "Log Management" feature
 }

 location /api/auth/upload {
  client_max_body_size 21M; # "Upload Resource" feature
  proxy_pass http://127.0.0.1:3000; # website service port (customizable)
 }
}

```

## 🚀 Migration & Upgrade

#### v1.3.0
When upgrading to 1.3.0 or above, you need to manually execute the [SQL file](./scripts/sql/post_type.sql) (for better scalability).

#### v2.0.0
When upgrading to 2.0.0 or above, refer to the [Nginx configuration](./scripts/nginx/server_actions.conf) above (for Server Actions compatibility).

## 🔍 Access URLs (Example)

<p>Visitor: <a href="http://127.0.0.1:3000">http://127.0.0.1:3000</a ></p >
<p>Admin panel: <a href="http://127.0.0.1:3000/signin">http://127.0.0.1:3000/signin</a > (first-time use requires admin registration) </p >

## 📷 Screenshots

[More detail screenshots, click to view](https://github.com/world56/static/tree/main/website#-%E6%95%88%E6%9E%9C%E5%9B%BE%E9%A2%84%E8%A7%88)

## 🙏 Special Thanks

The UI inspiration for this project comes from [@codewithsadee](https://github.com/codewithsadee) and his outstanding open-source project [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio). Grateful for his dedication and open-source spirit.

