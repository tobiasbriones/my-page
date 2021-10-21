import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/main.css',
  globalScript: 'src/main.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        globPatterns: [
          '**/*.{js,css,json,html,ico,png}'
        ]
      },
      baseUrl: 'https://myapp.local/',
      copy: [
        {
          src: 'manifest.webmanifest'
        },
        {
          src: 'data.json'
        }
      ]
    }
  ]
};
