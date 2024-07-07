FROM alpine:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Install Node.js and npm
RUN apk add --update nodejs npm

# Copy all relevant files to the container
COPY .env.local ./
COPY package.json ./
COPY public ./public
COPY .next ./.next
COPY node_modules ./node_modules

# Install the dependencies. This should be skipped if the node_modules folder is copied from the host.
RUN npm install

# Start the application.
CMD ["sh", "-c", "npm run start"]

# Set the NODE_ENV to production. Dunno what this does but Vercel does it.
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Tell Next to use this port
ENV PORT=3000
