FROM node:14.3.0-slim
WORKDIR /app/frontend
COPY . .
RUN npm install
RUN npm install react-scripts --save
RUN npm install react-router-dom
RUN npm install jwt-decode
RUN npm install react-select
RUN npm install
EXPOSE 3000
CMD npm start 
