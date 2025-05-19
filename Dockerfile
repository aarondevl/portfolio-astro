FROM node:20.16-bullseye

RUN npm i -g npm@9.8.0

WORKDIR /portfolio-astro

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 25001

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "25001"]