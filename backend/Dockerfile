# Use official Node.js LTS image
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all backend files into container
COPY . .

# Expose backend port
EXPOSE 5000

# Command to run backend
CMD ["node", "server.js"]
