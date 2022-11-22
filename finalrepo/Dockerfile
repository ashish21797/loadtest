FROM node:14.18.1
ENV APPDIR='/opt/app'
WORKDIR /opt/app
COPY package*.json /opt/app/
RUN npm install
COPY . /opt/app
EXPOSE 3000
ENV NODE_ENV=development
CMD [ "node", "app.js" ]