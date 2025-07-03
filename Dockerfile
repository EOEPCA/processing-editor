FROM node:22-alpine AS build
# Install git as we install the JS client from git instead of npm
RUN apk --no-cache add git

# Copy source code
COPY . /src/processing-editor
WORKDIR /src/processing-editor

# Build
RUN npm install
RUN npm run build

# Copy build folder and run with nginx
FROM nginx:1.28.0-alpine
COPY --from=build /src/processing-editor/dist /usr/share/nginx/html
