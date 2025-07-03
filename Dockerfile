FROM node:14-buster

# Install Python 2.7 and build dependencies
RUN apt-get update && apt-get install -y \
    python2.7 \
    python-pip \
    build-essential \
    && rm -f /usr/bin/python \
    && ln -s /usr/bin/python2.7 /usr/bin/python

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Set Python for node-gyp
ENV PYTHON=/usr/bin/python2.7

# Install dependencies
RUN npm ci

# Rebuild node-sass for the correct environment
RUN npm rebuild node-sass

# Copy all source code
COPY . .

# Build the project
RUN npm run build

# Create a volume mount point for the dist folder
VOLUME ["/app/dist"]

# Default command (can be overridden)
CMD ["echo", "Build complete! Check the dist folder."]