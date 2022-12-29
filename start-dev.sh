#!/bin/bash

export APP_ENV=development \
 && chmod +x ./env.sh && ./env.sh \
 && cp ./env-config.js ./public/ \
 && vue-cli-service serve