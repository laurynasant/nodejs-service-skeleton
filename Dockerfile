FROM node:18-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app/
RUN yarn install --frozen-lockfile
RUN yarn build
ENV NODE_ENV=production
EXPOSE 8080
CMD ["node", "--enable-source-maps", "dist/main.js" ]