# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y python2.7 make g++

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies (including development dependencies for building TypeScript)
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build your TypeScript React application (this assumes you have a build script in your package.json)
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Start your Node.js application (assuming you have a script in your package.json to run the built React app)
CMD ["npm", "start"]
