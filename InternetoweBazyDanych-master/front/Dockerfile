FROM node:14.3.0-slim
WORKDIR /app/frontend
COPY . .
RUN npm install
RUN npm install react-scripts --save
RUN npm install react-router-dom
EXPOSE 3000
CMD npm start 
