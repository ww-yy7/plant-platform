# 选择 Node.js 运行环境
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 拷贝依赖文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 拷贝全部代码
COPY . .

# 构建 Next.js
RUN npm run build

# 暴露 3000 端口
EXPOSE 3000

# 启动 Next.js
CMD ["npm", "start"]
