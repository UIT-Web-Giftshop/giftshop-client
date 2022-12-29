# Overview

## environment

- Please use node v16 for running

## docker

- we use `env.sh` to implement runtime environment variables,. in `index.html` use `<script src="%BASE_URL%/env-config.js">`.
- `docker build` we build src to static js which will be deployed by nginx.
- we can use environment in docker to override or create new env variable not exist.
  - can use env `APP_ENV` to use `.env.{APP_ENV}` file or define each one.
  - env use in vue-app MUST have prefix `VUE_APP_`.

- Deploy sample: `https://github.com/hungntsol-free/da2-deploy`