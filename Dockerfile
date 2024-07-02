# Use the official Node.js image as the base image
FROM node:21-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# RUN TESTS
#RUN npm run test

# Copy the rest of the application code
COPY . .

RUN npm run build

# Expose the desired port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
