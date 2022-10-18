FROM node:16-alpine AS builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /myweb/dist /usr/share/nginx/html
EXPOSE 80