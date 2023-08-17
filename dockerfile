# Base this image on an official Node.js long term support image.
FROM node:18.16.0-alpine

# Install Tini using Alpine Linux's package manager, apk.
RUN apk add --no-cache tini

# Use Tini as the init process. Tini will take care of system stuff
# for us, like forwarding signals and reaping zombie processes.
ENTRYPOINT ["/sbin/tini", "--"]
