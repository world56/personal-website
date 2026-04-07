#!/bin/bash

echo "📦 Copying dependencies to public folder..."

# 创建目标目录
mkdir -p public/lib/tinymce public/lib/player

# 复制 tinymce
if [ -d "node_modules/tinymce" ]; then
    echo "Copying tinymce..."
    
    # 使用精确匹配
    find node_modules/tinymce -type f \( \
        -name "*.min.js" -o \
        -name "*.min.css" -o \
        -name "*Hans.js" \
    \) | while read -r file; do
        rel_path="${file#node_modules/tinymce/}"
        dest="public/lib/tinymce/$rel_path"
        mkdir -p "$(dirname "$dest")"
        cp "$file" "$dest"
        echo "  📄 $rel_path"
    done
    
    echo "✅ tinymce copied"
else
    echo "⚠️ tinymce not found in node_modules"
fi

# 复制 media-chrome
if [ -f "node_modules/media-chrome/dist/iife/index.js" ]; then
    echo "Copying media-chrome..."
    cp node_modules/media-chrome/dist/iife/index.js public/lib/player/media-chrome.js
    echo "✅ media-chrome copied"
else
    echo "⚠️ media-chrome not found in node_modules"
fi

echo "🎉 All dependencies copied successfully!"