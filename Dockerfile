FROM node:16-alpine as builder
ARG build_env=dev
RUN echo ${build_env}
ENV NODE_ENV=production
WORKDIR /app
COPY ["package*.json", "yarn*.lock", "./"]
RUN yarn install
COPY . .
RUN npm run build:${build_env}

FROM nginx:stable-alpine as publish
WORKDIR /usr/share/nginx/html
COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/ .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
