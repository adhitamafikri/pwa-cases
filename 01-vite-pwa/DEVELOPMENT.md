# DEVELOPMENT GUIDE

## Prerequisites

- Node 22.16.0
- Install `mkcert`. Read the documentation [https://github.com/FiloSottile/mkcert](https://github.com/FiloSottile/mkcert)
- Generate local cert with `mkcert`. Prefer to generate in the `certs` directory in the project

## Tools

This PWA is built with [https://vite-pwa-org.netlify.app/](https://vite-pwa-org.netlify.app/) plugin

## Generating PWA Assets

- Create an `svg` logo and put it into the `public` directory
- Run the asset generation script -> `npm run generate-pwa-assets`. You might adjust the `svg` logo name based on the `svg` logo that you've put into `public` directory
