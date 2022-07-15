FROM node:16
# Create app directory
WORKDIR .
# Install app dependencies
COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]

