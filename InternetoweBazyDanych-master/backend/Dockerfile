FROM node:14.3.0-slim
WORKDIR /app/backend
COPY . .
RUN npm install
RUN npm install -g nodemon
EXPOSE 3102
CMD npm start