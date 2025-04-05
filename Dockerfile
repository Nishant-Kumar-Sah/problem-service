# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose the port (as per .env)
EXPOSE 3000

# Start the app using dev script
CMD ["npm", "run", "dev"]