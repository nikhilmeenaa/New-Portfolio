# Use an official Node.js image with version 20 as the base
FROM node:20-bullseye

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json, pnpm-lock.yaml, and .npmrc to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# GEnerate prisma
RUN pnpm prisma generate

# Build the Next.js application
RUN pnpm run build


# Expose the port on which the app will run
EXPOSE 3000

# Start the React application
CMD ["pnpm", "start"]
