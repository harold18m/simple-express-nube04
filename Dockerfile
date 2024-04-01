FROM node:18

RUN git clone "https://github.com/harold18m/simple-express-nube04.git" app

WORKDIR /app

RUN npm install

EXPOSE 11600

CMD ["npm", "start"]

LABEL name="simple-express-nube04"
