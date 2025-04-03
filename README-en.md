<p align="center">
  <a href="https://devtt.com">
    <img width="72" src="https://raw.githubusercontent.com/world56/static/main/website/icon.svg">
  </a>
</p>

<h1 align="center">Personal Website</h1>

<p align="center">A fast and minimalist personal homepage</p >

![Home](https://raw.githubusercontent.com/world56/static/main/website/1.png)

## ✨ Tech Stack

- 🍔 **Next.JS** (App Router)
- 🥪 **TypeScript**
- 🧑‍🎨 **Tailwind CSS** (shadcn/ui)
- 🍟 **Prisma** (MySQL)

## 💡 Highlights

- 📱 **Mobile Responsive**  
  Responsive layout, optimized for low-resolution devices.

- 🌗 **Light & Dark Theme Support**  
  Automatically switches between light and dark mode based on system settings.

- 📖 **Multilingual Support**  
  Supports Simplified Chinese, Traditional Chinese, and English.

- 🌏 **SEO**  
  Well-optimized for search engines, supporting major search platforms. [SEO Preview](https://github.com/world56/static/tree/main/website#-seo%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88)

- 🥯 **Incremental Rendering**  
  Uses SSG and ISR rendering to significantly improve performance.

- 📷 **Resource Compression**  
  Compresses uploaded images to enhance loading speed and save storage.

- 🧑‍🎨 **Text Editing**  
  Supports a variety of features, including uploads, tables, audio, video, iframes, and code snippets for multiple programming languages.

- 🙋‍♂️ **Admin Dashboard**  
  Manage site information, personal details, content, messages, and static resources. [More details](https://github.com/world56/static/tree/main/website#-%E6%95%88%E6%9E%9C%E5%9B%BE%E9%A2%84%E8%A7%88)

- 🤩 **Visitor Logs**  
  Tracks visitor frequency and logs access history.

- 🐳 **Docker**  
  Supports multiple Docker image sources, enabling one-click deployment with minimal setup.

## 👮 Environment Variables

```bash
# MySQL Address
DATABASE_URL = mysql://root:pwd@localhost:3306/website

# System Secret Key (Required)
SECRET = your_key

# Language Setting (Default: zh-Hans)
# zh-Hans 简体中文
# zh-Hant 繁體中文
# en      English
LANG = zh-Hans
```

## 👷 Local Development

```bash
# Note: npx prisma commands only need to be executed once to generate the Prisma client and create/associate database tables.
$ git clone https://github.com/world56/website.git
$ cd website
$ npm install
$ npx prisma generate
$ npx prisma db push
$ npm run dev
```

## 🧑‍💼 Production Deployment

### 🐳 Docker

#### 1. Pull the Image

```bash
$ docker pull world56/website
```

#### 2. Start the Container

```bash
# Static resources are stored in /app/resource. Mount a volume (-v) to prevent data loss.
$ docker run -d -p 8001:3000 -e DATABASE_URL=mysql://root:mysql:3306/website -e SECRET=your_key -e LANG=en -v ~/app/website/resource:/app/resource world56/website
```

---

### 🕷️ PM2

<p><a href='https://github.com/Unitech/pm2'>PM2</a> is a production process manager for NodeJS applications, ensuring stability and uptime.</p>

<p><b>Preparation</b>: NodeJS version <b>v20.9.0</b>. Configure <b>.env</b> variables and install <a href='https://github.com/Unitech/pm2'><b>PM2</b></a> globally.</p>

<p><b>Warning‼️</b>: The resource directory hosts static files. <b>During build, the existing build directory is deleted and regenerated, which will reset the resource directory.</b> If you prefer manual deployment, build locally before uploading to the server.</p>

```bash
# 1. Generate Prisma Client (only needed once)
$ npx prisma generate

# 2. Create and associate database tables (only needed once)
$ npx prisma db push

# 3. Build the project
$ npm run build

# 4. Navigate to the build folder
$ cd build

# 5. Start and manage with PM2
$ pm2 start pm2.json

# 6. Check PM2 application status
$ pm2 ls
```

---

### 🙋‍♂️ Nginx Configuration

<p>If using Nginx as a proxy, <b>please add the following parameters.</b></p>

```bash
server {
 ...
 location / {
  proxy_set_header X-Real-IP $remote_addr; # Visitor logs
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; # Visitor logs
  proxy_pass http://127.0.0.1:8001;  # Website service port
 }

 location /api/auth/upload {
  client_max_body_size 32M; # Upload resource limit
  proxy_pass http://127.0.0.1:8001; # Website service port
 }
}
```

## 🚀 Migration & Upgrades

For users still on versions 1.0 or 1.2, upgrading to 1.3.0+ requires manually executing this [SQL file](https://github.com/world56/personal-website/blob/main/upgrade/post_type.sql). This update modifies the `type` field in the `post` table to support future feature expansion.

## 🔍 Access URLs (Example)

<p>Public Access: <a href="http://127.0.0.1:3000">http://127.0.0.1:3000</a></p>
<p>Admin Panel: <a href="http://127.0.0.1:3000/signin">http://127.0.0.1:3000/signin</a> (First-time users need to register as an admin)</p>

## 📷 Screenshots Preview

[More screenshots, click here](https://github.com/world56/static/tree/main/website#-%E6%95%88%E6%9E%9C%E5%9B%BE%E9%A2%84%E8%A7%88)

## 🙏 Special Thanks

This project’s UI inspiration comes from [@codewithsadee](https://github.com/codewithsadee) and his outstanding open-source project [vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio). Grateful for his dedication and open-source spirit.

