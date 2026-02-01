FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code and TypeScript config
COPY tsconfig.json ./
COPY ./src ./src

# Build TypeScript
RUN npm run build

# Set environment variable for port
ENV PORT=8080

EXPOSE 8080

# Run the compiled JavaScript
CMD ["npm", "start"]