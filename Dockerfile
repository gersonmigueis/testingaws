FROM node:12.19.0

WORKDIR /src/app

COPY package.json .

RUN npm install 

COPY . .
EXPOSE 3000
CMD ["cmd", "start"]