# Source: https://github.com/thelounge/thelounge-docker

FROM node:lts-alpine

ARG THELOUNGE_VERSION=4.4.1

LABEL org.opencontainers.image.title "Unofficial The Lounge image"
LABEL org.opencontainers.image.description "Unofficial Docker image for The Lounge, a modern web IRC client designed for self-hosting."
LABEL org.opencontainers.image.authors "The Lounge #thelounge @irc.libera.chat"
LABEL org.opencontainers.image.url "https://github.com/Lee0701/thelounge.git"
LABEL org.opencontainers.image.source "https://github.com/thelounge/thelounge-docker"
LABEL org.opencontainers.image.version "${THELOUNGE_VERSION}"
LABEL org.opencontainers.image.licenses "MIT"

ENV NODE_ENV production

ENV THELOUNGE_HOME "/var/opt/thelounge"
VOLUME "${THELOUNGE_HOME}"

# Expose HTTP.
ENV PORT 9000
EXPOSE ${PORT}

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["thelounge", "start"]

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

# Install thelounge.
RUN apk --update --no-cache --virtual build-deps add python3 build-base git && \
    ln -sf python3 /usr/bin/python && \
    yarn --non-interactive --frozen-lockfile global add file:. && \
    yarn --non-interactive cache clean && \
    apk del --purge build-deps && \
    rm -rf /root/.cache /tmp /usr/bin/python