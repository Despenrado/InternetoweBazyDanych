FROM node:14.3.0
WORKDIR /app/backend
COPY package.json .
RUN npm install
RUN npm install -g nodemon
COPY . .
EXPOSE 3102
CMD npm start