# Create image based on the official Node 10 image from dockerhub
FROM node:10 as build

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

ARG configuration=staging

RUN npm run build -- --outputPath=./dist/out --configuration $configuration

# Stage 2, use the compiled app, ready for production with Nginx
FROM nginx

# cpy local nginx conf into container
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf

# copy img build in step 1 from ang container into nginx directory
COPY --from=build /usr/src/app/dist/out/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]