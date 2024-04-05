
FROM --platform=linux/amd64 node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install -f

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
