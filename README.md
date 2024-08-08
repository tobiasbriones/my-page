# My Page

[![GitHub Repository](https://img.shields.io/static/v1?label=GITHUB&message=REPOSITORY&labelColor=555&color=0277bd&style=for-the-badge&logo=GITHUB)](https://github.com/tobiasbriones/my-page)

[![Project GitHub License](https://img.shields.io/github/license/tobiasbriones/my-page.svg?style=flat-square)](https://github.com/tobiasbriones/my-page/blob/main/LICENSE)

Brief personal landing page for a nice and colorful professional and personal
index, resume or portfolio.

## Getting started

Install dependencies with `npm i`.

Run in dev-mode with `npm run start`.

Build to `./www` with `npm run build`.

Configuration files define:

- [prod.config.ts](config/prod.config.ts): The application production values.

- [dev.config.ts](config/prod.config.ts): The application development values.

- [dev.user.json](src/dev.user.json): A development user to load into the
  application with generic values.

- [env.dev.user.json](src/dev.user.json): A development local user to load into
  the application with custom values. It's not part of the project, so it
  doesn't go into Git. If it exists, it will override the `dev.user.json`
  file in dev mode. You can rename it to `_env.dev.user.json` and rebuild, if
  you don't want to override `dev.user.json` in the development bundle.

For the `user.json` user file used in production, add the URL of the json file
to the production configuration.

## Contact

This project: [Docs](https://tobiasbriones.github.io/my-page),
[Repository](https://github.com/tobiasbriones/my-page)

Tobias Briones: [GitHub](https://github.com/tobiasbriones)

## About

**My Page**

Brief personal landing page for a nice and colorful professional and personal
index, resume or portfolio.

Copyright © 2021 Tobias Briones. All rights reserved.

### License

This project is licensed under the [MIT License](./LICENSE).
