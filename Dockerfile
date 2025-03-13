# Use Node.js official image
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the port your backend runs on
EXPOSE 5000

# Command to start the app
CMD ["node", "server.cjs"]
