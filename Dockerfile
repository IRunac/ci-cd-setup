
FROM node:20.5.1
WORKDIR /app
COPY ./src/server/package*.json ./
RUN npm install
COPY ./src/server .
RUN npm run build
CMD ["npm", "start"]
